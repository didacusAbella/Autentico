import { Component } from '@angular/core';
import { NavController, App, Toast } from 'ionic-angular';
import { CodeStringPage } from '../code-string/code-string';
import { Dialogs } from '@ionic-native/dialogs';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ProductFoundPage } from '../product-found/product-found';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
 
})

export class ScannerPage {
  constructor(public navCtrl: NavController, public app:App,private dialogs: Dialogs, private barcodeScanner: BarcodeScanner, private toastCtr: ToastController) {
  
  }
  goAnOtherPage() {
    this.app.getRootNav().push(CodeStringPage,{},{animate:false})
  }

  scannerFunction(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      if( barcodeData.text =="404"){
      this.dialogs.alert('Prodotto non trovato. Il capo potrebbe essere contraffatto!','Prodotto non trovato')
      .then(() => console.log('Dialog dismissed'))
      .catch(e => console.log('Error displaying dialog', e));
      }
      else if(barcodeData.text==""){
        let toast = this.toastCtr.create({
          message: 'Operazione annullata',
          duration: 2000,
          position: 'bottom'
        });
        toast.present(toast);
      }
      else{
        this.app.getRootNav().push(ProductFoundPage,{},{animate:false})

      }
     });

  }
}