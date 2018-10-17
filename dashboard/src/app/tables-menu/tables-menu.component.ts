import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'tables-menu',
  templateUrl: './tables-menu.component.html',
  styleUrls: ['./tables-menu.component.css']
})
export class TablesMenuComponent implements OnInit {

  private readonly entities;

  constructor() {
    this.entities = [];
  }

  ngOnInit() {
    
  }

}
