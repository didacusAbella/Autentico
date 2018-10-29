/*Add modules */
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

/* Add component */
import { ClothingsPageComponent } from "./clothings-page.component";
import { ClothingComponent } from "src/app/components/clothing/clothing.component";

@NgModule({
  declarations: [
    ClothingsPageComponent,
    ClothingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ClothingsPageModule {}

