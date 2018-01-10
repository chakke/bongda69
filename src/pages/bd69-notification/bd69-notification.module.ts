import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69NotificationPage } from './bd69-notification';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Bd69NotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(Bd69NotificationPage),
    ComponentsModule
  ],
})
export class Bd69NotificationPageModule {}
