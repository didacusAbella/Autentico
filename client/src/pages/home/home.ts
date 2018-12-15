import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  hideDiv:Boolean
  mtn_txt:String ="mostra altri brands";
  
  constructor(public navCtrl: NavController) {
  }

  hide(){
    if(this.mtn_txt=="mostra altri brands"){
      this.mtn_txt="Mostra meno";
    }
    else{
      this.mtn_txt="mostra altri brands"
    }
    this.hideDiv = !this.hideDiv;
  }
}
