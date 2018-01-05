import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bd69-news-feed',
  templateUrl: 'bd69-news-feed.html',
})
export class Bd69NewsFeedPage {

  constructor(public navCtrl: NavController,
    public mEvents: Events,
    public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.mEvents.publish("menu:changed", "Bd69NewsFeedPage");
  }

  onClickSmth(){
    this.navCtrl.push("Bd69EditPostPage");
  }

}
