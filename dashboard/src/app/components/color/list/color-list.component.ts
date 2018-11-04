import { Component, OnInit } from '@angular/core';
import { ResourceComponent } from 'src/app/shared/components/resource.component';
import { Color } from 'src/app/components/color/color';
import { ColorsService } from 'src/app/components/color/color.service';

@Component({
  selector: 'ad-color-list',
  templateUrl: './color-list.component.html'
})
export class ColorListComponent extends ResourceComponent<Color, ColorsService> implements OnInit {

  constructor(protected endpoint :ColorsService) {
    super(endpoint);
   }

  ngOnInit() {
    this.endPoint.readAll().subscribe(datas => {
      this.setResources(datas);
    })
  }

}
