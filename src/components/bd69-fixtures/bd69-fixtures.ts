import { Component, Input } from '@angular/core';

import { Bd69Module } from '../../providers/bongda69/bd69-module';

import { Fixtures } from '../../providers/bongda69/classes/fixtures';
import { League } from '../../providers/bongda69/classes/league';
import { Match } from '../../providers/bongda69/classes/match';

import { Observable } from 'rxjs';

class FixturesItem {

  /**thời gian hiển thị lên view */
  timeStr: string;
  /**ngày tính theo milliseconds */
  timeMls: number;
  matches: Array<Match> = [];

  constructor(timeMls) {
    let weekday = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"]
    let date = new Date(timeMls);

    this.timeStr = weekday[date.getDay()] + ", " + date.getDate() + " thg " + (date.getMonth() + 1) + ", " + date.getFullYear();
    this.timeMls = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  }
}

class PrivateFixtures {
  id: string;
  items: Array<FixturesItem> = [];

  constructor() {
    this.id = "";
    this.items = [];
  }

  onResponseData(id: string) {
    this.id = id;
  }

  onSetUpMatches(matches: Array<Match>) {
    this.arrangeMatchByTime(matches);
    for (let i = 0; i < matches.length; i++) {
      let match = matches[i];
      let isNew = true;

      for (let i = 0; i < this.items.length; i++) {
        if (Math.abs(match.time - this.items[i].timeMls) < 86400000) {
          this.items[i].matches.push(match)
          isNew = false;
          break;
        }
      }

      if (isNew) {

        let newItem = new FixturesItem(match.time);

        newItem.matches.push(match);

        this.items.push(newItem);
      }
    }
  }
  
  arrangeMatchByTime(matches) {
    for (let i = 0; i < matches.length - 1; i++) {
      for (let j = i + 1; j < matches.length; j++) {
        if (matches[j].time > matches[i].time) {
          let temp = matches[j];
          matches[j] = matches[i];
          matches[i] = temp;
        }
      }
    }
  }
}

@Component({
  selector: 'bd69-fixtures',
  templateUrl: 'bd69-fixtures.html'
})
export class Bd69FixturesComponent {
  @Input('fixtures-title') title = "";
  @Input('league-id') leagueId = "";

  viewFixtures: PrivateFixtures = new PrivateFixtures();

  mFixtures: Observable<Fixtures>;

  constructor(public mBd69Module: Bd69Module) {

  }

  ngAfterViewInit() {
    this.getFixtures();
  }


  getFixtures() {
    this.mBd69Module.getMatchesByLeagueId(this.leagueId).subscribe(data => {

      this.viewFixtures.onSetUpMatches(data.matches);
      console.log(this.viewFixtures);

    });
  }

  convertTime(time) {
    let date = new Date(time);
    return (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
  }
}
