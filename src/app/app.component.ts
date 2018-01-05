import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;

  pages: Array<{ id: number, icon: string, component: any }>;

  constructor(platform: Platform,
    public menu: MenuController,
    statusBar: StatusBar,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // set our app's pages
    this.pages = [
      { id: 1, icon: 'ios-football-outline', component: "Bd69NewsFeedPage" },
      { id: 2, icon: 'ios-football-outline', component: "Bd69FixturesPage" },
      { id: 3, icon: 'ios-football-outline', component: "Bd69TablePage" },
      { id: 4, icon: 'ios-football-outline', component: "Bd69FavoritesPage" },
      { id: 5, icon: 'ios-football-outline', component: "Bd69UserProfilePage" },
    ];
    
    this.rootPage = this.pages[0];
  }

  openPage(page) {
    if(page.id != this.rootPage.id){
      this.rootPage = page;
    }
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    // this.nav.setRoot(page.component);
  }
}
