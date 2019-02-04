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
    
  }

}