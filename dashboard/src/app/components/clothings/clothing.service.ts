import { Injectable } from '@angular/core';
import { Api } from 'src/app/shared/api';
import { HttpClient } from '@angular/common/http';
import { Clothing } from './clothing';

@Injectable({
  providedIn: 'root'
})
export class ClothingService extends Api<Clothing> {

  constructor(endpoint: HttpClient) {
    super(endpoint, 'clothings');
   }

}
