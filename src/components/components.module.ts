import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69HeaderComponent } from './bd69-header/bd69-header';
import { Bd69FixturesComponent } from './bd69-fixtures/bd69-fixtures';
import { Bd69LeagueBxhComponent } from './bd69-league-bxh/bd69-league-bxh';
import { Bd69LeagueLtdComponent } from './bd69-league-ltd/bd69-league-ltd';
import { Bd69LeagueDsctComponent } from './bd69-league-dsct/bd69-league-dsct';
import { Bd69SearchBarComponent } from './bd69-search-bar/bd69-search-bar';
import { Bd69NewsLocationBarComponent } from './bd69-news-location-bar/bd69-news-location-bar';
import { Bd69NewsLocationListComponent } from './bd69-news-location-list/bd69-news-location-list';
import { Bd69HeaderSearchComponent } from './bd69-header-search/bd69-header-search';
import { Bd69HeaderElementComponent } from './bd69-header-element/bd69-header-element';
import { Bd69DropdownComponent } from './bd69-dropdown/bd69-dropdown';
@NgModule({
    declarations: [
        Bd69HeaderComponent,
        Bd69FixturesComponent,
        Bd69LeagueBxhComponent,
        Bd69LeagueLtdComponent,
        Bd69LeagueDsctComponent,
        Bd69SearchBarComponent,
        Bd69NewsLocationBarComponent,
        Bd69NewsLocationListComponent,
        Bd69HeaderSearchComponent,
        Bd69HeaderElementComponent,
    Bd69DropdownComponent],
    imports: [IonicPageModule],
    exports: [
        Bd69HeaderComponent,
        Bd69FixturesComponent,
        Bd69LeagueBxhComponent,
        Bd69LeagueLtdComponent,
        Bd69LeagueDsctComponent,
        Bd69SearchBarComponent,
        Bd69NewsLocationBarComponent,
        Bd69NewsLocationListComponent,
        Bd69HeaderSearchComponent,
        Bd69HeaderElementComponent,
    Bd69DropdownComponent]
})
export class ComponentsModule { }
