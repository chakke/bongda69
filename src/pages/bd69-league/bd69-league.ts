import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";

@IonicPage()
@Component({
  selector: 'page-bd69-league',
  templateUrl: 'bd69-league.html',
})
export class Bd69LeaguePage {

  headerTitle = "Thông tin giải đấu";

  listLeague: any = [
    {
      id: "hel2017",
      page: "Bd69TableDetailPage",
      name: "HN Elevent League 2017",
      club: [
        {
          id: "aia_fc",
          name: "AIA FC",
          won: 3,
          points: 9
        }, {
          id: "bgate_fc",
          name: "B-GATE FC",
          won: 2,
          points: 6
        }, {
          id: "nghe_fc",
          name: "NGHỆ FC",
          won: 0,
          points: 0
        }, {
          id: "anhem_fc",
          name: "ANH-EM FC",
          won: 0,
          points: 0
        },
      ]
    },
    {
      id: "hpl2017",
      page: "Bd69TableDetailPage",
      name: "HN Phủi League 2017",
      club: [
        {
          id: "thanhxuan_fc",
          name: "THANH XUÂN FC",
          won: 2,
          points: 7
        }, {
          id: "tnt_fc",
          name: "TNT FC",
          won: 1,
          points: 5
        }, {
          id: "phui_fc",
          name: "PHỦI FC",
          won: 0,
          points: 1
        }, {
          id: "anhem_fc",
          name: "ANH-EM FC",
          won: 0,
          points: 0
        },
      ]
    },
    {
      id: "dnl2017",
      page: "Bd69TableDetailPage",
      name: "Đà Nẵng League 2017",
      club: [
        {
          id: "lala_fc",
          name: "LALA FC",
          won: 3,
          points: 9
        }, {
          id: "hiha_fc",
          name: "HIHA FC",
          won: 2,
          points: 6
        }, {
          id: "chuoi_fc",
          name: "CHUỐI FC",
          won: 0,
          points: 0
        }, {
          id: "anhlon_fc",
          name: "ANH-LỚN FC",
          won: 0,
          points: 0
        },
      ]
    },
  ]
  listLeagues: any;


  constructor(
    public navCtrl: NavController,
    public mEvents: Events,
    public navParams: NavParams,
    public mFirebaseService: FirebaseServiceProvider
  ) {

  }

  ionViewDidLoad() {
    // this.getLeague();
    // console.log("listLeagues", this.listLeague);
    
    

  }

  showMenu() {
    this.mEvents.publish("showmenu");
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
      this.listLeagues = listLeague;
    }, 1000);

  }
  data: any;
  list: Array<any> = [];
  getParams(){
    if(this.navParams.get("data")) this.data = this.navParams.get("data");
  }
  selectedIndex: number;
  onTabSelect(ev: any) {
    this.selectedIndex = ev.index;
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
  }

}
