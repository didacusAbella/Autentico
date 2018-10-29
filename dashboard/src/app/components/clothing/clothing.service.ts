import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Clothing } from './clothing';

@Injectable({
  providedIn: 'root'
})
export class ClothingService extends ApiService<Clothing> {

  constructor(endpoint: HttpClient) {
    super(endpoint, 'clothings');
   }

}
