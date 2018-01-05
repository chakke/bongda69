import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bd69-favorites',
  templateUrl: 'bd69-favorites.html',
})
export class Bd69FavoritesPage {

  headerTitle = "Mục yêu thích"

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bd69FavoritesPage');
  }

}
