import { CrudService } from 'src/app/shared/crud';
import { Brand } from './brand';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BrandService extends CrudService<Brand> {

  constructor(protected client: HttpClient){
    super(client, "brands")
  }
  
}