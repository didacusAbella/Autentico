import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit {

  private readonly title :string;

  constructor() {
    this.title = '@utentico Dashboard';
   }

   public getTitle() :string { 
     return this.title;
   }

  ngOnInit() {

  }

}
