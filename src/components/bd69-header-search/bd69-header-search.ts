import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'bd69-header-search',
  templateUrl: 'bd69-header-search.html'
})
export class Bd69HeaderSearchComponent {
  @Output() notiClicked = new EventEmitter();
  
  constructor(public mMenuController: MenuController) {
  }

  onClickMenu(){
    this.mMenuController.open()
  }

  onClickNoti(){
    this.notiClicked.emit("onClickNoti");
  }
}
