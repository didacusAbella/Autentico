import { Component, OnInit} from "@angular/core";
import { Collection } from '../collection';
import { CollectionService } from '../collection.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'autentico-collectionform',
  templateUrl: './collectionform.component.html'
})
export class CollectionFormComponent implements OnInit {

  public createdCollection: Collection;
  public collectionForm: FormGroup;
  public seasons: any[];

  constructor(private service: CollectionService){
    this.seasons = [
      { name: "Autunno/Inverno" },
      { name: "Primavera/Estate" }
    ];
  }

  ngOnInit(): void {
    this.collectionForm = new FormGroup({
      season: new FormControl(''),
      year: new FormControl('')
    });
  }

}