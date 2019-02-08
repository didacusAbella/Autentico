import { Component, OnInit } from "@angular/core";
import { ClothingService } from '../clothing.service';
import { BrandService } from '../../brands/brand.service';
import { CollectionService } from '../../collections/collection.service';
import { Observable } from 'rxjs';
import { Clothing } from '../clothing';
import { MessageService, SelectItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from '../../brands/brand';
import { Collection } from '../../collections/collection';

@Component({
  selector: 'autentico-clothingdetail',
  templateUrl: './clothingdetail.component.html',
  host: { 'class': 'p-col-8' }
})
export class ClothingDetailComponent implements OnInit {

  public brandList: SelectItem[];
  public collectionList: SelectItem[];
  public clothingForm: FormGroup

  constructor(private clothingService: ClothingService, private brandService: BrandService,
    private collectionService: CollectionService, private messageSerivce: MessageService,
    private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.collectionList = new Array();
    this.brandList = new Array();
  }

  ngOnInit(): void {
    this.brandService.readAll().subscribe(brands => brands.forEach(brand => this.brandList.push({ label: brand.name, value: brand.id })));
    this.collectionService.readAll().subscribe(collections => collections.forEach(collection => this.collectionList.push({ label: `${collection.season}-(${collection.year})`, value: collection.id })));
    this.route.params.subscribe(param => {
      let clothingId = param['id'];
      this.clothingService.read(clothingId).subscribe(received => {
        this.clothingForm = this.formBuilder.group({
          'id': [received.id],
          'name': [received.name, Validators.required],
          'description': [received.description],
          'brand': [received.brand, Validators.required],
          'collection': [received.collection, Validators.required],
          'defect': [received.defect, Validators.required],
          'img': [received.img]
        });
      })
    });
  }

  public editClothing() {
    if (this.clothingForm.valid) {
      let cloth = new Clothing(this.clothingForm.value)
      console.log(cloth);
      this.clothingService.update(new Clothing(this.clothingForm.value), cloth.id).subscribe(record => {
        if (record > 0) {
          this.messageSerivce.add({ severity: "success", summary: "Aggiormento", detail: "Capo aggiornato con successo" });
        }
      })
    }
  }
}