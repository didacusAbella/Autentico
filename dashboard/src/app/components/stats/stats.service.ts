import { Injectable } from "@angular/core";
import { Stats } from './stats';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StatsService {

  constructor(private client: HttpClient) {}

  public extractStats(): Observable<Stats> {
    return this.client.get<Stats>('http://localhost:3000/statistics');
  }
}