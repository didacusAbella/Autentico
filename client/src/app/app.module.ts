import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ScannerPage } from '../pages/scanner/scanner';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CodeStringPage } from '../pages/code-string/code-string';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductFoundPage } from '../pages/product-found/product-found';
import { Dialogs } from '@ionic-native/dialogs';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { BackgroundMode } from '@ionic-native/background-mode';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
@NgModule({
  declarations: [
    MyApp,
    ScannerPage,
    AboutPage,
    HomePage,
    TabsPage,
    CodeStringPage,
    ProductFoundPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ScannerPage,
    AboutPage,
    HomePage,
    TabsPage,
    CodeStringPage,
    ProductFoundPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    EmailComposer,
    SocialSharing,
    BackgroundMode,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
