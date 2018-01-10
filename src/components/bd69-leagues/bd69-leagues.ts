import { Component,Input } from '@angular/core';


@Component({
  selector: 'bd69-leagues',
  templateUrl: 'bd69-leagues.html'
})
export class Bd69LeaguesComponent {
  @Input('list-league') list_league= [];
  text: string;

  constructor() {
    console.log('Hello Bd69LeaguesComponent Component');
    this.text = 'Hello World';
  }

}
