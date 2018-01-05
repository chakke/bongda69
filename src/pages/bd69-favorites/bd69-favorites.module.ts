import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69FavoritesPage } from './bd69-favorites';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Bd69FavoritesPage,
  ],
  imports: [
    IonicPageModule.forChild(Bd69FavoritesPage),
    ComponentsModule
  ],
})
export class Bd69FavoritesPageModule {}
