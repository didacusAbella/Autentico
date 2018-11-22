import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

import { CollectionListComponent } from "./list/collection-list.component";
import { CollectionLayoutComponent } from "./layout/collection-layout.component";
import { CollectionDetailComponent } from "./detail/collection-detail.component";

const COLLECTION_ROUTES :Routes = [
  {
    path: 'collections', component: CollectionLayoutComponent, children: [
      { path: '', component: CollectionListComponent },
      { path: ':id', component: CollectionDetailComponent }
    ]
  }
]

@NgModule({
  declarations: [
    CollectionLayoutComponent,
    CollectionListComponent,
    CollectionDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(COLLECTION_ROUTES)
  ],
  exports: [ RouterModule ]
})
export class CollectionModule {}