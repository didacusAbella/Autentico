import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ProductFoundPage } from '../product-found/product-found';
import { App } from 'ionic-angular/components/app/app';
import { Dialogs } from '@ionic-native/dialogs';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-qr-scan',
  templateUrl: 'qr-scan.html',
})
export class QrScanPage {
  testing: string
  inputValue: string;

  constructor(
    public navCtrl: NavController,
    public app: App,
    private dialogs: Dialogs,
    private barcodeScanner: BarcodeScanner,
    private toastCtr: ToastController,
  ) {
    this.barcodeScanner.scan().then(barcodeData => {
      if (barcodeData.text == "404") {
        this.dialogs.alert('Prodotto non trovato. Il capo potrebbe essere contraffatto!', 'Prodotto non trovato')
        this.testing = "stringCode";
        this.navCtrl.setRoot(TabsPage, { opentab: 1 });
      }

      else if (barcodeData.text == "") {
        let toast = this.toastCtr.create({
          message: 'Operazione annullata',
          duration: 2000,
          position: 'bottom'
        });

        this.testing = "stringCode";
        toast.present(toast);
      }
      else {
        this.app.getRootNav().push(ProductFoundPage, {}, { animate: false })
      }
    }); //close barcodeScaner.scan().then()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrScanPage');
  }

}
