/* Angular Core modules*/
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
/* Prime NG odules */
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { SpinnerModule } from 'primeng/spinner';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
/* Autentico Libraries */
import { BrandDetailComponent } from './detail/branddetail.component';
import { BrandsComponent } from "./brand.component";
import { BrandService } from './brand.service';



const BRAND_ROUTES: Routes = [
  { path: 'brands', children: [
    { path: '', component: BrandsComponent},
    { path: ':id', component: BrandDetailComponent}
  ]}
]

@NgModule({
  declarations: [BrandsComponent, BrandDetailComponent],
  imports: [CommonModule, TableModule, SplitButtonModule, 
    ConfirmDialogModule, FieldsetModule, SpinnerModule, 
    InputTextModule, ButtonModule, ReactiveFormsModule, RouterModule.forChild(BRAND_ROUTES)],
  exports: [RouterModule],
  providers: [BrandService, ConfirmationService]
})
export class BrandsModule {}