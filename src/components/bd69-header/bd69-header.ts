import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'bd69-header',
  templateUrl: 'bd69-header.html'
})
export class Bd69HeaderComponent {
  @Input('title') headerTitle = "";
  @Input('button-right') button_right = "";
  @Output() notiClicked = new EventEmitter();
  @Output() headerClicked = new EventEmitter();

  constructor(public mMenuController: MenuController) {
  }

  onClickMenu() {
    this.mMenuController.open()
  }

  onClickNoti() {
    this.notiClicked.emit("onClickNoti")

  }

  onClickHeader() {
    this.headerClicked.emit();
  }
}
