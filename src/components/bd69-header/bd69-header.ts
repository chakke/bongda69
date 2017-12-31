import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'bd69-header',
  templateUrl: 'bd69-header.html'
})
export class Bd69HeaderComponent {
  @Input('title')headerTitle = "";
  @Output() showMenu = new EventEmitter();
  @Output() clickNoti = new EventEmitter();

  constructor() {
  }

  onClickMenu(){
    this.showMenu.emit();
  }

  onClickNoti(){
    console.log("onClickNoti");
    
  }

}
