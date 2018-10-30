import { Component, Input } from '@angular/core';
import { Color } from '../color';
import { ColorsService } from '../color.service';

@Component({
  selector: 'ad-color-overview',
  templateUrl: './color-overview.component.html'
})
export class ColorOverviewComponent {
  
  @Input()
  public color :Color;

  constructor(private colorService :ColorsService) { }

}
