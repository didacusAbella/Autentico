import { Component, OnInit} from "@angular/core";
import { ClothingService } from '../clothing.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'autentico-clothingform',
  templateUrl: './clothingform.component.html'
})
export class ClothingFormComponent implements OnInit {
  
  public clothingForm: FormGroup;
  
  constructor(private clothingService: ClothingService) {}

  ngOnInit(): void {
    this.clothingForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      defect: new FormControl(false)
    });
  }
} 