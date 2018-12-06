import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodeStringPage } from './code-string';

@NgModule({
  declarations: [
    CodeStringPage,
  ],
  imports: [
    IonicPageModule.forChild(CodeStringPage),
  ],
})
export class CodeStringPageModule {}
