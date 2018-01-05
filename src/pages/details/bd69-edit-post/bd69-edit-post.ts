import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bd69-edit-post',
  templateUrl: 'bd69-edit-post.html',
})
export class Bd69EditPostPage {
  headerTitle = "Đăng tin tìm đối";
  rightText = "Đăng"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bd69EditPostPage');
  }

  onClickPost(ev){
    console.log(ev);
    
  }

}
