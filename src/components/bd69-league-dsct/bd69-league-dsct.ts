import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'bd69-league-dsct',
  templateUrl: 'bd69-league-dsct.html'
})
export class Bd69LeagueDsctComponent {
  @Input() parentSubject:Subject<any>;


  constructor() {
  }

  ngOnInit(){
    this.parentSubject.subscribe(event =>{
      console.log(event.club);
    })
  }
}
