import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Collection } from './collection';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollectionService extends ApiService<Collection> {

  constructor(endpoint: HttpClient) {
    super(endpoint, 'collections');
  }
}