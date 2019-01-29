import { Component } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { App } from 'ionic-angular/components/app/app';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { HomePage } from '../pages/home/home';
import { Dialogs } from '@ionic-native/dialogs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
   nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private app: App,  private dialogs: Dialogs) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      platform.registerBackButtonAction(() => {
        app.navPop();
    });
    });
  }
  
}
