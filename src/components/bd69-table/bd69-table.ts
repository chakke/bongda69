import { Component } from '@angular/core';

/**
 * Generated class for the Bd69TableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bd69-table',
  templateUrl: 'bd69-table.html'
})
export class Bd69TableComponent {

  text: string;

  constructor() {
    console.log('Hello Bd69TableComponent Component');
    this.text = 'Hello World';
  }

}
