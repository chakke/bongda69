import { Component, Input } from '@angular/core';


@Component({
  selector: 'bd69-favorites',
  templateUrl: 'bd69-favorites.html'
})
export class Bd69FavoritesComponent {
  @Input('giai-dau') giai_dau = [];
  @Input('cau-thu') cau_thu = [];
  @Input('san-bong') san_bong = [];

  constructor() {
  }

}
