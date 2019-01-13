import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoModule } from "./components/info/info.module";

const routes: Routes = [];

@NgModule({
  imports: [InfoModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
