import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-bd69-fixtures',
  templateUrl: 'bd69-fixtures.html',
})
export class Bd69FixturesPage {

  headerTitle = "Lịch thi đấu";
  dropdownTitle = "Theo giải đấu";
  leagues = ["Tất cả các giải", "Nghệ league 2017", "Forumbongda Fairplay Cup 2017", "Hạng Trung Fair Play Cup 2017", "VCK Giải Vô Địch Sân 7 TP.HN 2017", "FORUMBONGDA RESPECT 2017"]
  currentIndex = 0;

  constructor(public navCtrl: NavController,
    public mEvents: Events,
    public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.mEvents.publish("menu:changed", "Bd69FixturesPage");
  }

  showMenu() {
    this.mEvents.publish("showmenu");
  }

  onChooseLeague(ev) {
    console.log(ev);

  }
}
