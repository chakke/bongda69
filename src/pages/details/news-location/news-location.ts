import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseServiceProvider } from "../../../providers/firebase-service/firebase-service";

import { Province } from "../../../providers/bongda69/classes/province";
import { District } from "../../../providers/bongda69/classes/district";
import { Observable } from 'rxjs/Observable';

import { AppControllerProvider } from "../../../providers/bongda69/app-controller";

@IonicPage()
@Component({
  selector: 'page-news-location',
  templateUrl: 'news-location.html',
})
export class NewsLocationPage {

  mProvinces: Observable<Province[]>;

  headerTitle = "Chọn sân";
  listProvince: Observable<Province[]>;
  listDistric: Observable<Province[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mFirebaseService: FirebaseServiceProvider,
    public mAppController: AppControllerProvider
  ) {
  }

  ngAfterViewInit() {
    this.listProvince = this.mAppController.getProvince();
  }
  ionViewDidLoad() {
    console.log(this.listProvince);
  }


}
