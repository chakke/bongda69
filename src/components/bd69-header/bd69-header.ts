import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'bd69-header',
  templateUrl: 'bd69-header.html'
})
export class Bd69HeaderComponent {
  @Input('title')headerTitle = "";
  @Output() notiClicked = new EventEmitter();

  constructor(public mMenuController: MenuController) {
  }

  onClickMenu(){
    this.mMenuController.open()
  }

  onClickNoti(){
    this.notiClicked.emit("onClickNoti")
    
  }

}
