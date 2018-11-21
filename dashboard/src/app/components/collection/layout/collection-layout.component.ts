import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: './collection-layout.component.html',
  selector: 'ad-collection-layout'
})
export class CollectionLayoutComponent implements OnInit {

  public collectionTitle :string

  constructor() { }

  ngOnInit(): void {
    this.collectionTitle = "Gestione Collezioni";
  }

}