import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-product-found',
  templateUrl: 'product-found.html',
})
export class ProductFoundPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductFoundPage');
  }
  nextScanner(){
    this.navCtrl.setRoot(TabsPage, {opentab: 1});
  }
  backArrow(){
    this.navCtrl.setRoot(TabsPage, {opentab: 0});
  }
}
