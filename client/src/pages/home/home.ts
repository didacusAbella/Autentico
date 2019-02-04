import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  hideDiv: Boolean
  mtn_txt: String = "mostra altri brands";
  otherBrand: String = "mostra altri brands";
  showLesss: String = "Mostra meno";

  constructor(public navctrl: NavController,private platform: Platform) {
  }

  hide() {
    if (this.mtn_txt == this.otherBrand) {
      this.mtn_txt = this.showLesss;
    }
    else {
      this.mtn_txt = this.otherBrand;
    }
    this.hideDiv = !this.hideDiv;
  }
  ionViewDidEnter() {
    this.platform.registerBackButtonAction(() => {
      this.platform.exitApp();
    });
  }
  
}
