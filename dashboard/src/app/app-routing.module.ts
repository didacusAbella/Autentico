import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoModule } from "./components/info/info.module";
import { BrandsModule } from './components/brands/brand.module';

const routes: Routes = [];

@NgModule({
  imports: [InfoModule, BrandsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
