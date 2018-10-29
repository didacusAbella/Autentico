/*Add modules */
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ColorsPageComponent } from "./colors-page.component";
import { ColorComponent } from "../../components/color/color.component";

@NgModule({
  declarations: [
    ColorsPageComponent,
    ColorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ColorsPageModule {}