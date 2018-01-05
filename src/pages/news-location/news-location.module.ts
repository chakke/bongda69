import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsLocationPage } from './news-location';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    NewsLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsLocationPage),
    ComponentsModule
  ],
})
export class NewsLocationPageModule {}
