import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FirebaseServiceProvider } from '../firebase-service/firebase-service';

import { User } from '../base/classes/user';
import { Province } from "../bongda69/classes/province";
import { District } from "../bongda69/classes/district";
import { Stadium } from "../bongda69/classes/stadium";

@Injectable()
export class AppControllerProvider {

  constructor(public firebaseService: FirebaseServiceProvider
  ) {
    console.log('Hello AppControllerProvider Provider');
  }

  getUser(): Observable<User> {
    return this.firebaseService.getUser().map(elm => {
      return {
        firebase_id: elm.firebase_id,
        username: elm.username,
        avatar: elm.avatar,
        name: elm.name,
        account_state: elm.account_state
      }
    })
  }

  getProvince(): Observable<Province[]> {
    return this.firebaseService.getProvince();
  }

  getDistrict(province_code): Observable<District[]>{
    return this.firebaseService.getDistrict(province_code);
  }

  getStadiumByProvinceId(province_code): Observable<Stadium[]>{
    return this.firebaseService.getStadiumByProvinceId(province_code);
  }

  getStadiumByDistrictId(district_code): Observable<Stadium[]>{
    return this.firebaseService.getStadiumByDistrictId(district_code);
  }
}
