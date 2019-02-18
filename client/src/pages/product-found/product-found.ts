import { Component } from '@angular/core';
import { NavController, NavParams, App, Platform } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Clothing } from '../../app/Clothing';
import { API} from '../../shared/api'

@Component({
  selector: 'page-product-found',
  templateUrl: 'product-found.html',
  
})
export class ProductFoundPage {
  public clothing: Clothing;
  public server : string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app:App,
    public platform : Platform
    )
    {
      this.clothing = navParams.get("data")
      console.log(this.clothing)
      this.server = `${API.protocol}://${API.ip}:${API.port}/clothings/` 
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductFoundPage');
  }
  nextScanner(){
    this.navCtrl.setRoot(TabsPage, {opentab: 1}); //go to tab "scannerizza codice"
  }
  backArrow(){
    this.navCtrl.setRoot(TabsPage, {opentab: 0}); 
  }
 
}
