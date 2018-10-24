import { Component, OnInit } from '@angular/core';
import { Color } from './color';
import { ColorsService } from './colors.service';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'dash-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit{
  
  public pgConfig :PaginationInstance;
  private colors :Color[];

  constructor(private colorService :ColorsService) { 
    this.pgConfig = { itemsPerPage: 5, currentPage: 1, id: 'pagination-colors'};
  }

  ngOnInit() {
    this.colorService.readAll().subscribe(datas => {
      this.colors = datas;
    });
  }

  public getColors() :Color[] {
    return this.colors;
  }

}
