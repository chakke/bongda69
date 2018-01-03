import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-bd69-table-detail',
  templateUrl: 'bd69-table-detail.html',
})
export class Bd69TableDetailPage {

  page1: any = "Page1Page";
  page2: any = "Page2Page";
  page3: any = "Page3Page";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bd69TableDetailPage');
  }

}
