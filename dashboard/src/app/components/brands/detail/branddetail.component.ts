import { Component, OnInit } from "@angular/core";
import { Brand } from '../brand';
import { BrandService } from '../brand.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'autentico-branddetail',
  templateUrl: './branddetail.component.html',
})
export class BrandDetailComponent implements OnInit {

  public editBrandForm: FormGroup;
  
  constructor(private brandService: BrandService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this.editBrandForm = this.formBuilder.group({
      'id': [{ value: null, disabled: true }, Validators.required],
      'name': [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(routes => {
      let brandId = parseInt(routes['id']);
      this.brandService.read(brandId).subscribe(foundBrand => {
        this.editBrandForm.get("id").setValue(foundBrand.id);
        this.editBrandForm.get("name").setValue(foundBrand.name);
      });
    });
  }

  public editBrand(): void {
    if(this.editBrandForm.valid){
      let brand = new Brand(this.editBrandForm.value);
      this.brandService.update(brand, brand.id).subscribe(record => {
        if (record > 0) {
          this.router.navigate(['/brands']);
        }
      });
    }
  }
}