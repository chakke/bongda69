import { Component,Input } from '@angular/core';


@Component({
  selector: 'bd69-list-clubs',
  templateUrl: 'bd69-list-clubs.html'
})
export class Bd69ListClubsComponent {
  @Input('listClub') listClub = [];
  text: string;

  constructor() {
    console.log('Hello Bd69ListClubsComponent Component');
    this.text = 'Hello World';
  }

}
