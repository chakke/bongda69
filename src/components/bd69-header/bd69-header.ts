import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'bd69-header',
  templateUrl: 'bd69-header.html'
})
export class Bd69HeaderComponent {
  @Input('title')headerTitle = "";
  @Output() clickNoti = new EventEmitter();

  constructor(public mMenuController: MenuController) {
  }

  onClickMenu(){
    this.mMenuController.open()
  }

  onClickNoti(){
    console.log("onClickNoti");
    
  }

}
