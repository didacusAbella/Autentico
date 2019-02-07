import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import { ProductFoundPage } from '../product-found/product-found';
import { QrScanPage } from '../qr-scan/qr-scan';
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'

})

export class ScannerPage {
  testing: string
  inputValue: string;

  constructor(
    public navCtrl: NavController,
    public app: App,
    private dialogs: Dialogs
    ) {
    this.testing = "stringCode";
  }

  scannerFunction() {
   this.app.getRootNav().setRoot(QrScanPage, {}, { animate: true, direction: 'forward' });
  }

  ProductFound() {
    if (this.inputValue != "404") {
      this.app.getRootNav().setRoot(ProductFoundPage, {}, { animate: true, direction: 'forward' });
    }
    else {
      this.dialogs.alert('Prodotto non trovato. Il capo potrebbe essere contraffatto!', 'Prodotto non trovato')
    }
  }
}