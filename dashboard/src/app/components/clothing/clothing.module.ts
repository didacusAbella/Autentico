/*Add modules */
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from "@angular/router";

/* Add component */
import { ClothingLayoutComponent } from "./layout/clothing-layout.component";
import { ClothingDetailComponent } from "src/app/components/clothing/detail/clothing-detail.component";
import { ClothingListComponent } from "./list/clothing-list.component";
import { ClothingOverviewComponent } from "./overview/clothing-overview.component";

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
    RouterModule
  ]
})
export class ClothingModule {}

