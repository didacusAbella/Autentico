import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    msg:string;
    linkToApp:string;
  constructor(
    public navCtrl: NavController,
    private emailComposer: EmailComposer,
    private socialSharing: SocialSharing
    ) {
     this.msg="Ho trovato l\'applicazione Autentico davvero ottima, serve a riconoscere capi firmati!"
     this.linkToApp="https://www.linkToApp.com";
  } 

  sharefb(){
    this.socialSharing.shareViaFacebook(this.msg,null,this.linkToApp);
  }
  shareTwitter(){
    this.socialSharing.shareViaTwitter(this.msg,null,this.linkToApp);

  }
  sendMail(){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
     
     let email = {
       to: 'angrynerds@fakemail.it',
       cc: 'nexsoft@fakemail.it',
       subject: 'Bug report',
       body: 'Sostituisci il corpo dell \'email descrivendo le operazioni fatte al momento del crash',
       isHtml: true
     };
     
     // Send a text message using default options
     this.emailComposer.open(email);
  }
 
}
