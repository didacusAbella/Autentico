import { Component, OnInit } from "@angular/core";
import { Clothing } from './clothing';
import { ClothingService } from './clothing.service';
import { SelectItem, MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { Observable, BehaviorSubject } from 'rxjs';
import { API } from 'src/app/shared/api';

@Component({
  selector: 'autentico-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit {

  public clothings$: Observable<Clothing[]>;
  private _clothings$: BehaviorSubject<Clothing[]>;
  public display: boolean;
  public detailedClothing: Clothing;
  public sortOptions: SelectItem[];
  public sortField: string;
  public server:string;

  constructor(private clothingService: ClothingService, private confirmService: ConfirmationService, private messageService: MessageService) {
    this.sortOptions = [
      { label: "ID", value: "id" },
      { label: "Nome", value: "name" }
    ]
    this.server = `${API.protocol}://${API.ip}:${API.port}/clothings/`;
    this._clothings$ = new BehaviorSubject<Clothing[]>([]);
    this.clothings$ = this._clothings$.asObservable();
  }

  ngOnInit(): void {
    this.clothingService.readAll().subscribe(data => this._clothings$.next(data));
  }

  public showDetail(clothingId): void {
    this.display = true;
    this.clothings$.subscribe(cloths => {
      this.detailedClothing = cloths.find(cl => cl.id === clothingId);
    })
  }

  public loadOptions(clothingId): MenuItem[] {
    let options: MenuItem[] = new Array();
    options.push({ label: "Elimina", icon: "pi pi-trash", command: () => this.deleteClothing(clothingId) });
    return options;
  }

  public deleteClothing(id): any {
    this.confirmService.confirm({
      message: `Vuoi Eliminare il capo ${id}?`,
      header: "Conferma Eliminazione",
      accept: () => this.onAccept(id),
      reject: () => this.onReject()
    })
  }

  public onSortChange(event) {
    let value = event.value;
    this.sortField = value;
  }

  public onAccept(id: string) {
    this.clothingService.delete(id).subscribe(record => {
      if(record > 0) {
        this.clothings$.subscribe(clothings => {
          clothings.splice(clothings.indexOf(clothings.find(cl => cl.id === id)), 1);
          this.messageService.add({severity: "success", summary: "Completamento Operazione", detail: "Eliminazione capo con successo"});
        })
      }
    })
  }

  public onReject() {
    this.messageService.add({severity: "error", summary: "Annulla Operazione", detail: "Eliminazione annullata"});
  }
}