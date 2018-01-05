import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69EditPostPage } from './bd69-edit-post';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    Bd69EditPostPage,
  ],
  imports: [
    IonicPageModule.forChild(Bd69EditPostPage),
    ComponentsModule
  ],
})
export class Bd69EditPostPageModule {}
