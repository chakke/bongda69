import { Component } from '@angular/core';

import { AngularFireDatabase } from "angularfire2/database";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";


@Component({
  selector: 'bd69-table',
  templateUrl: 'bd69-table.html'
})
export class Bd69TableComponent {

  listClub: any = [];
  loading : boolean = false;

  pageMain: any = "Bd69TableBxhPage";

  constructor(
    public angularFirestore: AngularFirestore
  ) {
  }

  ngAfterViewInit() {
    // this.getLeague();
    this.getClubs("hel2017");
  }


  // getLeague() {
  //   let league = this.angularFirestore.collection("tables");
  //   league.snapshotChanges().subscribe(data => {
  //     data.map(item => {
  //       // console.log(item.payload.doc.data());

  //     })
  //   })
  // }
  getClubs(league: string) {
    let clubs = this.angularFirestore.collection("tables").doc(league).collection("clubs");
    clubs.snapshotChanges().subscribe(data => {
      this.listClub = data.map(item => {
        return {
          id: item.payload.doc.data().club_id,
          logo: item.payload.doc.data().club_logo,
          name: item.payload.doc.data().club_name,
          drawn: item.payload.doc.data().drawn,
          goals_against: item.payload.doc.data().goals_against,
          goals_different: item.payload.doc.data().goals_different,
          goals_for: item.payload.doc.data().goals_for,
          group: item.payload.doc.data().group,
          lost: item.payload.doc.data().lost,
          played: item.payload.doc.data().played,
          points: item.payload.doc.data().points,
          position: item.payload.doc.data().position,
          won: item.payload.doc.data().won
        }
      });
    })
  }

}
