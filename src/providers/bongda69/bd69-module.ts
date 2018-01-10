import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FirebaseServiceProvider } from '../firebase-service/firebase-service';

import { User } from '../base/classes/user';
import { Match } from '../bongda69/classes/match';
import { Fixtures } from '../bongda69/classes/fixtures';
import { League } from './classes/league';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class Bd69Module {

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

  getLeaguesInfo(): Observable<Array<League>> {
    return this.firebaseService.getLeaguesInfo().map(data => {
      let leagues = data.leagues;

      return leagues;
    })
  }

  getLeagueById(id: string): Observable<League> {
    return this.firebaseService.getLeagueById("id").map(league => {
      return {
        firebase_id: league.firebase_id,
        /**id của giải*/
        id: league.id,
        /**Tên giải */
        name: league.name,
        /**Thời gian bắt đầu */
        time_start: league.time_start,
        /**Ngày kết thúc */
        time_end: league.time_end,
        /**Ảnh backdrop của giải, tương đương với cover trong profile */
        cover: league.cover,
        /**Logo của giải */
        logo: league.logo,
        /**Slogan của giải */
        slogan: league.slogan,
        /**Mô tả của giải */
        description: league.description,
        /**Trạng thái của giải */
        state: league.state,
        /**Danh sách sân bóng tổ chức giải */
        stadium_ids: league.stadium_ids,
        /**Các nhà tài trợ */
        donor_ids: league.donor_ids
      }
    });
  }

  getMatchesByLeagueId(id: string): Observable<any> {

    return this.firebaseService.getMatchesByLeagueId(id).map(elm => {

      let fixtures = {
        matches: elm.matches
      }

      return fixtures;
    });
  }

}
