import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BrandsComponent } from "./brand.component";
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import { BrandService } from './brand.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';



const BRAND_ROUTES: Routes = [
  { path: 'brands', children: [
    { path: '', component: BrandsComponent}
  ]}
]

@NgModule({
  declarations: [BrandsComponent],
  imports: [CommonModule, TableModule, SplitButtonModule, 
    ConfirmDialogModule, RouterModule.forChild(BRAND_ROUTES)],
  exports: [RouterModule],
  providers: [BrandService, ConfirmationService]
})
export class BrandsModule {}