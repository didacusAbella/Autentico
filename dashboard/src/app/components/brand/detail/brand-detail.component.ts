import { Component, OnInit } from "@angular/core";
import { BrandService } from "../brand.service";
import { Brand } from "../brand";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'ad-brand-overview',
  templateUrl: './brand-detail.component.html'
})
export class BrandDetailComponent implements OnInit {
  
  brandModel: Brand;

  constructor(private endpoint: BrandService, private brandRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.brandRoute.params.subscribe(brandId => {
      let id = brandId['id'];
      this.endpoint.read(id).subscribe(data => this.brandModel = data);
    });
  }

}