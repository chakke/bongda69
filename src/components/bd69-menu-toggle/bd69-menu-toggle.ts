import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

@Component({
  selector: 'bd69-menu-toggle',
  templateUrl: 'bd69-menu-toggle.html'
})
export class Bd69MenuToggleComponent {

  menuContainer: HTMLDivElement;
  menu: HTMLDivElement;
  backdrop: HTMLDivElement;

  constructor(public mEvents: Events) {
    mEvents.subscribe('showmenu', () => {
      this.onShowMenu();
    })
  }

  ngOnInit() {
    this.menuContainer = <HTMLDivElement>document.getElementById("menu-container");
    this.menu = <HTMLDivElement>document.getElementById("menu");
    this.backdrop = <HTMLDivElement>document.getElementById("backdrop");
  }

  onShowMenu() {
    this.menuContainer.style.pointerEvents = "all";
    this.menu.style.width = "60%";
    this.backdrop.style.opacity = ".4";
  }

  onClickHide() {
    this.menu.style.width = "0";
    this.backdrop.style.opacity = "0";
    this.menuContainer.style.pointerEvents = "none";
  }

  onClickMenu() {
    console.log("onClickMenu");
  }

}
