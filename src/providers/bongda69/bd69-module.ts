import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FirebaseServiceProvider } from '../firebase-service/firebase-service';

import { User } from '../base/classes/user';
import { Match } from '../bongda69/classes/match';

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

  // getMatchesByLeagueId(id: string): Observable<Match[]> {
  //   return this.firebaseService.getMatchesByLeagueId(id).map(elm => {
  //     return {
  //       []
  //     }
  //   })
  // }

  getSomething(){
    this.firebaseService.getMatchesByLeagueId("id").map(elm => {
      console.log("elm",elm);
      
    });
  }

}
