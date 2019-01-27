import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoModule } from "./components/info/info.module";
import { BrandsModule } from './components/brands/brand.module';
import { CollectionModule } from './components/collections/collection.module';
import { ColorModule } from "./components/colors/color.module";


const routes: Routes = [];

@NgModule({
  imports: [InfoModule, BrandsModule, CollectionModule, ColorModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
