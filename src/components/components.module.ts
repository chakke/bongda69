import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69HeaderComponent } from './bd69-header/bd69-header';
import { Bd69MenuToggleComponent } from './bd69-menu-toggle/bd69-menu-toggle';
import { Bd69TableComponent } from './bd69-table/bd69-table';
import { Bd69FixturesComponent } from './bd69-fixtures/bd69-fixtures';
@NgModule({
	declarations: [Bd69HeaderComponent,
    Bd69MenuToggleComponent,
    Bd69TableComponent,
    Bd69FixturesComponent],
	imports: [IonicPageModule],
	exports: [Bd69HeaderComponent,
    Bd69MenuToggleComponent,
    Bd69TableComponent,
    Bd69FixturesComponent]
})
export class ComponentsModule {}
