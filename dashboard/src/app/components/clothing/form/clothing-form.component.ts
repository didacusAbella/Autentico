import { Component, OnInit } from "@angular/core";
import { Clothing } from "../clothing";
import { ClothingService } from "../clothing.service";

@Component({
  templateUrl: './clothing-form.component.html',
  selector: 'ad-clothing-form'
})
export class ClothingFormComponent implements OnInit {

  public clothingModel :Clothing;

  constructor(private endpoint :ClothingService){}

  ngOnInit(): void {
    this.clothingModel = new Clothing({});
  }

}