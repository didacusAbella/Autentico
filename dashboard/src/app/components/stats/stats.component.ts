import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { StatsService } from './stats.service';

@Component({
  selector: 'autentico-stats',
  templateUrl: './stats.component.html',
  host: { 'class': 'p-col-10' }
})
export class StatsComponent implements OnInit {

  public stats$: Observable<string[]>

  constructor(private statsService: StatsService){}

  ngOnInit(): void {
    this.stats$ = this.statsService.extractStats();
  }

}