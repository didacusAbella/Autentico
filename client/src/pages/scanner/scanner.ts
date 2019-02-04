import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ProductFoundPage } from '../product-found/product-found';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'

})

export class ScannerPage {
  testing:string
  inputValue: string;

  constructor(public navCtrl: NavController, public app: App, private dialogs: Dialogs, private barcodeScanner: BarcodeScanner, private toastCtr: ToastController) {
    this.testing = "stringCode";
  }
 

  scannerFunction() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      if (barcodeData.text == "404") {
        this.dialogs.alert('Prodotto non trovato. Il capo potrebbe essere contraffatto!', 'Prodotto non trovato')
          .then(() => console.log('Dialog dismissed'))
          .catch(e => console.log('Error displaying dialog', e));
          this.testing="stringCode";

      }
      else if (barcodeData.text == "") {
        let toast = this.toastCtr.create({
          message: 'Operazione annullata',
          duration: 2000,
          position: 'bottom'
        });
        this.testing="stringCode";
        toast.present(toast);
      }
      else {
        this.app.getRootNav().push(ProductFoundPage, {}, { animate: false })

      }
    });
  }
  ProductFound() {
    if (this.inputValue != "404") {
      this.app.getRootNav().push(ProductFoundPage, {}, { animate: false });
    }
    else {
      this.dialogs.alert('Prodotto non trovato. Il capo potrebbe essere contraffatto!','Prodotto non trovato')
        .then(() => console.log('Dialog dismissed'))
        .catch(e => console.log('Error displaying dialog', e));
    }
  }
}