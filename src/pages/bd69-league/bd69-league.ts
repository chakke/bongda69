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
  search_icon = "ios-search-outline";

  item : string = "aaa";

  listLeague: any = [
    {
      id: "hel2017",
      logo: "/assets/icon/favorite/club4.png",
      name: "VCK Giải vô địch sân 7 TP.HN 2017",
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
      logo: "/assets/icon/favorite/club3.png",
      name: "Nghệ League 2017",
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
      logo: "/assets/icon/favorite/club1.png",
      name: "Vinh Phuc League S1",
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
    {
      id: "hel2017",
      logo: "/assets/icon/favorite/club4.png",
      name: "Yên Thành Open 2017",
      club: []
    },{
      id: "hel2017",
      logo: "/assets/icon/favorite/club3.png",
      name: "FORUMBONGDA RESPECT 2017",
      club: []
    },{
      id: "hel2017",
      logo: "/assets/icon/favorite/club4.png",
      name: "KV3 - Vòng loại giải vô địch sân 7 Hà Nội",
      club: []
    },{
      id: "hel2017",
      logo: "/assets/icon/favorite/club3.png",
      name: "Cup 93 - 96 HN",
      club: []
    },{
      id: "hel2017",
      logo: "/assets/icon/favorite/club1.png",
      name: "Vinh Phuc League S1",
      club: []
    },{
      id: "hel2017",
      logo: "/assets/icon/favorite/club2.png",
      name: "Yên Thành Open 2017",
      club: []
    },{
      id: "hel2017",
      logo: "/assets/icon/favorite/club1.png",
      name: "FORUMBONGDA RESPECT 2017",
      club: []
    },{
      id: "hel2017",
      logo: "/assets/icon/favorite/club2.png",
      name: "Liên Minh Cup 2018",
      club: []
    },{
      id: "hel2017",
      logo: "/assets/icon/favorite/club1.png",
      name: "Yên Thành Open 2017",
      club: []
    },{
      id: "hel2017",
      logo: "/assets/icon/favorite/club2.png",
      name: "FORUMBONGDA RESPECT 2017",
      club: []
    },{
      id: "hel2017",
      logo: "/assets/icon/favorite/club2.png",
      name: "FORUMBONGDA RESPECT 2018",
      club: []
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

  ionViewDidEnter() {
    this.mEvents.publish("menu:changed", "Bd69LeaguePage");
    this.item = this.listLeague[0];
  }


  
  notifyChildren(item: any ){
  }


  // getLeague() {
  //   let listLeague;
  //   let league = this.mFirebaseService.getCollection("tables").snapshotChanges().subscribe(data => {
  //     listLeague = data.map(item => {
  //       return {
  //         id: item.payload.doc.id,
  //         name: item.payload.doc.data().league_name,
  //         page: "Bd69TableDetailPage"
  //       }
  //     });
  //   });
  //   setTimeout(() => {
  //     this.listLeagues = listLeague;
  //   }, 1000);

  // }
}
