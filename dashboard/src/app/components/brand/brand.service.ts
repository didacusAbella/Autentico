import { Injectable } from "@angular/core";
import { Brand } from "./brand";
import { ApiService } from "src/app/shared/services/api.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BrandService extends ApiService<Brand> {

  constructor(endpoint: HttpClient){
    super(endpoint, 'brands');
  }

}