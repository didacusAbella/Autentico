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

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.createBrandForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  public createBrand() {
    if(this.createBrandForm.valid) {
      let newBrand = {} as Brand;
      newBrand.name = this.createBrandForm.value.name;
      this.brandService.create(newBrand).subscribe(br => {
        console.log("Crearted"+br);
      });
    }
  }

}
