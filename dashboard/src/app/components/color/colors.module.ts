/*Add modules */
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

import { ColorPickerModule } from "ngx-color-picker";

/*Add component */
import { ColorListComponent } from "./list/color-list.component";
import { ColorOverviewComponent } from "./overview/color-overview.component";
import { ColorLayoutComponent } from "./layout/color-layout.component";
import { ColorDetailComponent } from "./detail/color-detail.component";

const COLOR_ROUTES :Routes = [
  { path: 'colors', component: ColorLayoutComponent, children: [
    { path: '', component: ColorListComponent },
    { path: ':id', component: ColorDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [
    ColorLayoutComponent,
    ColorListComponent,
    ColorOverviewComponent,
    ColorDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    RouterModule.forChild(COLOR_ROUTES)
  ],
  exports: [ RouterModule ]
})
export class ColorModule {}