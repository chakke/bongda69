import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'bd69-league-ltd',
  templateUrl: 'bd69-league-ltd.html'
})
export class Bd69LeagueLtdComponent {
  @Input() parentSubject:Subject<any>;

  listClub: any =[];
  constructor() {
  }

  ngOnInit(){
    // this.parentSubject.subscribe(event =>{
    //   this.listClub = event.club;
    // })
  }
}
