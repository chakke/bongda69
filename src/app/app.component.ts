import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = "Bd69NewsFeedPage";
  mSelectedMenuId: number = 1;

  pages: Array<{ id: number, icon: string, component: any }> = [
    { id: 1, icon: 'ios-football-outline', component: "Bd69NewsFeedPage" },
    { id: 2, icon: 'ios-football-outline', component: "Bd69FixturesPage" },
    { id: 3, icon: 'ios-football-outline', component: "Bd69LeaguePage" },
    { id: 4, icon: 'ios-football-outline', component: "Bd69FavoritesPage" },
    { id: 5, icon: 'ios-football-outline', component: "Bd69UserProfilePage" },
  ];;

  constructor(
    public events: Events,
    platform: Platform,
    public menu: MenuController,
    statusBar: StatusBar,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // set our app's pages

    this.events.subscribe("menu:changed", (page) => {
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
    // navigate to the new page if it is not the current page
    // this.nav.setRoot(page.component);
  }
}
