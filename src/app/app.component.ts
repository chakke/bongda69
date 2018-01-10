import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';

import { Bd69Module } from '../providers/bongda69/bd69-module';

import { User } from '../providers/base/classes/user';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = "Bd69NewsFeedPage";
  mSelectedMenuId: number = 1;

  pages: Array<{ id: number, icon: string, component: any }> = [
    { id: 1, icon: 'bd69-news', component: "Bd69NewsFeedPage" },
    { id: 2, icon: 'bd69-livescore', component: "Bd69FixturesPage" },
    { id: 3, icon: 'bd69-leaderboard', component: "Bd69LeaguePage" },
    { id: 4, icon: 'bd69-bookmark', component: "Bd69FavoritesPage" },
    { id: 5, icon: 'bd69-notification', component: "Bd69NotificationPage" },
    { id: 6, icon: 'bd69-setting', component: "Bd69SettingsPage" },
  ];;

  user: Observable<User>;

  constructor(
    public events: Events,
    platform: Platform,
    public menu: MenuController,
    statusBar: StatusBar,
    public mBd69Module: Bd69Module,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // set our app's pages

    this.user = this.mBd69Module.getUser();
    console.log(this.user);
    

    this.events.subscribe("menu:changed", (page) => {
      console.log(page);

      this.pages.forEach(element => {
        if (page == element.component) {
          this.mSelectedMenuId = element.id;
        }
      });
    });
  }

  openPage(page) {
    if (page.id != this.rootPage.id) {
      this.rootPage = page.component;
      this.mSelectedMenuId = page.id;
    }
    // close the menu when clicking a link from the menu
    this.menu.close();
  }
}
