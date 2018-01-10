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

  getLeaguesInfo(): Observable<any> {

    if (this.isUseFakeData) {
      return new Observable(observer => {
        setTimeout(() => {
          observer.next({
            leagues: [
              {
                firebase_id: "",
                /**id của giải*/
                id: "0",
                /**Tên giải */
                name: "Nghệ league 2017",
                /**Thời gian bắt đầu */
                time_start: 0,
                /**Ngày kết thúc */
                time_end: 0,
                /**Ảnh backdrop của giải, tương đương với cover trong profile */
                cover: "",
                /**Logo của giải */
                logo: "",
                /**Slogan của giải */
                slogan: "",
                /**Mô tả của giải */
                description: "",
                /**Trạng thái của giải */
                state: "",
                /**Danh sách sân bóng tổ chức giải */
                stadium_ids: [],
                /**Các nhà tài trợ */
                donor_ids: []
              },
              {
                firebase_id: "",
                /**id của giải*/
                id: "1",
                /**Tên giải */
                name: "Forumbongda Fairplay Cup 2017",
                /**Thời gian bắt đầu */
                time_start: 0,
                /**Ngày kết thúc */
                time_end: 0,
                /**Ảnh backdrop của giải, tương đương với cover trong profile */
                cover: "",
                /**Logo của giải */
                logo: "",
                /**Slogan của giải */
                slogan: "",
                /**Mô tả của giải */
                description: "",
                /**Trạng thái của giải */
                state: "",
                /**Danh sách sân bóng tổ chức giải */
                stadium_ids: [],
                /**Các nhà tài trợ */
                donor_ids: []
              },
              {
                firebase_id: "",
                /**id của giải*/
                id: "2",
                /**Tên giải */
                name: "Hạng Trung Fair Play Cup 2017",
                /**Thời gian bắt đầu */
                time_start: 0,
                /**Ngày kết thúc */
                time_end: 0,
                /**Ảnh backdrop của giải, tương đương với cover trong profile */
                cover: "",
                /**Logo của giải */
                logo: "",
                /**Slogan của giải */
                slogan: "",
                /**Mô tả của giải */
                description: "",
                /**Trạng thái của giải */
                state: "",
                /**Danh sách sân bóng tổ chức giải */
                stadium_ids: [],
                /**Các nhà tài trợ */
                donor_ids: []
              },
              {
                firebase_id: "",
                /**id của giải*/
                id: "3",
                /**Tên giải */
                name: "VCK Giải Vô Địch Sân 7 TP.HN 2017",
                /**Thời gian bắt đầu */
                time_start: 0,
                /**Ngày kết thúc */
                time_end: 0,
                /**Ảnh backdrop của giải, tương đương với cover trong profile */
                cover: "",
                /**Logo của giải */
                logo: "",
                /**Slogan của giải */
                slogan: "",
                /**Mô tả của giải */
                description: "",
                /**Trạng thái của giải */
                state: "",
                /**Danh sách sân bóng tổ chức giải */
                stadium_ids: [],
                /**Các nhà tài trợ */
                donor_ids: []
              },
              {
                firebase_id: "",
                /**id của giải*/
                id: "4",
                /**Tên giải */
                name: "FORUMBONGDA RESPECT 2017",
                /**Thời gian bắt đầu */
                time_start: 0,
                /**Ngày kết thúc */
                time_end: 0,
                /**Ảnh backdrop của giải, tương đương với cover trong profile */
                cover: "",
                /**Logo của giải */
                logo: "",
                /**Slogan của giải */
                slogan: "",
                /**Mô tả của giải */
                description: "",
                /**Trạng thái của giải */
                state: "",
                /**Danh sách sân bóng tổ chức giải */
                stadium_ids: [],
                /**Các nhà tài trợ */
                donor_ids: []
              },
              {
                firebase_id: "",
                /**id của giải*/
                id: "5",
                /**Tên giải */
                name: "Hanoi Elevent League 2017",
                /**Thời gian bắt đầu */
                time_start: 0,
                /**Ngày kết thúc */
                time_end: 0,
                /**Ảnh backdrop của giải, tương đương với cover trong profile */
                cover: "",
                /**Logo của giải */
                logo: "",
                /**Slogan của giải */
                slogan: "",
                /**Mô tả của giải */
                description: "",
                /**Trạng thái của giải */
                state: "",
                /**Danh sách sân bóng tổ chức giải */
                stadium_ids: [],
                /**Các nhà tài trợ */
                donor_ids: []
              },
            ]
          });
        }, 2000);
      });
    }
  }

  getLeagueById(id: string): Observable<any> {
    if (this.isUseFakeData) {
      return new Observable(observer => {
        setTimeout(() => {
          observer.next({
            firebase_id: "",
            /**id của giải*/
            id: id,
            /**Tên giải */
            name: "Hanoi Elevent League",
            /**Thời gian bắt đầu */
            time_start: 0,
            /**Ngày kết thúc */
            time_end: 0,
            /**Ảnh backdrop của giải, tương đương với cover trong profile */
            cover: "",
            /**Logo của giải */
            logo: "",
            /**Slogan của giải */
            slogan: "",
            /**Mô tả của giải */
            description: "",
            /**Trạng thái của giải */
            state: 1,
            /**Danh sách sân bóng tổ chức giải */
            stadium_ids: [],
            /**Các nhà tài trợ */
            donor_ids: []
          })
        }, 1000);
      })
    }
  }

  getMatchesByLeagueId(id: string): Observable<any> {
    if (this.isUseFakeData) {
      return new Observable(observer => {
        setTimeout(() => {
          observer.next({
            matches: [
              {
                firebase_id: "match1",
                /**ID của trận đấu */
                match_id: "ngheluegue1",
                /**Tên của trận đấu. Ví dụ trận đấu giao lưu fan, ...*/
                name: "",
                /**Mô tả của trận đấu */
                description: "",

                /**Thời gian diễn ra trận đấu, tính theo milliseconds */
                time: 1513580400000,
                /**Số phút của trận đấu */
                address: "string;",
                /**id của sân vận động */
                stadium_id: ",",
                /**Thời gian của trận đấu */
                duration: 0,

                /**id của đội nhà */
                home_id: "congdonghatinh",
                /**Logo của đội nhà */
                home_logo: "http://img.forumbongda.com//home/Avt?id=1106&type=football&thumb=150",
                /**Tên đội chủ nhà */
                home_name: "Cộng đồng Hà Tĩnh",
                /**Số bàn thắng đội chủ nhà */
                home_goal: 1,

                /**id đội khách */
                away_id: "lagianghonglinh",
                /**logo đội khách */
                away_logo: "http://img.forumbongda.com//home/Avt?id=993&type=football&thumb=150",
                /** tên đội khách */
                away_name: "La Giang Hồng Lĩnh",
                /**Số bàn thắng đội khách */
                away_goal: 4,

                /**Trạng thái của trận đấu */
                state: 2,
              }, {
                firebase_id: "match2",
                /**ID của trận đấu */
                match_id: "ngheluegue2",
                /**Tên của trận đấu. Ví dụ trận đấu giao lưu fan, ...*/
                name: "",
                /**Mô tả của trận đấu */
                description: "",

                /**Thời gian diễn ra trận đấu, tính theo milliseconds */
                time: 1513582200000,
                /**Số phút của trận đấu */
                address: "string;",
                /**id của sân vận động */
                stadium_id: ",",
                /**Thời gian của trận đấu */
                duration: 0,

                /**id của đội nhà */
                home_id: "xungheindex",
                /**Logo của đội nhà */
                home_logo: "http://img.forumbongda.com//home/Avt?id=954&type=football&thumb=150",
                /**Tên đội chủ nhà */
                home_name: "Nghệ +",
                /**Số bàn thắng đội chủ nhà */
                home_goal: 1,

                /**id đội khách */
                away_id: "tanky",
                /**logo đội khách */
                away_logo: "http://img.forumbongda.com//home/Avt?id=1103&type=football&thumb=150",
                /** tên đội khách */
                away_name: "Tân Kỳ",
                /**Số bàn thắng đội khách */
                away_goal: 2,

                /**Trạng thái của trận đấu */
                state: 2,
              }, {
                firebase_id: "match3",
                /**ID của trận đấu */
                match_id: "ngheluegue3",
                /**Tên của trận đấu. Ví dụ trận đấu giao lưu fan, ...*/
                name: "",
                /**Mô tả của trận đấu */
                description: "",

                /**Thời gian diễn ra trận đấu, tính theo milliseconds */
                time: 1513582200000,
                /**Số phút của trận đấu */
                address: "string;",
                /**id của sân vận động */
                stadium_id: ",",
                /**Thời gian của trận đấu */
                duration: 0,

                /**id của đội nhà */
                home_id: "vinhcity",
                /**Logo của đội nhà */
                home_logo: "http://img.forumbongda.com//home/Avt?id=1109&type=football&thumb=150",
                /**Tên đội chủ nhà */
                home_name: "Vinh City",
                /**Số bàn thắng đội chủ nhà */
                home_goal: 1,

                /**id đội khách */
                away_id: "xungheindex",
                /**logo đội khách */
                away_logo: "http://img.forumbongda.com//home/Avt?id=1123&type=football&thumb=150",
                /** tên đội khách */
                away_name: "Xứ Nghệ Index",
                /**Số bàn thắng đội khách */
                away_goal: 3,

                /**Trạng thái của trận đấu */
                state: 2,
              }, {
                firebase_id: "match4",
                /**ID của trận đấu */
                match_id: "ngheluegue4",
                /**Tên của trận đấu. Ví dụ trận đấu giao lưu fan, ...*/
                name: "",
                /**Mô tả của trận đấu */
                description: "",

                /**Thời gian diễn ra trận đấu, tính theo milliseconds */
                time: 1517900400000,
                /**Số phút của trận đấu */
                address: "string;",
                /**id của sân vận động */
                stadium_id: ",",
                /**Thời gian của trận đấu */
                duration: 0,

                /**id của đội nhà */
                home_id: "congdonghatinh",
                /**Logo của đội nhà */
                home_logo: "http://img.forumbongda.com//home/Avt?id=1106&type=football&thumb=150",
                /**Tên đội chủ nhà */
                home_name: "Cộng đồng Hà Tĩnh",
                /**Số bàn thắng đội chủ nhà */
                home_goal: 0,

                /**id đội khách */
                away_id: "vinhcity",
                /**logo đội khách */
                away_logo: "http://img.forumbongda.com//home/Avt?id=1109&type=football&thumb=150",
                /** tên đội khách */
                away_name: "Vinh City",
                /**Số bàn thắng đội khách */
                away_goal: 0,

                /**Trạng thái của trận đấu */
                state: 0,
              }, {
                firebase_id: "match5",
                /**ID của trận đấu */
                match_id: "ngheluegue5",
                /**Tên của trận đấu. Ví dụ trận đấu giao lưu fan, ...*/
                name: "",
                /**Mô tả của trận đấu */
                description: "",

                /**Thời gian diễn ra trận đấu, tính theo milliseconds */
                time: 1517904600000,
                /**Số phút của trận đấu */
                address: "string;",
                /**id của sân vận động */
                stadium_id: ",",
                /**Thời gian của trận đấu */
                duration: 0,

                /**id của đội nhà */
                home_id: "xungheindex",
                /**Logo của đội nhà */
                home_logo: "http://img.forumbongda.com//home/Avt?id=954&type=football&thumb=150",
                /**Tên đội chủ nhà */
                home_name: "Nghệ +",
                /**Số bàn thắng đội chủ nhà */
                home_goal: 0,

                /**id đội khách */
                away_id: "vinhcity",
                /**logo đội khách */
                away_logo: "http://img.forumbongda.com//home/Avt?id=1109&type=football&thumb=150",
                /** tên đội khách */
                away_name: "Vinh City",
                /**Số bàn thắng đội khách */
                away_goal: 0,

                /**Trạng thái của trận đấu */
                state: 0,
              }, {
                firebase_id: "match6",
                /**ID của trận đấu */
                match_id: "ngheluegue6",
                /**Tên của trận đấu. Ví dụ trận đấu giao lưu fan, ...*/
                name: "",
                /**Mô tả của trận đấu */
                description: "",

                /**Thời gian diễn ra trận đấu, tính theo milliseconds */
                time: 1517900400000,
                /**Số phút của trận đấu */
                address: "string;",
                /**id của sân vận động */
                stadium_id: ",",
                /**Thời gian của trận đấu */
                duration: 0,

                /**id của đội nhà */
                home_id: "congdonghatinh",
                /**Logo của đội nhà */
                home_logo: "http://img.forumbongda.com//home/Avt?id=1106&type=football&thumb=150",
                /**Tên đội chủ nhà */
                home_name: "Cộng đồng Hà Tĩnh",
                /**Số bàn thắng đội chủ nhà */
                home_goal: 0,

                /**id đội khách */
                away_id: "lagianghonglinh",
                /**logo đội khách */
                away_logo: "http://img.forumbongda.com//home/Avt?id=993&type=football&thumb=150",
                /** tên đội khách */
                away_name: "La Giang Hồng Lĩnh",
                /**Số bàn thắng đội khách */
                away_goal: 0,
                

                /**Trạng thái của trận đấu */
                state: 0,
              }, {
                firebase_id: "match7",
                /**ID của trận đấu */
                match_id: "ngheluegue7",
                /**Tên của trận đấu. Ví dụ trận đấu giao lưu fan, ...*/
                name: "",
                /**Mô tả của trận đấu */
                description: "",

                /**Thời gian diễn ra trận đấu, tính theo milliseconds */
                time: 1517904600000,
                /**Số phút của trận đấu */
                address: "string;",
                /**id của sân vận động */
                stadium_id: ",",
                /**Thời gian của trận đấu */
                duration: 0,

                /**id của đội nhà */
                home_id: "xungheindex",
                /**Logo của đội nhà */
                home_logo: "http://img.forumbongda.com//home/Avt?id=954&type=football&thumb=150",
                /**Tên đội chủ nhà */
                home_name: "Nghệ +",
                /**Số bàn thắng đội chủ nhà */
                home_goal: 0,

                /**id đội khách */
                away_id: "lagianghonglinh",
                /**logo đội khách */
                away_logo: "http://img.forumbongda.com//home/Avt?id=993&type=football&thumb=150",
                /** tên đội khách */
                away_name: "La Giang Hồng Lĩnh",
                /**Số bàn thắng đội khách */
                away_goal: 0,

                /**Trạng thái của trận đấu */
                state: 0,
              }
            ]
          });
        }, 1000)
      });
    }
  }
}
