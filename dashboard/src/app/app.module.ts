/*Angular core modules*/
import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*Primeng modules*/
import { MenubarModule } from "primeng/menubar";
/*App modules */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Custom components */
import {TitlebarComponent} from "./components/titlebar/titlebar.component";


@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
