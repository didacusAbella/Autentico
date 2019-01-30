import { Component, OnInit} from "@angular/core";
import { ClothingService } from '../clothing.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Clothing } from '../clothing';

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
      defect: new FormControl(false),
      img: new FormControl()
    });
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
    this.clothingService.create(clothing).subscribe(row => console.log("Created"));
  }
} 