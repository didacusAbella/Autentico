import { Component } from '@angular/core';

@Component({
  selector: 'ad-clothing-layout',
  templateUrl: './clothing-layout.component.html'
})
export class ClothingLayoutComponent {
  public readonly headingTitle :string;

  constructor() {
    this.headingTitle = 'Gestione Vestiti';
  }
}