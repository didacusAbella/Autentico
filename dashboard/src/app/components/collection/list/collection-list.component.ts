import { Component, OnInit } from "@angular/core";
import { CollectionService } from "../collection.service";
import { Collection } from "../collection";
import { ResourceComponent } from "../../../shared/components/resource.component";

@Component({
  templateUrl: './collection-list.component.html',
  selector: 'ad-collection-list'
})
export class CollectionListComponent extends ResourceComponent<Collection,CollectionService> implements OnInit {


  constructor(protected endpoint: CollectionService){
    super(endpoint);
  }

  ngOnInit(): void {
    this.endpoint.readAll().subscribe(datas => this.setResources(datas));
  }
  
}