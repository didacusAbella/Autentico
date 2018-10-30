import { Component, OnInit} from '@angular/core';
import { Clothing } from "../clothing";
import { ClothingService } from '../clothing.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'ad-clothing-detail',
  templateUrl: './clothing-detail.component.html' 
})
export class ClothingDetailComponent implements OnInit{

  public cloth :Clothing;
  private id :string;

  constructor(private endpoint :ClothingService, private route :ActivatedRoute){
  }

  /*Inestigate */
  ngOnInit(): void {
   
  }
}