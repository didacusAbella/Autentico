import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoModule } from "./components/info/info.module";
import { BrandsModule } from './components/brands/brand.module';
import { CollectionModule } from './components/collections/collection.module';
import { ColorModule } from "./components/colors/color.module";
import { ClothingModule } from './components/clothings/clothing.module';
import { StatsModule } from './components/stats/stats.module';
import { StatsComponent } from './components/stats/stats.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [
    InfoModule, BrandsModule, CollectionModule,
    ColorModule, ClothingModule, StatsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
