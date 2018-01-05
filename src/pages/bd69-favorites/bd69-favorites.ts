import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bd69-favorites',
  templateUrl: 'bd69-favorites.html',
})
export class Bd69FavoritesPage {

  headerTitle = "Mục yêu thích"

  constructor(public navCtrl: NavController,
    public mEvents: Events,
    public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.mEvents.publish("menu:changed", "Bd69FavoritesPage");
  }

}
