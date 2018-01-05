import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseServiceProvider } from "../../../providers/firebase-service/firebase-service";

@IonicPage()
@Component({
  selector: 'page-news-location',
  templateUrl: 'news-location.html',
})
export class NewsLocationPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mFirebaseService: FirebaseServiceProvider
  ) {
  }

  ionViewDidLoad() {
    this.getStadium();
  }

  getStadium() {
    let listStadium;
    let stadium = this.mFirebaseService.getCollection("stadiums").snapshotChanges().subscribe(data => {
      listStadium = data.map(item => {
        return {
          name: item.payload.doc.data().name
        }
      });
    });
    let listProvince;
    let province = this.mFirebaseService.getCollectionOrderBy("stadiums", "province_name").snapshotChanges().subscribe(data => {
      listProvince = data.map(item => {
        return {
          provinceName: item.payload.doc.data().province_name
        }
      });
      let list = [{ a: "h" }, { a: "h" }, { a: "b" }, { a: "b" }];
      let listProvinceFilter: any;
      for (let i = 0; i < list.length; i++) {
        for (let ii = i + 1; i < list.length; i++) {
          if (list[i].a == list[ii].a) {
            console.log(list[ii]);
          }
        }

      }
    })
  }

}
