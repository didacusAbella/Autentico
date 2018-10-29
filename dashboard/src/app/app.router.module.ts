import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClothingsPageComponent } from "./pages/clothings/clothings-page.component";
import { ClothingsPageModule } from "./pages/clothings/clothings-page.module";
import { ColorsPageComponent } from "./pages/colors/colors-page.component";
import { ColorsPageModule } from "./pages/colors/colors-page.module";

const ROUTES: Routes = [
  { path: 'clothings', component: ClothingsPageComponent },
  { path: 'colors', component: ColorsPageComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES), ClothingsPageModule, ColorsPageModule],
  exports: [ RouterModule]
})
export class AppRoutingModule {}