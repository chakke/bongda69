import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseServiceProvider } from "../../../providers/firebase-service/firebase-service";

import { Stadium } from "../../../providers/bongda69/classes/stadium";
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-news-location',
  templateUrl: 'news-location.html',
})
export class NewsLocationPage {

  mProvinces : Observable<Stadium>;

  headerTitle = "Chọn sân";
  listProvince = [];

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
    this.mFirebaseService.getCollectionOrderBy("provinces","name").snapshotChanges().subscribe(data =>{
      this.listProvince = data.map(item =>{
        return {
          name: item.payload.doc.data().name
        }
      });
    console.log(this.listProvince);
      
    });

    console.log();
    
    
    

    let province = this.mFirebaseService.getCollectionOrderBy("stadiums", "province_name").snapshotChanges().subscribe(data => {
      listProvince = data.map(item => {
        return {
          provinceName: item.payload.doc.data().province_name
        }
      });

    })
  }

}
