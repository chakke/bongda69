import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69UserProfilePage } from './bd69-user-profile';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Bd69UserProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(Bd69UserProfilePage),
    ComponentsModule
  ],
})
export class Bd69UserProfilePageModule {}
