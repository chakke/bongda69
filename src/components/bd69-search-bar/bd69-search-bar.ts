import { Component } from '@angular/core';

/**
 * Generated class for the Bd69SearchBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bd69-search-bar',
  templateUrl: 'bd69-search-bar.html'
})
export class Bd69SearchBarComponent {

  text: string;

  constructor() {
    console.log('Hello Bd69SearchBarComponent Component');
    this.text = 'Hello World';
  }

}
