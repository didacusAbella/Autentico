import { Component, OnInit} from "@angular/core";
import { Collection } from '../collection';
import { CollectionService } from '../collection.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'autentico-collectionform',
  templateUrl: './collectionform.component.html'
})
export class CollectionFormComponent implements OnInit {

  public createdCollection: Collection;
  public collectionForm: FormGroup;
  public seasons: any[];

  constructor(private service: CollectionService, private builder: FormBuilder, private router: Router){
    this.seasons = [
      { name: "Autunno/Inverno" },
      { name: "Primavera/Estate" }
    ];
  }

  ngOnInit(): void {
    this.collectionForm = this.builder.group({
      'season': ['', Validators.required],
      'year': ['', Validators.required]
    });
  }

  public createCollection() {
    if(this.collectionForm.valid){
      let newCollection = new Collection(this.collectionForm.value);
      newCollection.season = this.collectionForm.value.season.name;
      this.service.create(newCollection).subscribe(dt => {
        if(dt.length != 0) {
          this.router.navigate(["/collections"]);
        }
      });
    }
  }


}