import { Component } from '@angular/core';

@Component({
  selector: 'ad-color-layout',
  templateUrl: './color-layout.component.html'
})
export class ColorLayoutComponent {

  public readonly title :string;

  constructor(){
    this.title = 'Gestione Colori';
  }
}