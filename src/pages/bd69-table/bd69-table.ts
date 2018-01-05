import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bd69-table',
  templateUrl: 'bd69-table.html',
})
export class Bd69TablePage {

  headerTitle = "Bảng xếp hạng"

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bd69TablePage');
  }
}
