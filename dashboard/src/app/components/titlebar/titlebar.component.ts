import { Component } from '@angular/core';

@Component({
  selector: 'ad-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent {

  readonly title :string;

  constructor() { 
    this.title = '@utentico Dashboard';
  }
  
}
