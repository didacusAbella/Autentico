import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { App } from 'ionic-angular/components/app/app';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  @ViewChild(Nav) navCtrl: Nav;
  constructor(
    public alertCtrl: AlertController,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public app: App)
    {
    this.inizializeApp();

    }

  inizializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNav();
      let activeView: ViewController = nav.getActive();
      if (activeView != null) {
        if (activeView.name == "HomePage" || activeView.name == "ScannerPage" || activeView.name == "AboutPage") {
          this.confirmExitApp();
        }
        else {
          this.navCtrl.setRoot(TabsPage, { opentab: 1 });
        }
      }
    });
  }

  confirmExitApp() {
    let alert = this.alertCtrl.create({
      title: 'Chiusura Applicazione',
      message: 'Vuoi veramente chiudere l\'applicazione?',
      buttons: [
        {
          text: 'no',
          role: 'no',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Buy clicked');
            this.platform.exitApp();
          }
        }
      ]
    });
    alert.present();
  }
}
