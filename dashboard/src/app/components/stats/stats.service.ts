import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StatsService {

  constructor(private client: HttpClient) {}

  public extractStats(): Observable<string[]> {
    return this.client.get<string[]>('http://localhost:3000/statistics');
  }
}