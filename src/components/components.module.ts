import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69HeaderComponent } from './bd69-header/bd69-header';
import { Bd69MenuToggleComponent } from './bd69-menu-toggle/bd69-menu-toggle';
import { Bd69FixturesComponent } from './bd69-fixtures/bd69-fixtures';
import { Bd69LeagueBxhComponent } from './bd69-league-bxh/bd69-league-bxh';
import { Bd69LeagueLtdComponent } from './bd69-league-ltd/bd69-league-ltd';
import { Bd69LeagueDsctComponent } from './bd69-league-dsct/bd69-league-dsct';
@NgModule({
	declarations: [Bd69HeaderComponent,
    Bd69MenuToggleComponent,
    Bd69FixturesComponent,
    Bd69LeagueBxhComponent,
    Bd69LeagueLtdComponent,
    Bd69LeagueDsctComponent],
	imports: [IonicPageModule],
	exports: [Bd69HeaderComponent,
    Bd69MenuToggleComponent,
    Bd69FixturesComponent,
    Bd69LeagueBxhComponent,
    Bd69LeagueLtdComponent,
    Bd69LeagueDsctComponent]
})
export class ComponentsModule {}
