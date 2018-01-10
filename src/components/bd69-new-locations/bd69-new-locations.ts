import { Component, Input } from '@angular/core';

@Component({
  selector: 'bd69-new-locations',
  templateUrl: 'bd69-new-locations.html'
})
export class Bd69NewLocationsComponent {

  text: string;

  constructor() {
    console.log('Hello Bd69NewLocationsComponent Component');
    this.text = 'Hello World';
  }

}
