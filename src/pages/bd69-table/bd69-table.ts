import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";

@IonicPage()
@Component({
  selector: 'page-bd69-table',
  templateUrl: 'bd69-table.html',
})
export class Bd69TablePage {
  listLeague: any = [];

  page: any = "Bd69TableDetailPage";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mFirebaseService: FirebaseServiceProvider
  ) {
    // this.listLeague();
  }

  ionViewDidEnter() {
    this.getLeague();
  }
  getLeague() {
    let listLeague;
    let league = this.mFirebaseService.getCollection("tables").snapshotChanges().subscribe(data => {
      listLeague = data.map(item => {
        return {
          id: item.payload.doc.id,
          name: item.payload.doc.data().league_name,
          page: "Bd69TableDetailPage"
        }
      });
    });
    setTimeout(() => {
      this.getLeague = listLeague;
      console.log(this.listLeague);
    }, 1000);
    
  }
}
