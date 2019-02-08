import { Component, OnInit } from "@angular/core";
import { StatsService } from './stats.service';
import { Stats } from './stats';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'autentico-stats',
  templateUrl: './stats.component.html',
  host: { 'class': 'p-col-10' },
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  public statistics: any;
  constructor(private statsService: StatsService){
    this.statistics = {};
  }

  ngOnInit(): void {
    let actualKey: string;
    this.statsService.extractStats().subscribe(lines => {
      lines.forEach( line => {
        if(line.startsWith("/")) {
          actualKey = "Generale";
          this.statistics[actualKey] = [];
        } else if (line.startsWith("*")){
          actualKey = line.replace(/\*/g, "");
          this.statistics[actualKey] = [];
        } else if (line.length !== 0 && !line.includes("Percentage")){
          let stats: Stats = this.parseLine(line);
          if(stats) {
            this.statistics[actualKey].push(stats);
          }
        }
      });
    });
    console.log(this.statistics);
  }

  private parseLine(line: string): Stats {
      let descriptionIndex = line.indexOf(".");
      let description = line.substring(0, descriptionIndex);
      let numericValue = line.substring(descriptionIndex).replace(/\s/, "");
      let percentage = numericValue.substring(numericValue.indexOf(" "), numericValue.lastIndexOf(" "));
      let updatedPercentage = numericValue.replace(/^(\.+)/g, "");
      return new Stats(description, updatedPercentage.substring(0, updatedPercentage.indexOf(" ")), percentage.trim()); 
  }
}