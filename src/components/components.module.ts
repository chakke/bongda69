import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69HeaderComponent } from './bd69-header/bd69-header';
import { Bd69MenuToggleComponent } from './bd69-menu-toggle/bd69-menu-toggle';
@NgModule({
	declarations: [Bd69HeaderComponent,
    Bd69MenuToggleComponent],
	imports: [IonicPageModule],
	exports: [Bd69HeaderComponent,
    Bd69MenuToggleComponent]
})
export class ComponentsModule {}
