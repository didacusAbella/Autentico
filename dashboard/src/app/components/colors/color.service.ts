import { CrudService } from "../../shared/crud";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from './color';

@Injectable()
export class ColorService extends CrudService<Color> {
  constructor(protected client: HttpClient) {
    super(client, "colors")
  }
}