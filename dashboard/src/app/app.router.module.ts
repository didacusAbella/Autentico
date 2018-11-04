import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ClothingModule } from "./components/clothing/clothing.module";
import { ColorModule } from "./components/color/colors.module";


@NgModule({
  imports: [ ClothingModule, ColorModule, RouterModule.forRoot([])],
  exports: [ RouterModule]
})
export class AppRoutingModule {}