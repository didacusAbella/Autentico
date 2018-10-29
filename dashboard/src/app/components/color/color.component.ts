import { Component, Input } from '@angular/core';
import { Color } from './color';
import { ColorsService } from './color.service';

@Component({
  selector: 'ad-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  
  @Input()
  public color :Color;

  constructor(private colorService :ColorsService) { }

}
