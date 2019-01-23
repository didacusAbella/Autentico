import { Component, OnInit} from "@angular/core";
import { Brand } from '../brand';
import { BrandService } from '../brand.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'autentico-brandform',
  templateUrl: './brandform.component.html'
})
export class BrandFormComponent implements OnInit {

  public createdBrand: Brand;
  public createBrandForm: FormGroup;

  ngOnInit(): void {
    this.createBrandForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  public createBrand() {
    if(this.createBrandForm.valid){
      console.log("Brand Creato con successo");
    }
  }

}
