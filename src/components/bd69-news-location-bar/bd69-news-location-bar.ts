import { Component, Input } from '@angular/core';

@Component({
  selector: 'bd69-news-location-bar',
  templateUrl: 'bd69-news-location-bar.html'
})
export class Bd69NewsLocationBarComponent {
  @Input('listProvince') listProvince = [];
  @Input('listDistric') listDistric = [];

  constructor() {
  }

}
