import { Component, OnInit } from '@angular/core';
import { Clothing } from "./clothing";
import { ClothingService } from './clothing.service';

@Component({
  selector: 'dash-clothings',
  templateUrl: './clothings.component.html',
  styleUrls: ['./clothings.component.css']
})
export class ClothingsComponent implements OnInit {

  private clothings :Clothing[];
  private pendingClothing :Clothing;

  constructor(private clothingService :ClothingService) {
  }

  ngOnInit() {
    this.clothingService.readAll().subscribe(datas => {
      this.clothings = datas;
    });
    this.pendingClothing = new Clothing({id: 'No Id', name: 'No Name', collectionFk: -1});
  }

  public getClothings() :Clothing[] {
    return this.clothings;
  }

  public actualClothing() :Clothing {
    return this.pendingClothing;
  }

  public changePendingClothing(index :number) :void {
    this.pendingClothing = this.clothings[index] || this.clothings[0];
  }

}
