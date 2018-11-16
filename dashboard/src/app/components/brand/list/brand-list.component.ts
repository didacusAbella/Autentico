import { Component, OnInit } from "@angular/core";
import { ResourceComponent } from "src/app/shared/components/resource.component";
import { BrandService } from "../brand.service";
import { Brand } from "../brand";

@Component({
  selector: 'ad-brand-list',
  templateUrl: './brand-list.component.html'
})
export class BrandListComponent extends ResourceComponent<Brand, BrandService> implements OnInit {

  constructor(protected endpoint: BrandService){
    super(endpoint);
  }

  ngOnInit(): void {
    this.endpoint.readAll().subscribe(datas => this.setResources(datas));
  }

}