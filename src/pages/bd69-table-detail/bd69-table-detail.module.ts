import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69TableDetailPage } from './bd69-table-detail';
import { SharedModule } from "../../app/shared.module";

@NgModule({
  declarations: [
    Bd69TableDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(Bd69TableDetailPage),
    SharedModule
  ],
})
export class Bd69TableDetailPageModule {}
