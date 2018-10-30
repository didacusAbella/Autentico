import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClothingLayoutComponent } from "./components/clothing/layout/clothing-layout.component";
import { ClothingModule } from "./components/clothing/clothing.module";
import { ColorModule } from "./components/color/colors.module";
import { ClothingListComponent } from "./components/clothing/list/clothing-list.component";
import { ClothingDetailComponent } from "./components/clothing/detail/clothing-detail.component";
import { ColorLayoutComponent } from "./components/color/layout/color-layout.component";
import { ColorListComponent } from "./components/color/list/color-list.component";


const ROUTES: Routes = [
  { 
    path: 'clothings', component: ClothingLayoutComponent, children: [
      { path: '', component: ClothingListComponent },
      { path: ':full_id', component: ClothingDetailComponent }
    ]
  },
  {
    path: 'colors', component: ColorLayoutComponent, children: [
      {path: '', component: ColorListComponent }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES), ClothingModule, ColorModule],
  exports: [ RouterModule]
})
export class AppRoutingModule {}