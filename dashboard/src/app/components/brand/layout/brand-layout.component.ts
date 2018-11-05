import { Component } from "@angular/core";

@Component({
  selector: 'ad-brand-layout',
  templateUrl: './brand-layout.component.html'
})
export class BrandLayoutComponent {
  brandTitle: string;

  constructor(){
    this.brandTitle = 'Gestione Brand';
  }

  
}