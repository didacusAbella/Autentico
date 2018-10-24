import { Injectable } from '@angular/core';
import { Api } from 'src/app/shared/api';
import { Color } from './color';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorsService extends Api<Color> {

  constructor(endpoint: HttpClient) {
    super(endpoint, 'colors');
   }


}
