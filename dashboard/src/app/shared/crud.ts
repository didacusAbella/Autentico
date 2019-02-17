import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from "./api";

export class CrudService<T> {
  
  protected fullApi: string;
  private endpoint: string;
  
  constructor(protected client: HttpClient, endpoint: string){
    this.endpoint = endpoint;
    this.fullApi = `${API.protocol}://${API.ip}:${API.port}/${this.endpoint}`;
  }

  readAll(): Observable<T[]>{
    return this.client.get<T[]>(this.fullApi);
  }

  read(id: Number | String): Observable<T>{
    return this.client.get<T>(`${this.fullApi}/${id}`);
  }

  create(resource: T): Observable<Number[]> {
    return this.client.post<Number[]>(this.fullApi, resource);
  }

  update(resource: T, id: Number | String): Observable<Number> {
    return this.client.put<Number>(`${this.fullApi}/${id}`, resource);
  }

  delete(id: Number | String): Observable<Number> {
    return this.client.delete<Number>(`${this.fullApi}/${id}`);
  }





}