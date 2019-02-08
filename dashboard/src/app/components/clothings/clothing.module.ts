import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { ClothingComponent } from './clothing.component';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from "primeng/inputtext";
import { DialogModule } from "primeng/dialog";
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ClothingService } from './clothing.service';
import { FileUploadModule } from 'primeng/fileupload';
import { ListboxModule } from 'primeng/listbox';
import { ClothingFormComponent } from './form/clothingform.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from "primeng/toast";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ClothingDetailComponent } from './detail/clothingdetail.component';


const CLOTHING_ROUTES: Routes = [
  { path: 'clothings', children: [
    { path: '', component: ClothingComponent },
    { path: 'newClothing', component: ClothingFormComponent },
    { path: ':id', component: ClothingDetailComponent}
  ]}
];

@NgModule({
  declarations: [ClothingComponent, ClothingFormComponent, ClothingDetailComponent],
  imports: [
    CommonModule, ReactiveFormsModule, DataViewModule, 
    InputTextModule, SplitButtonModule, DialogModule, 
    DropdownModule, PanelModule, InputMaskModule, 
    InputSwitchModule, FileUploadModule, ButtonModule,
    ListboxModule, ToastModule, ConfirmDialogModule,
    InputTextareaModule,
    RouterModule.forChild(CLOTHING_ROUTES)
  ],
  exports: [RouterModule],
  providers: [ClothingService, ConfirmationService, MessageService]
})
export class ClothingModule {}