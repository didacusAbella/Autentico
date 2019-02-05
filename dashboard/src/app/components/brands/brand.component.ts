import { Component, OnInit } from "@angular/core";
import { MenuItem, ConfirmationService, MessageService} from 'primeng/api';
import { Observable, BehaviorSubject } from 'rxjs';
import { Brand } from './brand';
import { BrandService } from './brand.service';
import { filter } from "rxjs/operators";

@Component({
  selector: 'autentico-brands',
  styleUrls: ['./brand.component.scss'],
  templateUrl: './brand.component.html'
})
export class BrandsComponent implements OnInit {

  public brands$: Observable<Brand[]>;
  private _brands$: BehaviorSubject<Brand[]>;

  constructor (private service: BrandService, private confirmService: ConfirmationService, private messageService: MessageService ) {
      this._brands$ = new BehaviorSubject<Brand[]>([]);
      this.brands$ = this._brands$.asObservable();
    }

  public ngOnInit(): void {
    this.service.readAll().subscribe( brands => this._brands$.next(brands));
  }

  public deleteBrand(id: number): any {
    this.confirmService.confirm({
      header: "Conferma Eliminazione",
      message: `Sei Sicuro di voler eliminare il brand ${id}`,
      reject: () => this.onReject(),
      accept: () => this.onAccept(id)
    });
  }

  public brandActions(id: number): MenuItem[] {
    let actions: MenuItem[] = new Array();
    actions.push({ label: "Modifica", icon: "pi pi-pencil", routerLink: `${id}`});
    return actions;
  }

  public onReject() {
    this.messageService.add({ severity: "error", summary: "Errore", detail: "Eliminazione Brand non avvenuta"});
  }

  public onAccept(id: number) {
    this.service.delete(id).subscribe(record => {
      if (record > 0) {
        this.brands$.subscribe(brands => {
          brands.splice(brands.indexOf(brands.find(brand => brand.id === id)), 1);
          this.messageService.add({severity: "success", summary: "Eliminazione", detail: "Brand eliminato con Successo!"});
        })
      }
    })
  }
}