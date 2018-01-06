import { Component, Input, Output } from '@angular/core';

import { AppControllerProvider } from "../../providers/bongda69/app-controller";
import { Province } from "../../providers/bongda69/classes/province";
import { District } from "../../providers/bongda69/classes/district";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bd69-news-location-bar',
  templateUrl: 'bd69-news-location-bar.html'
})
export class Bd69NewsLocationBarComponent {
  @Input('listProvince') listProvince: Observable<Province[]>;
  @Input('listDistric') listDistric: Observable<District[]>;

  @Output('district-name')

  province: string = "";
  // district: string = "Tất Cả";

  mProvince: Observable<Province[]>;
  mDistrict: Observable<District[]>;

  constructor(
    public mAppController: AppControllerProvider
  ) {

  }
  ngAfterViewInit() {
    // this.listProvince = this.mAppController.getProvince();
    // this.province = "Hà Nội";
  }

  getItemProvince(event) {
    this.mDistrict = this.mAppController.getDistrict(event);
  }
  getItemDistrict(event) {
    console.log(event);

  }
}
