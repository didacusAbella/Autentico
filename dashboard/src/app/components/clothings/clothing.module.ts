import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { ClothingComponent } from './clothing.component';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from "primeng/inputtext";
import { DialogModule } from "primeng/dialog";
import { SplitButtonModule } from 'primeng/splitbutton';
import { ClothingService } from './clothing.service';

const CLOTHING_ROUTES: Routes = [
  { path: 'clothings', children: [
    { path: '', component: ClothingComponent }
  ]}
];

@NgModule({
  declarations: [ClothingComponent],
  imports: [CommonModule, ReactiveFormsModule, DataViewModule, 
    InputTextModule, SplitButtonModule, DialogModule ,RouterModule.forChild(CLOTHING_ROUTES)],
  exports: [RouterModule],
  providers: [ClothingService]
})
export class ClothingModule {}