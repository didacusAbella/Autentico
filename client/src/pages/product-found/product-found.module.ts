import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductFoundPage } from './product-found';

@NgModule({
  declarations: [
    ProductFoundPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductFoundPage),
  ],
})
export class ProductFoundPageModule {}
