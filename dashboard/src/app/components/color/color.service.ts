import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Color } from './color';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorsService extends ApiService<Color> {

  constructor(endpoint: HttpClient) {
    super(endpoint, 'colors');
   }


}
