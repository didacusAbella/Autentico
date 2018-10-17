/*Core Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
/* Vendor and Custom Modules */
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* Components Loading */
import { AppComponent } from './app.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { TablesMenuComponent } from './tables-menu/tables-menu.component';


const appRoutes: Routes = [
  { path: '', component: AppComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    TablesMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
