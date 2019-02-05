import { Component, OnInit } from "@angular/core";
import { Color } from '../color';
import { ColorService } from '../color.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'autentico-colordetails',
  templateUrl: './colordetail.component.html',
})
export class ColorDetailComponent implements OnInit {

  public colorForm: FormGroup;

  constructor(private colorService: ColorService, private colorRoute: ActivatedRoute, 
    private router: Router, private formBuilder: FormBuilder) {
      this.colorForm = this.formBuilder.group({
        'id': [{ value: null, disabled: true }, Validators.required],
        'hex': [null, Validators.required]
      });
    }

  ngOnInit(): void {
    this.colorRoute.params.subscribe(route => {
      let colorId = parseInt(route['id']);
      this.colorService.read(colorId).subscribe(color => {
        this.colorForm.get("id").setValue(color.id);
        this.colorForm.get("hex").setValue(color.hex);
      });
    });
  }

  public editColor() {
    if(this.colorForm.valid) {
      let color = new Color(this.colorForm.value);
      this.colorService.update(color, color.id).subscribe(record => {
        if (record > 0) {
          this.router.navigate(['/colors']);
        }
      });
    }
  }
}