import { Component, OnInit} from '@angular/core';
import { Clothing } from "../clothing";
import { ClothingService } from '../clothing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ad-clothing-detail',
  templateUrl: './clothing-detail.component.html',
  styleUrls: ['./clothing-detail.component.css']
})
export class ClothingDetailComponent implements OnInit{

  public cloth :Clothing;

  constructor(private endpoint :ClothingService, private route :ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      let id = param['full_id'];
      this.endpoint.read(id).subscribe(dt => this.cloth = dt);
    });
  }
}