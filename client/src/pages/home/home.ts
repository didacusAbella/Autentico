import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  hideDiv: Boolean
  mtn_txt: String = "mostra altri brands";
  otherBrand: String = "mostra altri brands";
  showLesss: String = "Mostra meno";

  constructor(
    public navctrl: NavController
    ) {
  }
/*hide or show all brands*/
  hide() {
    if (this.mtn_txt == this.otherBrand) {
      this.mtn_txt = this.showLesss; //hidden
    }
    else {
      this.mtn_txt = this.otherBrand; //show all
    }
    this.hideDiv = !this.hideDiv;
  }
}
