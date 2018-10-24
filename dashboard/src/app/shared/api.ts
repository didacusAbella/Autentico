import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class Api<T> {

  protected protocol :string;
  protected apiHost :string;
  protected apiPort :number;
  protected fullApi :string;
  private readonly resource;

  constructor(private endpoint: HttpClient, resource :string){
    this.protocol = 'http';
    this.apiHost = 'localhost';
    this.apiPort = 3000;
    this.resource = resource;
    this.fullApi = `${this.protocol}://${this.apiHost}:${this.apiPort}/${this.resource}`;
  }

  public create(item :T) :Observable<T>{
    return this.endpoint.post<T>(this.fullApi, item);
  }

  public readAll() :Observable<T[]> {
    return this.endpoint.get<T[]>(this.fullApi);
  }

  public read(id :number) :Observable<T> {
    return this.endpoint.get<T>(`${this.fullApi}/${id}`);
  }

  public update(item :T, id :number) :Observable<T> {
    return this.endpoint.put<T>(`${this.fullApi}/${id}`, item);
  }

  public delete(id :number) :Observable<T> {
    return this.endpoint.delete<T>(`${this.fullApi}/${id}`);
  } 

}