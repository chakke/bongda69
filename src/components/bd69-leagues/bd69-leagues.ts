import { Component,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'bd69-leagues',
  templateUrl: 'bd69-leagues.html'
})
export class Bd69LeaguesComponent {
  @Input('list-league') list_league= [];
  @Output() itemChooser = new EventEmitter();

  constructor() {

  }

  onClickItem(item){
    this.itemChooser.emit({"item": item});
  }

}
