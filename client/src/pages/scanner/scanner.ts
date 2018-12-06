import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { CodeStringPage } from '../code-string/code-string';
import { Dialogs } from '@ionic-native/dialogs';
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
 
})

export class ScannerPage {
  constructor(public navCtrl: NavController, public app:App,private dialogs: Dialogs) {
  
  }
  goAnOtherPage() {
    this.app.getRootNav().push(CodeStringPage,{},{animate:false})
  }

  scannerFunction(){
    this.dialogs.alert('TODO','TODO')
    .then(() => console.log('Dialog dismissed'))
    .catch(e => console.log('Error displaying dialog', e));
  }
}