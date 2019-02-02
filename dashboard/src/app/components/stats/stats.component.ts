import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { Stats } from './stats';
import { StatsService } from './stats.service';

@Component({
  selector: 'autentico-stats',
  templateUrl: './stats.component.html',
  host: { 'class': 'p-col-10' }
})
export class StatsComponent implements OnInit {

  public stats$: Observable<Stats>

  constructor(private statsService: StatsService){}

  ngOnInit(): void {
    this.stats$ = this.statsService.extractStats();
  }

}