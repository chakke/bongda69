import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireDatabaseModule, AngularFireDatabase } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule, AngularFirestore } from "angularfire2/firestore";

import { SuperTabsModule } from "ionic2-super-tabs";
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

export const Config = {
  apiKey: "AIzaSyCCHTqgkVOX5e8TS_-0Ez6ZBY0RGr4fzhw",
  authDomain: "aia-bongdaphui.firebaseapp.com",
  databaseURL: "https://aia-bongdaphui.firebaseio.com",
  projectId: "aia-bongdaphui",
  storageBucket: "aia-bongdaphui.appspot.com",
  messagingSenderId: "817560232912"
}

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(Config),    
    AngularFirestoreModule.enablePersistence(),
    SuperTabsModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseServiceProvider,
  ]
})
export class AppModule { }
