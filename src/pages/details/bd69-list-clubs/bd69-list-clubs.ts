import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-bd69-list-clubs',
  templateUrl: 'bd69-list-clubs.html',
})
export class Bd69ListClubsPage {
  headerTitle = "Danh sách đội bóng";
  iconRight = "ios-search-outline";

  listClubs = [
    { id: "0", name: "FC ĐÔNG HOÀNG", member: 15, leader: "Nguyễn Văn Trường ", logo: "/assets/icon/club/club1.png" },
    { id: "1", name: "FC Lecmax", member: 18, leader: "Phạm Thành Đạt", logo: "/assets/icon/club/club2.png" },
    { id: "2", name: "FC X& CLUB", member: 19, leader: "Nguyễn Duy Hùng", logo: "/assets/icon/club/club3.png" },
    { id: "3", name: "PASSION CLUB", member: 19, leader: "Lê Đại Dương", logo: "/assets/icon/club/club4.png" },
    { id: "4", name: "FC N.A.T", member: 20, leader: "Lê Minh Tuấn", logo: "/assets/icon/club/club5.png" },
    { id: "4", name: "FC Anh Em +", member: 19, leader: "Đinh Quang Cường", logo: "/assets/icon/club/club6.png" },
  ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bd69ListClubsPage');
  }

  onClickSearch() {

  }
}
