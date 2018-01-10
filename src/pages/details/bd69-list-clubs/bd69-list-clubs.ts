import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-bd69-list-clubs',
  templateUrl: 'bd69-list-clubs.html',
})
export class Bd69ListClubsPage {
  headerTitle = "Danh sách đội bóng";
  iconRight = "ios-search-outline";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bd69ListClubsPage');
  }

  onClickSearch() {

  }
}
