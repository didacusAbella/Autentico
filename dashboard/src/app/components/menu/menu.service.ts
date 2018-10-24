import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http :Http) { }

  /**
   * getTables
   */
  public loadTables() {
    return ['clothings', 'brand', 'colors'];
  }
}
