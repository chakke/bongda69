import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bd69-favorites',
  templateUrl: 'bd69-favorites.html',
})
export class Bd69FavoritesPage {

  headerTitle = "Mục yêu thích";

  data = {
    giai_dau: [
      { name: "Nghê League", id: "1" },
      { name: "Forumbongda Fairplay Cup 2017", id: "2" },
      { name: "VCK vô địch sân 7 TP.HN 2017", id: "3" },
      { name: "FORUMBONGDA RESPECT 2017", id: "4" },
      { name: "Vòng lọa sân 7 Hà Nội 2017" }
    ],
    cau_thu: [
      { name: "H.V.Hưng", club_id: "nghe_fc", club_name: "FC Nghệ +", club_logo: "/assets/icon/favorite/club1.png" },
      { name: "P.Q.Lâm", club_id: "hungyen_fc", club_name: "FC Hưng Yên", club_logo: "/assets/icon/favorite/club2.png" },
      { name: "V.V.Hung", club_id: "xunghe_fc", club_name: "Xứ Nghệ FC", club_logo: "/assets/icon/favorite/club3.png" },
      { name: "H.V.Quang", club_id: "lang_fc", club_name: "Thanh Chương", club_logo: "/assets/icon/favorite/club4.png" },
    ],
    san_bong: [
      { name: "Sân bóng Chùa Láng", stadium_id: "001" },
      { name: "Sân bóng Bách Khoa", stadium_id: "002" },
    ]
  }

  constructor(public navCtrl: NavController,
    public mEvents: Events,
    public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.mEvents.publish("menu:changed", "Bd69FavoritesPage");
  }



}
