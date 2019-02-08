/*Angular Core modules*/
import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
/*Primeng modules*/
import { MenubarModule } from "primeng/menubar";
/*App modules */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Custom components */
import {TitlebarComponent} from "./components/titlebar/titlebar.component";
import { StatsService } from './components/stats/stats.service';


@NgModule({
  declarations: [ AppComponent, TitlebarComponent ],
  imports: [ BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule, MenubarModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
