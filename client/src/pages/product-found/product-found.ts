import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the ProductFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  test(){
    this.navCtrl.setRoot(TabsPage, {opentab: 0});
  }
}
