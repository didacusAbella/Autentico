import { CrudService } from 'src/app/shared/crud';
import { Clothing } from "./clothing";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClothingService extends CrudService<Clothing> {
  
  constructor(protected client: HttpClient) {
    super(client, "clothings");
  }
  
}