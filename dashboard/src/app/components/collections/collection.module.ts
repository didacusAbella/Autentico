/* Angular Core modules*/
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { CollectionComponent } from './collection.component';
import { CollectionService } from './collection.service';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ButtonModule } from "primeng/button";
import { InputMaskModule } from 'primeng/inputmask';
import { SpinnerModule } from 'primeng/spinner';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from "primeng/fieldset";
import { CollectionDetailComponent } from './detail/collectiondetail.component';
import { CollectionFormComponent } from './form/collectionform.component';
import { ConfirmationService, MessageService } from 'primeng/api';

const COLLECTION_ROUTES: Routes = [
  {
    path: 'collections', children: 
    [
      { path: '', component: CollectionComponent },
      { path: 'newCollection', component: CollectionFormComponent},
      { path: ':id', component: CollectionDetailComponent }
    ]
  }
];

@NgModule({
  declarations: [CollectionComponent, CollectionDetailComponent, CollectionFormComponent],
  imports: [
    CommonModule, VirtualScrollerModule, ButtonModule,
    InputMaskModule, SpinnerModule, SelectButtonModule, 
    ReactiveFormsModule, FieldsetModule, PanelModule, 
    RouterModule.forChild(COLLECTION_ROUTES)
  ],
  exports: [RouterModule],
  providers: [CollectionService, ConfirmationService, MessageService]
})
export class CollectionModule { }