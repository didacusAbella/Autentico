/* Angular Core modules*/
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
/* Prime NG odules */
import { FieldsetModule } from 'primeng/fieldset';
import { OrderListModule } from 'primeng/orderlist';
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
import { BrandFormComponent } from './form/brandform.component';



const BRAND_ROUTES: Routes = [
  { path: 'brands', children: [
    { path: '', component: BrandsComponent},
    { path: 'newBrand', component: BrandFormComponent },
    { path: ':id', component: BrandDetailComponent},
  ]}
]

@NgModule({
  declarations: [BrandsComponent, BrandDetailComponent, BrandFormComponent],
  imports: [CommonModule, SplitButtonModule, ConfirmDialogModule, 
    FieldsetModule, SpinnerModule, OrderListModule, 
    InputTextModule, ButtonModule, ReactiveFormsModule, RouterModule.forChild(BRAND_ROUTES)],
  exports: [RouterModule],
  providers: [BrandService, ConfirmationService]
})
export class BrandsModule {}