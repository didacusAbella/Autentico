import { Component, OnInit } from "@angular/core";
import { Collection } from '../collection';
import { CollectionService } from '../collection.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'autentico-collectiondetails',
  templateUrl: './collectiondetail.component.html'
})
export class CollectionDetailComponent implements OnInit {

  public collectionForm: FormGroup;
  public seasons: any[];

  constructor(private service: CollectionService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this.seasons = [
      { name: "Autunno/Inverno" },
      { name: "Primavera/Estate" }
    ];
    this.collectionForm = this.formBuilder.group({
      'id': [{ value: null, disabled: true }, Validators.required],
      'season': [null, Validators.required],
      'year': [null, Validators.required]
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(routeData => {
      let collectionId = parseInt(routeData['id']);
      this.service.read(collectionId).subscribe(data => {
        this.collectionForm.get('id').setValue(data.id);
        this.collectionForm.get('season').setValue(this.selectedSeason(data.season));
        this.collectionForm.get('year').setValue(data.year);
      });
    })
  }

  private selectedSeason(season) {
    let index = (season === "Autunno/Inverno") ? 0 : 1;
    return this.seasons[index]; 
  }

  public updateCollection() {
    if (this.collectionForm.valid) {
      let collection = new Collection(this.collectionForm.value);
      collection.season = this.collectionForm.value.season.name;
      this.service.update(collection, collection.id).subscribe(record => {
        if (record > 0) {
          this.router.navigate(['/collections']);
        }
      });
    }
  }
}