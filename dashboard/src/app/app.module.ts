/*Core Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*Vendor and Custom Modules */
import { NgxPaginationModule } from "ngx-pagination";
/* Components Loading */
import { AppComponent } from './app.component';
import { TitlebarComponent } from './components/titlebar/titlebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { ClothingsComponent } from './components/clothings/clothings.component';
import { ColorsComponent } from './components/colors/colors.component';


const appRoutes: Routes = [
  { path: 'clothings', component: ClothingsComponent },
  { path: 'colors', component: ColorsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    MenuComponent,
    ClothingsComponent,
    ColorsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
