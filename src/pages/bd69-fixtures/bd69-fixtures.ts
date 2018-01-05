import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-bd69-fixtures',
  templateUrl: 'bd69-fixtures.html',
})
export class Bd69FixturesPage {

  headerTitle = "Lịch thi đấu"

  constructor(public navCtrl: NavController,
    public mEvents: Events,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bd69FixturesPage');
  }

  showMenu() {
    this.mEvents.publish("showmenu");
  }
}
