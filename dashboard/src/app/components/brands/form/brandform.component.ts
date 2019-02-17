import { Component, OnInit} from "@angular/core";
import { Brand } from '../brand';
import { BrandService } from '../brand.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'autentico-brandform',
  templateUrl: './brandform.component.html'
})
export class BrandFormComponent implements OnInit {

  public createdBrand: Brand;
  public createBrandForm: FormGroup;

  constructor(private brandService: BrandService, private router: Router) {}

  ngOnInit(): void {
    this.createBrandForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  public createBrand() {
    if(this.createBrandForm.valid) {
      let newBrand = new Brand(this.createBrandForm.value);
      this.brandService.create(newBrand).subscribe(br => {
        if(br.length !== 0) {
          this.router.navigate(['/brands']);
        }
      });
    }
  }

}
