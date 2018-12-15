import { Component } from '@angular/core';

import { ScannerPage } from '../scanner/scanner';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
  
})
export class TabsPage {
  seltabix:number;
  tab1Root = HomePage;
  tab2Root = ScannerPage;
  tab3Root = AboutPage;

  constructor(public np: NavParams) {
    this.seltabix = np.get('opentab');
  }
}
