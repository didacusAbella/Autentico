import { Component, OnInit } from "@angular/core";
import { Clothing } from './clothing';
import { ClothingService } from './clothing.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'autentico-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit {

  public clothings: Clothing[];
  public display: boolean;
  public detailedClothing: Clothing;

  constructor(private clothingService: ClothingService) {}

  ngOnInit(): void {
    this.clothingService.readAll().subscribe(data => {
      this.clothings = data;
    });
  }

  public showDetail(clothingId): void {
    this.display = true;
    this.detailedClothing = this.clothings.find(el => el.id === clothingId);
  }

  public loadOptions(clothingId): MenuItem[] {
    let options: MenuItem[] = new Array();
    options.push({ label: "Modifica", icon: "pi pi-pencil", routerLink: `${clothingId}`});
    options.push({ label: "Elimina", icon: "pi pi-trash", command: this.deleteClothing(clothingId)});
    return options;
  }

  public deleteClothing(id): any {
    return 0;
  }
}