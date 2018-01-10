import { Component,Input } from '@angular/core';

import { Bd69Module } from "../../providers/bongda69/bd69-module";
import { Stadium } from "../../providers/bongda69/classes/stadium";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bd69-news-location-list',
  templateUrl: 'bd69-news-location-list.html'
})
export class Bd69NewsLocationListComponent {
  @Input('district-name') districtName = "aaa";
  
  mStadium: Observable<Stadium[]>;
  constructor(
    public mAppController: Bd69Module
  ) {
  }

  ngAfterViewInit(){
    this.mStadium = this.mAppController.getStadiumByDistrictId("003");
  }

}
