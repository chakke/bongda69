import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bd69-news-feed',
  templateUrl: 'bd69-news-feed.html',
})
export class Bd69NewsFeedPage {

  headerTitle = "Bảng tin"

  constructor(public navCtrl: NavController,
    public mEvents: Events,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bd69NewsFeedPage');
  }

  showMenu(){
    this.mEvents.publish("showmenu");
  }

}
