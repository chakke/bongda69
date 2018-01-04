import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'bd69-league-bxh',
  templateUrl: 'bd69-league-bxh.html'
})
export class Bd69LeagueBxhComponent {
  @Input() parentSubject:Subject<any>;

  listClub: any [];

  constructor() {
  }
  ngOnInit(){
    this.parentSubject.subscribe(event =>{
      console.log(event.club);
      
      this.listClub = event.club;
    })
  }
}
