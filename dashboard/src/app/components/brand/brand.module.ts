/** Core modules */
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { BrandLayoutComponent } from "./layout/brand-layout.component";
import { BrandListComponent } from "./list/brand-list.component";
import { BrandDetailComponent } from "./detail/brand-detail.component";

const BRAND_ROUTES :Routes = [
  { path: 'brands', component: BrandLayoutComponent, children: [
      { path: '', component: BrandListComponent },
      { path: ':id', component: BrandDetailComponent }
    ] 
  }
]

@NgModule({
  declarations: [
    BrandLayoutComponent,
    BrandListComponent,
    BrandDetailComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(BRAND_ROUTES)],
  exports: [RouterModule]
})
export class BrandModule {}