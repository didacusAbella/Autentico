import { Component, OnInit } from "@angular/core";
import { Color } from './color';
import { ColorService } from './color.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'autentico-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  public colors$: Observable<Color[]>;
  private _colors$: BehaviorSubject<Color[]>;
  
  constructor(private colorService: ColorService, private confirmService: ConfirmationService, private messageService: MessageService) {
    this._colors$ = new BehaviorSubject<Color[]>([]);
    this.colors$ = this._colors$.asObservable();
  }

  ngOnInit(): void {
    this.colorService.readAll().subscribe(data => this._colors$.next(data));
  }

  public deleteColor(id: number) {
    this.confirmService.confirm({
      header: "Conferma Eliminazione",
      message: `Vuoi Eliminare il Colore ${id}?`,
      accept: () => this.onAccept(id),
      reject: () => this.onReject()
    });
  }

  public onAccept(id: number) {
    this.colorService.delete(id).subscribe(record => {
      if(record > 0) {
        this.colors$.subscribe(colors => {
          colors.splice(colors.indexOf(colors.find(c => c.id === id)), 1);
          this.messageService.add({ severity: "success", summary: "eliminazione effettuata", detail: "Colore eliminato con successo"});
        });
      }
    });
  }

  public onReject() {
    this.messageService.add({ severity: "error", summary: "Annullamento Operazione", detail: "Eliminazione Annullata"});
  }

}