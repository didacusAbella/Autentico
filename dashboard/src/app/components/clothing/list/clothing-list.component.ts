import { Component, OnInit } from '@angular/core';
import { ResourceComponent } from 'src/app/shared/components/resource.component';
import { Clothing } from 'src/app/components/clothing/clothing';
import { ClothingService } from 'src/app/components/clothing/clothing.service';

@Component({
  selector: 'ad-clothing-list',
  templateUrl: './clothing-list.component.html'
})
export class ClothingListComponent extends ResourceComponent<Clothing, ClothingService> implements OnInit {

  constructor(protected endpoint :ClothingService) { 
    super(endpoint);
  }

  public ngOnInit() :void {
    this.endPoint.readAll().subscribe(datas => {
      this.setResources(datas);
    });
  }

}