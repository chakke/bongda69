import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69TablePage } from './bd69-table';
import { SharedModule } from "../../app/shared.module";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    Bd69TablePage,
  ],
  imports: [
    IonicPageModule.forChild(Bd69TablePage),
    SharedModule,
    ComponentsModule
  ],
})
export class Bd69TablePageModule {}
