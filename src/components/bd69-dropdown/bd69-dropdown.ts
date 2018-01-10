import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'bd69-dropdown',
  templateUrl: 'bd69-dropdown.html'
})
export class Bd69DropdownComponent {

  @Input() parentSubject: Subject<any>;
  @Input("title") title = "";
  @Input("items") items = [];
  @Input("currentIndex") currentIndex = 0;
  @Output() itemChosen = new EventEmitter();

  currentItem = "";
  isFirstTime = true;
  isGreen = false;

  constructor() {
  }

  ngOnInit() {
    this.parentSubject.subscribe(event => {
      // called when the notifyChildren method is
      // called in the parent component
      this.setUpData(event.title, event.items, event.currentIndex);
    });
  }

  ngOnDestroy() {
    // needed if child gets re-created (eg on some model changes)
    // note that subsequent subscriptions on the same subject will fail
    // so the parent has to re-create parentSubject on changes
    this.parentSubject.unsubscribe();
  }

  ngAfterViewInit() {
    this.currentItem = this.items[this.currentIndex];
  }

  setUpData(title?: string, items?: Array<string>, currentIndex?: number) {
    if (title) {
      this.title = title;
    }

    if (items) {
      this.items = items;
    }

    if (currentIndex > -1) {
      this.currentIndex = currentIndex;
    }

    this.currentItem = this.items[this.currentIndex];
  }

  onClickClose() {
    this.hideDropdown();
    if (!this.isFirstTime) {
      this.isGreen = true;
    }
  }

  onClickDropDown() {
    this.isGreen = false;
    this.showDropdown();
  }

  onClickItem(item) {
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }
    this.isGreen = true;
    this.currentIndex = this.items.indexOf(item);
    this.itemChosen.emit({ "index": this.currentIndex, "item": item });
    this.currentItem = this.items[this.currentIndex];
    this.hideDropdown();
  }

  showDropdown() {
    let backdrop = document.getElementById("backdrop");
    let details = document.getElementById("details");
    if (backdrop.classList.contains("hidden")) {
      backdrop.classList.remove("hidden");
    }
    if (details.classList.contains("hidden")) {
      details.classList.remove("hidden");
    }
  }

  hideDropdown() {
    let backdrop = document.getElementById("backdrop");
    let details = document.getElementById("details");
    if (!backdrop.classList.contains("hidden")) {
      backdrop.classList.add("hidden");
    }
    if (!details.classList.contains("hidden")) {
      details.classList.add("hidden");
    }
  }
}
