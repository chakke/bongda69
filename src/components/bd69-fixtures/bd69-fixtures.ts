import { Component } from '@angular/core';

import { Fixtures } from '../../providers/bongda69/classes/fixtures';
import { Match } from '../../providers/bongda69/classes/match';

class PrivateFixtures {
  /**thời gian hiển thị lên view */
  timeStr: string;
  /**ngày tính theo milliseconds */
  timeMls: number;
  fixtures: Array<Fixtures> = [];

  constructor(timeMls: number) {
    let date = new Date(timeMls);
    this.timeStr = "" + date.getDate() + " thg " + (date.getMonth() + 1) + ", " + date.getFullYear();
    this.timeMls = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  }

  getFixturesById(league_id): Fixtures {
    for (let i = 0; i < this.fixtures.length; i++) {
      let element = this.fixtures[i];
      if (element.league_id == league_id) {
        return element;
      }
    }
    return null;
  }
}

@Component({
  selector: 'bd69-fixtures',
  templateUrl: 'bd69-fixtures.html'
})
export class Bd69FixturesComponent {

  viewFixtures: Array<PrivateFixtures> = [];

  fixtures: Array<Fixtures> = [];

  constructor() {
    // fake matches
    let matches = [
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

    let ngheleague: Fixtures = {
      id: "",
      league_id: "1",
      league_name: "Nghệ League",
      matches: matches
    }

    let ngheleague2: Fixtures = {
      id: "",
      league_id: "2",
      league_name: "Nghệ League 2",
      matches: matches
    }

    this.fixtures.push(ngheleague);
    this.fixtures.push(ngheleague2);
    console.log(this.fixtures);

  }

  ngOnInit() {
    this.onSetUpData();
  }

  onSetUpData() {

    this.fixtures.forEach(element => {
      this.arrangeMatchByTime(element);

      element.matches.forEach(match => {
        let isNew = true;

        for (let i = 0; i < this.viewFixtures.length; i++) {

          if (match.time - this.viewFixtures[i].timeMls < 86400000) {
            if (this.viewFixtures[i].getFixturesById(element.league_id)) {
              this.viewFixtures[i].getFixturesById(element.league_id).matches.push(match);
            }
            else{
              let fixtures = new Fixtures();

              fixtures.id = element.id;
              fixtures.league_id = element.league_id;
              fixtures.league_name = element.league_name;
              fixtures.matches = [];

              fixtures.matches.push(match);
              this.viewFixtures[i].fixtures.push(fixtures);
            }
            isNew = false;
            break;
          }
        }

        if (isNew) {
          let newFixture = new PrivateFixtures(match.time);
          let fixtures = new Fixtures();

          fixtures.id = element.id;
          fixtures.league_id = element.league_id;
          fixtures.league_name = element.league_name;
          fixtures.matches = [];

          fixtures.matches.push(match);
          newFixture.fixtures.push(fixtures);

          this.viewFixtures.push(newFixture);
        }
      });
    });

    console.log(this.viewFixtures);

  }

  arrangeMatchByTime(fixtures: Fixtures) {
    for (let i = 0; i < fixtures.matches.length - 1; i++) {
      for (let j = i + 1; j < fixtures.matches.length; j++) {
        if (fixtures.matches[j].time < fixtures.matches[i].time) {
          let temp = fixtures.matches[j].time;
          fixtures.matches[j].time = fixtures.matches[i].time;
          fixtures.matches[i].time = temp;
        }
      }
    }
  }

}
