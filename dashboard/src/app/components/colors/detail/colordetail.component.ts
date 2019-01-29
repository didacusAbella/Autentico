import { Component, OnInit } from "@angular/core";
import { Color } from '../color';
import { ColorService } from '../color.service';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'autentico-colordetails',
  templateUrl: './colordetail.component.html',
})
export class ColorDetailComponent implements OnInit {

  public selectedColor: Color;
  public colorForm: FormGroup;

  constructor(private colorService: ColorService, private colorRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.colorRoute.params.subscribe(route => {
      let colorId = parseInt(route['id']);
      this.colorService.read(colorId).subscribe(color => {
        this.selectedColor = color;
        this.colorForm = new FormGroup({
          hex: new FormControl(this.selectedColor.hex),
          id: new FormControl(this.selectedColor.id)
        });
      });
    });
  }

  public editColor() {
    if(this.colorForm.valid) {
      let color = {} as Color;
      color.id = this.colorForm.value.id;
      color.hex = this.colorForm.value.hex;
      this.colorService.update(color, color.id).subscribe(row => console.log("color Updated"));
    }
  }
}