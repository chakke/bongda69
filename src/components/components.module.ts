import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69HeaderComponent } from './bd69-header/bd69-header';
import { Bd69FixturesComponent } from './bd69-fixtures/bd69-fixtures';
import { Bd69SearchBarComponent } from './bd69-search-bar/bd69-search-bar';
import { Bd69NewsLocationBarComponent } from './bd69-news-location-bar/bd69-news-location-bar';
import { Bd69NewsLocationListComponent } from './bd69-news-location-list/bd69-news-location-list';
import { Bd69HeaderSearchComponent } from './bd69-header-search/bd69-header-search';
import { Bd69HeaderElementComponent } from './bd69-header-element/bd69-header-element';
import { Bd69DropdownComponent } from './bd69-dropdown/bd69-dropdown';
import { Bd69FavoritesComponent } from './bd69-favorites/bd69-favorites';
import { Bd69LeaguesComponent } from './bd69-leagues/bd69-leagues';
import { Bd69NewLocationsComponent } from './bd69-new-locations/bd69-new-locations';
@NgModule({
    declarations: [
        Bd69HeaderComponent,
        Bd69FixturesComponent,
        Bd69SearchBarComponent,
        Bd69NewsLocationBarComponent,
        Bd69NewsLocationListComponent,
        Bd69HeaderSearchComponent,
        Bd69HeaderElementComponent,
        Bd69DropdownComponent,
        Bd69FavoritesComponent,
    Bd69LeaguesComponent,
    Bd69NewLocationsComponent],
    imports: [IonicPageModule],
    exports: [
        Bd69HeaderComponent,
        Bd69FixturesComponent,
        Bd69SearchBarComponent,
        Bd69NewsLocationBarComponent,
        Bd69NewsLocationListComponent,
        Bd69HeaderSearchComponent,
        Bd69HeaderElementComponent,
        Bd69DropdownComponent,
        Bd69FavoritesComponent,
    Bd69LeaguesComponent,
    Bd69NewLocationsComponent]
})
export class ComponentsModule { }
