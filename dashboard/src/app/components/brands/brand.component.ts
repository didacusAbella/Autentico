import { Component, OnInit } from "@angular/core";
import { Brand } from './brand';
import { BrandService } from './brand.service';
import { MenuItem, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'autentico-brands',
  styleUrls: ['./brand.component.scss'],
  templateUrl: './brand.component.html'
})
export class BrandsComponent implements OnInit {

  public brands: Brand[];

  constructor(private service: BrandService, private confirmService: ConfirmationService){}

  public ngOnInit(): void {
    this.service.readAll().subscribe((data: Brand[]) => {
      this.brands = data;
    })
  }

  public deleteBrand(id: number): any{
    this.confirmService.confirm({
      header: "Conferma Eliminazione",
      message: "Sei sicuro di voler eliminare il brand"+id,
      accept: () => console.log("Brand eliminato"),
      reject: () => console.log("Eliminazione annullata")
    });
  }

  public brandActions(id: number): MenuItem[] {
    let actions: MenuItem[] = new Array();
    actions.push({ label: "Modifica", icon: "pi pi-pencil", routerLink: `${id}`});
    return actions;
  }
}