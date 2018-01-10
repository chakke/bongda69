import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { Bd69Module } from '../../providers/bongda69/bd69-module';

import { League } from '../../providers/bongda69/classes/league';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

class PrivateLeague {
  id: string;
  name: string;
}

@IonicPage()
@Component({
  selector: 'page-bd69-fixtures',
  templateUrl: 'bd69-fixtures.html',
})
export class Bd69FixturesPage {
  parentSubject: Subject<any> = new Subject();

  mLeague: Array<PrivateLeague> = [];
  headerTitle = "Lịch thi đấu";
  dropdownTitle = "Theo giải đấu";
  leagues = ["Tất cả các giải"];
  currentIndex = 0;
  viewFixtures: Array<PrivateLeague> = [];


  constructor(public navCtrl: NavController,
    public mEvents: Events,
    public mBd69Module: Bd69Module,
    public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.mEvents.publish("menu:changed", "Bd69FixturesPage");

    this.loadData();
  }

  loadData() {
    this.mBd69Module.getLeaguesInfo().subscribe(data => {
      this.leagues = ["Tất cả các giải"];
      data.forEach(league => {
        let pLeague: PrivateLeague = new PrivateLeague();

        pLeague.id = league.id;
        pLeague.name = league.name;

        this.mLeague.push(pLeague);
        this.leagues.push(pLeague.name);
      })
      this.setUpDropDown(this.dropdownTitle, this.leagues, this.currentIndex);
      
      this.onViewAll();
    })
  }


  setUpDropDown(title: string, items: Array<string>, currentIndex: number) {
    this.parentSubject.next({ 'title': title, 'items': items, 'currentIndex': currentIndex });
  }

  onChooseLeague(ev) {
    if (this.currentIndex != ev.index) {
      this.currentIndex = ev.index;

      this.viewFixtures = [];
      if (this.currentIndex == 0) {
        this.onViewAll();
      }
      else {
        for (let i = 0; i < this.mLeague.length; i++) {
          if (this.mLeague[i].name == ev.item) {
            this.viewFixtures.push(this.mLeague[i]);
            break;
          }
        }
      }
    }
  }

  onViewAll(){
    this.currentIndex = 0;
    this.mLeague.forEach(league => {
      this.viewFixtures.push(league);
    });
  }
}
