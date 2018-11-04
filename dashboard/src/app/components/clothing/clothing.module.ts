/*Add modules */
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes, Router } from "@angular/router";

/* Add component */
import { ClothingLayoutComponent } from "./layout/clothing-layout.component";
import { ClothingDetailComponent } from "src/app/components/clothing/detail/clothing-detail.component";
import { ClothingListComponent } from "./list/clothing-list.component";
import { ClothingOverviewComponent } from "./overview/clothing-overview.component";

const CLOTHING_ROUTES :Routes = [
  { path: 'clothings', component: ClothingLayoutComponent, children: [
    { path: '', component: ClothingListComponent },
    { path: ':full_id', component: ClothingDetailComponent }
  ]}
];

@NgModule({
  declarations: [
    ClothingLayoutComponent,
    ClothingDetailComponent,
    ClothingListComponent,
    ClothingOverviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CLOTHING_ROUTES)
  ],
  exports: [ RouterModule ]
})
export class ClothingModule {}

