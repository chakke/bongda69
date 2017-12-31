import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69NewsFeedPage } from './bd69-news-feed';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Bd69NewsFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(Bd69NewsFeedPage),
    ComponentsModule
  ],
})
export class Bd69NewsFeedPageModule {}
