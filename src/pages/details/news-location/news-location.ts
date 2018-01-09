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

  province = "Thành phố";
  province_index= 0;
  district = "Quận/Huyện";
  district_index = 0;
  leagues = ["Hà Nội", "Nghệ league 2017", "Forumbongda Fairplay Cup 2017", "Hạng Trung Fair Play Cup 2017", "VCK Giải Vô Địch Sân 7 TP.HN 2017", "FORUMBONGDA RESPECT 2017"]
  leagues1 = ["Hà Nội", "Nghệ league 2017", "Forumbongda Fairplay Cup 2017", "Hạng Trung Fair Play Cup 2017", "VCK Giải Vô Địch Sân 7 TP.HN 2017", "FORUMBONGDA RESPECT 2017"]

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
  onChooseProvince(event){
    console.log(event);
  }
  onChooseDistrict(event){
    console.log(event);
    
  }


}
