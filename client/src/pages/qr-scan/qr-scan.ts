import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ProductFoundPage } from '../product-found/product-found';
import { App } from 'ionic-angular/components/app/app';
import { Dialogs } from '@ionic-native/dialogs';
import { TabsPage } from '../tabs/tabs';
import { API } from '../../shared/api'
import { Clothing } from '../../app/Clothing';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-qr-scan',
  templateUrl: 'qr-scan.html',
})
export class QrScanPage {
  testing: string
  inputValue: string;
  clothing: Clothing
  anyErrors: boolean

  constructor(
    public navCtrl: NavController,
    public app: App,
    private dialogs: Dialogs,
    private barcodeScanner: BarcodeScanner,
    private httpClient: HttpClient,
    private toastCtr: ToastController,
  ) {

    this.barcodeScanner.scan().then(barcodeData => {
      this.httpClient.get<Clothing>(`${API.protocol}://${API.ip}:${API.port}/clothings/${barcodeData.text}`).subscribe((clothing) => {
        this.clothing = clothing;
        //in case hardware back is pressed
        if (barcodeData.text == "") {
          let toast = this.toastCtr.create({
            message: 'Operazione annullata',
            duration: 2000,
            position: 'bottom'
          });

          this.testing = "stringCode";
          toast.present(toast);
          console.log("enter in empty case")
          this.navCtrl.setRoot(TabsPage, { opentab: 1 });

        }
        else {
          this.app.getRootNav().push(ProductFoundPage, {
            data: this.clothing
          });
        }
      }, error => {
        this.dialogs.alert('Prodotto non trovato. Il capo potrebbe essere contraffatto!', 'Prodotto non trovato')
        this.testing = "stringCode";
        this.navCtrl.setRoot(TabsPage, { opentab: 1 });
      })
    }); //close barcodeScaner.scan().then()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrScanPage');
  }

}
