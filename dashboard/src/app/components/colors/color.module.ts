import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from "./color.component";
import { ColorService } from './color.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { CardModule } from 'primeng/card';
import { ColorDetailComponent } from './detail/colordetail.component';
import { from } from 'rxjs';




const COLOR_ROUTES: Routes = [
  { path: 'colors', children: [
    { path: '', component: ColorComponent},
    { path: ':id', component: ColorDetailComponent }
  ] }
]

@NgModule({
  declarations: [ColorComponent, ColorDetailComponent],
  imports: [ CommonModule, TableModule, ButtonModule,
    CardModule, ColorPickerModule, ReactiveFormsModule, RouterModule.forChild(COLOR_ROUTES) ],
  providers: [ColorService],
  exports: [RouterModule]
})
export class ColorModule { }