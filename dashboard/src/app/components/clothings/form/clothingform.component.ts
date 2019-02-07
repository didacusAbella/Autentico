import { Component, OnInit} from "@angular/core";
import { ClothingService } from '../clothing.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Clothing } from '../clothing';
import { BrandService } from '../../brands/brand.service';
import { SelectItem } from 'primeng/api';
import { CollectionService } from '../../collections/collection.service';
import { Router } from '@angular/router';


@Component({
  selector: 'autentico-clothingform',
  templateUrl: './clothingform.component.html'
})
export class ClothingFormComponent implements OnInit {
  
  public clothingForm: FormGroup;
  public brandList: SelectItem[];
  public collectionList: SelectItem[];
  
  constructor(private clothingService: ClothingService, private brandService: BrandService, 
    private router: Router, private collectionService: CollectionService, private formBuilder: FormBuilder) {
    this.brandList = new Array();
    this.collectionList = new Array();
  }

  ngOnInit(): void {
    this.clothingForm = this.formBuilder.group({
      'id': [null, Validators.required],
      'name': [null, Validators.required],
      'description': [''],
      'defect': [false, Validators.required],
      'brand': ['', Validators.required],
      'collection': [null, Validators.required]
    });
    this.brandService.readAll().subscribe(brands => brands.map(brand => this.brandList.push({ label: brand.name, value: brand.id })) );
    this.collectionService.readAll().subscribe(collections => collections.map(collection => this.collectionList.push({ label: `${collection.season}-(${collection.year})`, value: collection.id })))
  }

  public addImage(event) {
    let reader = new FileReader();
    reader.readAsDataURL(event.files[0]);
    reader.onloadend = () => {
      let base64File = reader.result;
      this.clothingForm.value.img = base64File;
    }
  }

  public createClothing() {
    let clothing = new Clothing(this.clothingForm.value);
    console.log(clothing);
    this.clothingService.create(clothing).subscribe(row => {
      if(row.length != 0) {
        this.router.navigate(['/clothings']);
      }
    });
  }
} 