import { CrudService } from 'src/app/shared/crud';
import { Collection } from "./collection";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CollectionService extends CrudService<Collection> {

  constructor(protected client: HttpClient) {
    super(client, "collections")
  }

  public getYears(): Observable<any[]> {
    return this.client.get<any[]>(`${this.fullApi}/years`);
  }
}