import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content } from 'ionic-angular';

import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";

@IonicPage()
@Component({
  selector: 'page-bd69-league',
  templateUrl: 'bd69-league.html',
})
export class Bd69LeaguePage {
  @ViewChild(Content) content: Content;

  headerTitle = "Thông tin giải đấu";
  search_icon = "ios-search-outline";

  item: string = "aaa";

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
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club3.png",
      name: "FORUMBONGDA RESPECT 2017",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club4.png",
      name: "KV3 - Vòng loại giải vô địch sân 7 Hà Nội",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club3.png",
      name: "Cup 93 - 96 HN",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club1.png",
      name: "Vinh Phuc League S1",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club2.png",
      name: "Yên Thành Open 2017",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club1.png",
      name: "FORUMBONGDA RESPECT 2017",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club2.png",
      name: "Liên Minh Cup 2018",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club1.png",
      name: "Yên Thành Open 2017",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club2.png",
      name: "FORUMBONGDA RESPECT 2017",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club2.png",
      name: "FORUMBONGDA RESPECT 2018",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club4.png",
      name: "Yên Thành Open 2017",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club3.png",
      name: "FORUMBONGDA RESPECT 2017",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club4.png",
      name: "KV3 - Vòng loại giải vô địch sân 7 Hà Nội",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club3.png",
      name: "Cup 93 - 96 HN",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club1.png",
      name: "Vinh Phuc League S1",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club2.png",
      name: "Yên Thành Open 2017",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club1.png",
      name: "FORUMBONGDA RESPECT 2017",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club2.png",
      name: "Liên Minh Cup 2018",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club1.png",
      name: "Yên Thành Open 2017",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club2.png",
      name: "FORUMBONGDA RESPECT 2017",
      club: []
    }, {
      id: "hel2017",
      logo: "/assets/icon/favorite/club2.png",
      name: "FORUMBONGDA RESPECT 2018",
      club: []
    },
  ]
  listLeagues: any;

  isShow: boolean = false;


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



  notifyChildren(item: any) {
  }

  onClickDetail(item) {
    console.log(item);
  }
  requestObject: any;
  onClickScrollToTop() {
    let scrolling = document.getElementById("scrolling");
    scrolling.scrollTop = 0;    
    
    
    // return new Promise((resolve, reject) => {
    //   let elm = document.querySelector(" .main-content");
    //   if (elm.scrollTop <= 50) {
    //     elm.scrollTop = 0;
    //     if (this.requestObject) {
    //       cancelAnimationFrame(this.requestObject);
    //     }
    //     resolve();
    //   }
    //   else {
    //     elm.scrollTop -= elm.scrollTop / 2;

    //     this.requestObject = requestAnimationFrame(() => {
    //       this.onClickScrollToTop();
    //     });
    //   }
    // })
  }

  onScroll() {
    let scrolling = document.getElementById("scrolling");
    let height = this.content.contentHeight;
    if(scrolling){
      let scrollSize = scrolling.scrollTop;
      if(scrollSize > 0.5 * height){
        this.isShow = true;
      }else{
        this.isShow = false;
      }
    }
  }
  doRefresh(refresher){
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

  onClickHeader() {

  }
}
