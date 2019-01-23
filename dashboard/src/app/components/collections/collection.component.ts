import { Component, OnInit } from "@angular/core";
import { Collection } from './collection';
import { CollectionService } from './collection.service';


@Component({
  selector: 'autentico-collections',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  public collections: Collection[];

  constructor(private service: CollectionService){}

  ngOnInit(): void {
    this.service.readAll().subscribe(data => {
      this.collections = data;
    });
  }


}