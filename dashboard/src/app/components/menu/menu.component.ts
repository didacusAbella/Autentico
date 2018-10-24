import { Component, OnInit } from '@angular/core';
import { MenuService } from "./menu.service";

@Component({
  selector: 'dash-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private tables :Array<string>;
  private readonly menuName :string;

  constructor(private menuService :MenuService) { 
    this.menuName = 'Gestione Risorse';
  }

  ngOnInit() {
    this.tables =this.menuService.loadTables();
  }

  public getTables() :Array<string> {
    return this.tables;
  }

  /**
   * getMenuName
   */
  public getMenuName() :string {
    return this.menuName;
  }

}
