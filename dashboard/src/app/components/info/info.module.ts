/* Angular Modules*/
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
/** Primeng Modules */
import { CardModule } from "primeng/card";
import { PanelModule } from "primeng/panel";
import { FieldsetModule } from "primeng/fieldset";
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';
/** Autentico Components */
import { InfoComponent } from './info.component';

const INFO_ROUTES :Routes = [
  { path: "info", component: InfoComponent}
]

@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule,
    CardModule, PanelModule, FieldsetModule, 
    InputTextModule, InputTextareaModule, ChipsModule, 
    ButtonModule, RouterModule.forChild(INFO_ROUTES)],
  exports: [RouterModule]
})
export class InfoModule {}