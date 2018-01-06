import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from "angularfire2/database";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";


@Injectable()
export class FirebaseServiceProvider {
  isUseFakeData = true;
  colectionDetail: any = [];
  constructor(
    // public http: HttpClient,
    public angularFirestore: AngularFirestore
  ) {
  }

  public getCollection(collection: string) {
    return this.angularFirestore.collection(collection);
  }

  public getCollectionOrderBy(collection: string, key: string) {
    return this.angularFirestore.collection(collection, ref => ref.orderBy(key));
  }

  getProvince(): Observable<any> {
    return this.angularFirestore.collection("provinces").valueChanges();
  }

  getDistrict(province_code:string): Observable<any>{
    return this.angularFirestore.collection("districts",ref => ref.where("province_code","==",province_code))
    .valueChanges();
  }

  getStadiumByProvinceId(province_code: string): Observable<any> {
    return this.angularFirestore.collection("stadiums",ref => ref.where("province_id","==",province_code))
    .valueChanges();
  }

  getStadiumByDistrictId(district_code: string): Observable<any> {
    return this.angularFirestore.collection("stadiums", ref => ref.where("district_id","==",district_code))
    .valueChanges();
  }

  getUser(): Observable<any> {
    if (this.isUseFakeData) {
      return new Observable(observer => {
        setTimeout(() => {
          observer.next({
            firebase_id: "firebase_id",
            /**Tên đăng nhập */
            username: "nam",
            /**Ảnh đại diện */
            avatar: "",
            /**Họ tên */
            name: "Nguyễn Đức Anh",
            /**Trạng thái của tài khoản */
            account_state: 1
          });
        }, 1000)
      });
    }
  }
}
