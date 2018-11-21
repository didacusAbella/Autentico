import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from "../collection.service";
import { Collection } from "../collection";

@Component({
  templateUrl: './collection-detail.component.html',
  selector: 'ad-collection-detail'
})
export class CollectionDetailComponent implements OnInit {

  public collection: Collection;

  constructor(private endpoint: CollectionService, private actualRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.actualRoute.params.subscribe(route => {
      let id = route['id'];
      this.endpoint.read(id).subscribe(data => this.collection = data);
    });
  }

  generateYears(): string[]{
    return ['2016/2017', '2017/2018', '2018/2019', '2019/2020'];
  }

}