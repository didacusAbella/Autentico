import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ClothingModule } from "./components/clothing/clothing.module";
import { ColorModule } from "./components/color/colors.module";
import { BrandModule } from "./components/brand/brand.module";
import { CollectionModule } from "./components/collection/collection.module";


@NgModule({
  imports: [ ClothingModule, ColorModule, BrandModule, CollectionModule, RouterModule.forRoot([])],
  exports: [ RouterModule]
})
export class AppRoutingModule {}