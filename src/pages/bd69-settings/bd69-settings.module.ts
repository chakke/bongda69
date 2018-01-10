import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69SettingsPage } from './bd69-settings';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Bd69SettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(Bd69SettingsPage),
    ComponentsModule
  ],
})
export class Bd69SettingsPageModule {}
