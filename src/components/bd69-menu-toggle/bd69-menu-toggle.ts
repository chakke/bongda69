import { Component } from '@angular/core';

@Component({
  selector: 'bd69-menu-toggle',
  templateUrl: 'bd69-menu-toggle.html'
})
export class Bd69MenuToggleComponent {

  text: string;

  constructor() {
    console.log('Hello Bd69MenuToggleComponent Component');
    this.text = 'Hello World';
  }

}
