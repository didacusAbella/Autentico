/*Add modules */
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from "@angular/router";

/*Add component */
import { ColorListComponent } from "./list/color-list.component";
import { ColorOverviewComponent } from "./overview/color-overview.component";
import { ColorLayoutComponent } from "./layout/color-layout.component";

@NgModule({
  declarations: [
    ColorLayoutComponent,
    ColorListComponent,
    ColorOverviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ColorModule {}