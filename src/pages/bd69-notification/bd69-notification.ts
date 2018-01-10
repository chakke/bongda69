import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-bd69-notification',
  templateUrl: 'bd69-notification.html',
})
export class Bd69NotificationPage {

  constructor(public navCtrl: NavController,
    public mEvents: Events,
    public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.mEvents.publish("menu:changed", "Bd69NotificationPage");
  }
}
