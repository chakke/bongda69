import { Component } from '@angular/core';

/**
 * Generated class for the Bd69NewsLocationBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bd69-news-location-bar',
  templateUrl: 'bd69-news-location-bar.html'
})
export class Bd69NewsLocationBarComponent {

  text: string;

  constructor() {
    console.log('Hello Bd69NewsLocationBarComponent Component');
    this.text = 'Hello World';
  }

}
