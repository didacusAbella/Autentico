import { Component, OnInit } from "@angular/core";
import { ColorsService } from "../color.service";
import { ActivatedRoute } from '@angular/router';
import { Color } from "../color";

@Component({
  templateUrl: './color-detail.component.html',
  styleUrls: ['./color-detail.component.scss']
})
export class ColorDetailComponent implements OnInit {

  public colorModel :Color;

  constructor(private endpoint :ColorsService, private actualRoute :ActivatedRoute){}

  ngOnInit(): void {
    this.actualRoute.params.subscribe(routeData => {
      let id = routeData['id'];
      this.endpoint.read(id).subscribe(data => this.colorModel = data);
    });
  }

}