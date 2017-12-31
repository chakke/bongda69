import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'bd69-header',
  templateUrl: 'bd69-header.html'
})
export class Bd69HeaderComponent {
  @Input('title')headerTitle = "";
  @Output() showMenu = new EventEmitter();

  constructor() {
    // this.headerTitle = 'Lịch thi đấu';
  }

  onClickMenu(){
    this.showMenu.emit();
  }

}
