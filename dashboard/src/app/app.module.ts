/*Core Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*Vendor and Custom Modules */
//import { NgxPaginationModule } from "ngx-pagination";
import { AppRoutingModule } from "./app.router.module";
//import { ClothingsPageModule } from './pages/clothings-page/clothings-page.module';

/* Components Loading */
import { AppComponent } from './app.component';
import { TitlebarComponent } from './components/titlebar/titlebar.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
