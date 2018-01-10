import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Bd69ListClubsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bd69-list-clubs',
  templateUrl: 'bd69-list-clubs.html',
})
export class Bd69ListClubsPage {
  headerTitle ="Danh sách đội bóng";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bd69ListClubsPage');
  }

  onClickSearch(){

  }
}
