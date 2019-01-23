/* Angular Core modules*/
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { CollectionComponent } from './collection.component';
import { CollectionService } from './collection.service';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ButtonModule } from "primeng/button";

const COLLECTION_ROUTES: Routes = [
  {path: 'collections', children: [
    { path: '', component: CollectionComponent }
  ]}
];

@NgModule({
  declarations: [CollectionComponent],
  imports: [CommonModule, VirtualScrollerModule, ButtonModule,
    RouterModule.forChild(COLLECTION_ROUTES)],
  exports: [RouterModule],
  providers: [CollectionService]
})
export class CollectionModule { }