import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import { ProductFoundPage } from '../product-found/product-found';
import { QrScanPage } from '../qr-scan/qr-scan';
import { HttpClient } from '@angular/common/http';
import { API } from '../../shared/api'
import { Clothing } from '../../app/Clothing';
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'

})

export class ScannerPage {
  testing: string
  inputValue: string;
  clothing: Clothing
  constructor(
    public navCtrl: NavController,
    public app: App,
    private dialogs: Dialogs,
    private httpClient: HttpClient,
  ) {
    this.testing = "stringCode";
  }

  scannerFunction() {
    this.app.getRootNav().setRoot(QrScanPage, {}, { animate: true, direction: 'forward' });
  }

  ProductFound() {
    this.httpClient.get<Clothing>(`${API.protocol}://${API.ip}:${API.port}/clothings/${this.inputValue}`).subscribe((clothing) => {
      this.clothing = clothing;
      this.app.getRootNav().setRoot(ProductFoundPage, {
        data: this.clothing
      });
    },error=>{
      this.dialogs.alert('Prodotto non trovato. Il capo potrebbe essere contraffatto!', 'Prodotto non trovato')
    })
  }
}