import { Component, OnInit } from '@angular/core';
import { MenuService } from "./menu.service";

@Component({
  selector: 'ad-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  tables :Array<string>;
  readonly menuName :string;

  constructor(private menuService :MenuService) { 
    this.menuName = 'Gestione Risorse';
  }

  ngOnInit() {
    this.tables =this.menuService.loadTables();
  }
  
}
