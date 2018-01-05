import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69HeaderComponent } from './bd69-header/bd69-header';
import { Bd69FixturesComponent } from './bd69-fixtures/bd69-fixtures';
import { Bd69LeagueBxhComponent } from './bd69-league-bxh/bd69-league-bxh';
import { Bd69LeagueLtdComponent } from './bd69-league-ltd/bd69-league-ltd';
import { Bd69LeagueDsctComponent } from './bd69-league-dsct/bd69-league-dsct';
import { Bd69HeaderCloneComponent } from './bd69-header-clone/bd69-header-clone';
import { Bd69SearchBarComponent } from './bd69-search-bar/bd69-search-bar';
import { Bd69NewsLocationBarComponent } from './bd69-news-location-bar/bd69-news-location-bar';
@NgModule({
	declarations: [Bd69HeaderComponent,
    Bd69FixturesComponent,
    Bd69LeagueBxhComponent,
    Bd69LeagueLtdComponent,
    Bd69LeagueDsctComponent,
    Bd69HeaderCloneComponent,
    Bd69SearchBarComponent,
    Bd69NewsLocationBarComponent],
	imports: [IonicPageModule],
	exports: [Bd69HeaderComponent,
    Bd69FixturesComponent,
    Bd69LeagueBxhComponent,
    Bd69LeagueLtdComponent,
    Bd69LeagueDsctComponent,
    Bd69HeaderCloneComponent,
    Bd69SearchBarComponent,
    Bd69NewsLocationBarComponent]
})
export class ComponentsModule {}
