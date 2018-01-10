import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'bd69-header-element',
  templateUrl: 'bd69-header-element.html'
})
export class Bd69HeaderElementComponent {
  @Input('title') headerTitle = "";
  @Input('rightText') rightText = "";
  @Input('isToggle') isToggle: boolean = false;
  @Input('iconRight') iconRight = ""

  @Output() rightBtnClicked = new EventEmitter();
  // leftText = "Hủy";

  constructor(public mNavController: NavController) {
  }

  onClickClose() {
    this.mNavController.pop();
  }

  onClickRightBtn(){
    this.rightBtnClicked.emit("right-clicked")
  }

}
