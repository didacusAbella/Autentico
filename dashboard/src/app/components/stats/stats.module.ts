import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { StatsComponent } from './stats.component';
import { StatsService } from './stats.service';
import { TabViewModule } from 'primeng/tabview';

const STATS_ROUTES: Routes = [
  {
    path: 'home', component: StatsComponent
  }
];

@NgModule({
  declarations: [StatsComponent],
  imports: [
    CommonModule, TabViewModule,
    RouterModule.forRoot(STATS_ROUTES)
  ],
  exports: [RouterModule],
  providers: [StatsService]
})
export class StatsModule { }