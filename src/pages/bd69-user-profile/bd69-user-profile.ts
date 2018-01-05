import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bd69-user-profile',
  templateUrl: 'bd69-user-profile.html',
})
export class Bd69UserProfilePage {

  headerTitle = "Thông tin người dùng"

  constructor(public navCtrl: NavController,
    public mEvents: Events,
    public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.mEvents.publish("menu:changed", "Bd69UserProfilePage");
  }

}
