import { Component, OnInit } from "@angular/core";
import { Brand } from '../brand';
import { BrandService } from '../brand.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'autentico-branddetail',
  templateUrl: './branddetail.component.html',
})
export class BrandDetailComponent implements OnInit {

  public selectedBrand: Brand;
  public editBrandForm: FormGroup;
  
  constructor(private brandService: BrandService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(routes => {
      let brandId = parseInt(routes['id']);
      this.brandService.read(brandId).subscribe(foundBrand => {
        this.selectedBrand = foundBrand;
        this.editBrandForm = new FormGroup({
          name: new FormControl(this.selectedBrand.name, [Validators.required]),
          id: new FormControl(this.selectedBrand.id, [Validators.required])
        })
      });
    });
  }

  public editBrand(): void {
    if(this.editBrandForm.valid){
      console.log("Farò l'aggiornamento");
    }
  }
}