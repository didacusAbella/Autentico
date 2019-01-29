import { Component, OnInit } from "@angular/core";
import { Color } from './color';
import { ColorService } from './color.service';

@Component({
  selector: 'autentico-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  public colors: Color[];
  
  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.colorService.readAll().subscribe(data => {
      this.colors = data;
    });
  }

  public deleteColor(id: number) {
    this.colorService.delete(id).subscribe(row => console.log("Color Deleted"));
  }

}