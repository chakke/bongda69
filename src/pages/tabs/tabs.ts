import { Component } from '@angular/core';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  newsfeed = "Bd69NewsFeedPage";
  league = "Bd69LeaguePage";
  fixtures = "Bd69FixturesPage";
  user = "Bd69UserProfilePage";

  constructor() {

  }
}
