import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class CrudService<T> {
  
  protected serverIP: String = "localhost";
  protected serverPort: Number = 3000;
  protected fullApi: string;
  private endpoint: string;
  
  constructor(protected client: HttpClient, endpoint: string){
    this.endpoint = endpoint;
    this.fullApi = `http://${this.serverIP}:${this.serverPort}/${this.endpoint}`;
  }

  readAll(): Observable<T[]>{
    return this.client.get<T[]>(this.fullApi);
  }

  read(id: Number | String): Observable<T>{
    return this.client.get<T>(`${this.fullApi}/${id}`);
  }

  create(resource: T): Observable<T> {
    return this.client.post<T>(this.fullApi, resource);
  }

  update(resource: T, id: Number): Observable<Number> {
    return this.client.put<Number>(`${this.fullApi}/${id}`, resource);
  }

  delete(id: Number): Observable<Number> {
    return this.client.delete<Number>(`${this.fullApi}/${id}`);
  }





}