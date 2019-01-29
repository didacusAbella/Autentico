import { Component, OnInit } from "@angular/core";
import { Collection } from '../collection';
import { CollectionService } from '../collection.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'autentico-collectiondetails',
  templateUrl: './collectiondetail.component.html'
})
export class CollectionDetailComponent implements OnInit {

  public collectionDetail: Collection;
  public collectionForm: FormGroup;
  public seasons: any[];

  constructor(private service: CollectionService, private route: ActivatedRoute){
    this.seasons = [
      { name: "Autunno/Inverno" },
      { name: "Primavera/Estate" }
    ];
  }

  ngOnInit(): void {
    this.route.params.subscribe(routeData => {
      let collectionId = parseInt(routeData['id']);
      this.service.read(collectionId).subscribe(data => {
        this.collectionDetail = data;
        this.collectionForm = new FormGroup({
          id: new FormControl(this.collectionDetail.id),
          season: new FormControl(this.selectedSeason(this.collectionDetail.season)),
          year: new FormControl(this.collectionDetail.year)
        });
      })
    });
  }

  private selectedSeason(seasonName): any {
    let index = (seasonName === "Autunno/Inverno") ? 0 : 1;
    return this.seasons[index];
  }

  public updateCollection(){
    if(this.collectionForm.valid) {
      let collection = {} as Collection;
      collection.id = this.collectionForm.value.id;
      collection.season = this.collectionForm.value.season.name;
      collection.year = this.collectionForm.value.year;
      this.service.update(collection, collection.id).subscribe(dt => console.log("Updated"));
    }
  }
}