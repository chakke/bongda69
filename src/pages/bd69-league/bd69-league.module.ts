import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69LeaguePage } from './bd69-league';
import { SharedModule } from "../../app/shared.module";


import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Bd69LeaguePage,
  ],
  imports: [
    IonicPageModule.forChild(Bd69LeaguePage),
    ComponentsModule,
    SharedModule
  ],
})
export class Bd69LeaguePageModule {}
