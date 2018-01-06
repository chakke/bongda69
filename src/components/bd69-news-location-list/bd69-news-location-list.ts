import { Component } from '@angular/core';

/**
 * Generated class for the Bd69NewsLocationListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bd69-news-location-list',
  templateUrl: 'bd69-news-location-list.html'
})
export class Bd69NewsLocationListComponent {

  list: any = [
    { name: 'aaaaaaa', age: 11 },
    { name: 'bbbbbbbb', age: 12 },
    { name: 'ccccccccc', age: 13 }
  ];

  constructor() {
  }

}
