import { Component, Input } from '@angular/core';
import { Clothing } from "../clothing";
import { ResourceComponent } from 'src/app/shared/components/resource.component';
import { ClothingService } from '../clothing.service';

@Component({
  selector: 'ad-clothing-overview',
  templateUrl: './clothing-overview.component.html',
  styleUrls: ['./clothing-overview.component.scss']
})
export class ClothingOverviewComponent extends ResourceComponent<Clothing, ClothingService> {

  @Input()
  public clothing :Clothing;

  constructor(protected endpoint :ClothingService) {
    super(endpoint);
  }

}