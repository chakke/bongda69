import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69ListClubsPage } from './bd69-list-clubs';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    Bd69ListClubsPage,
  ],
  imports: [
    IonicPageModule.forChild(Bd69ListClubsPage),
    ComponentsModule
  ],
})
export class Bd69ListClubsPageModule {}
