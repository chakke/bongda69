import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bd69-league',
  templateUrl: 'bd69-league.html',
})
export class Bd69LeaguePage {

  headerTitle = "Thông tin giải đấu"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bd69LeaguePage');
  }

  showMenu(){
    console.log("let's show menu");
    
  }

}
