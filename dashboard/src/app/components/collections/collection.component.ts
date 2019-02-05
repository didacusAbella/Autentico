import { Component, OnInit } from "@angular/core";
import { Collection } from './collection';
import { CollectionService } from './collection.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'autentico-collections',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  public collections$: Observable<Collection[]>;
  private _collections$: BehaviorSubject<Collection[]>;

  constructor(private service: CollectionService, private confirmService: ConfirmationService, private messageService: MessageService){
    this._collections$ = new BehaviorSubject<Collection[]>([]);
    this.collections$ = this._collections$.asObservable();
  }

  ngOnInit(): void {
    this.service.readAll().subscribe(data => this._collections$.next(data));
  }

  public deleteCollection(id: number) {
    this.confirmService.confirm({
      message: `Vuoi Eliminare la collezione ${id}?`,
      header: 'Conferma Eliminazione',
      accept: () => this.onAccept(id),
      reject: () => this.onReject()
    })
  }

  public onAccept(id: number) {
    this.service.delete(id).subscribe(record => {
      if (record > 0) {
        this.collections$.subscribe(collections => {
          collections.splice(collections.indexOf(collections.find(cl => cl.id === id)), 1);
          this.messageService.add({ severity: "success", summary: "Eliminazione effettuata", detail: "Collezione eliminata con successo"});
        });
      }
    });
  }

  public onReject() {
    this.messageService.add({ severity: "error", summary: "Annullatamento operazione", detail: "Eliminazione Collezione annullata"});
  }

}