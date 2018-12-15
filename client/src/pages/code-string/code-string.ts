import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { ProductFoundPage } from '../product-found/product-found';
import { App } from 'ionic-angular/components/app/app';
import { Dialogs } from '@ionic-native/dialogs';

@IonicPage()
@Component({
  selector: 'page-code-string',
  templateUrl: 'code-string.html',
})
export class CodeStringPage {

  constructor(public navCtrl: NavController, public platform: Platform, public app: App,private dialogs:Dialogs) {

  }

  inputValue: string;

  ProductFound() {
    if (this.inputValue != "404") {
      this.navCtrl.setRoot(ProductFoundPage, {}, { animate: false });
    }
    else {
      this.dialogs.alert('Prodotto non trovato. Il capo potrebbe essere contraffatto!','Prodotto non trovato')
        .then(() => console.log('Dialog dismissed'))
        .catch(e => console.log('Error displaying dialog', e));
    }
  }
  backPressed() {
    this.navCtrl.pop({
      animate: false
    });
  }
}
