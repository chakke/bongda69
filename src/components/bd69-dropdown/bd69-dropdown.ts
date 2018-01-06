import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bd69-dropdown',
  templateUrl: 'bd69-dropdown.html'
})
export class Bd69DropdownComponent {

  @Input("title") title  = "";
  @Input("items") items = [];
  @Input("currentIndex") currentIndex = 0;
  @Output() itemChosen = new EventEmitter();

  currentItem = "";
  isFirstTime = true;
  isGreen = false;

  constructor() {
  }

  ngAfterViewInit(){
    this.currentItem = this.items[this.currentIndex];
  }

  onClickClose() {
    this.hideDropdown();
    if(!this.isFirstTime){
      this.isGreen = true;
    }
  }

  onClickDropDown() {
    this.isGreen = false;
    this.showDropdown();
  }

  onClickItem(item){
    if(this.isFirstTime){
      this.isFirstTime = false;
    }
    this.isGreen = true;
    this.currentIndex = this.items.indexOf(item);
    this.itemChosen.emit({"index": this.currentIndex, "item": item});
    this.currentItem = this.items[this.currentIndex];
    this.hideDropdown();
  }

  showDropdown(){
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
