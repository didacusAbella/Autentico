import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { StatsService } from './stats.service';

@Component({
  selector: 'autentico-stats',
  templateUrl: './stats.component.html',
  host: { 'class': 'p-col-10' }
})
export class StatsComponent implements OnInit {

  public stats: any;

  constructor(private statsService: StatsService){
    this.stats = { };
  }

  ngOnInit(): void {
    let actualKey: string;
    this.statsService.extractStats().subscribe(lines => {
      lines.forEach( line => {
        //console.log(line);
        if(line.startsWith("/")) {
          actualKey = 'root';
          this.stats[actualKey] = [];
        } else if (line.startsWith("*")){
          //console.log("sono chiave");
          actualKey = line.replace(/\*/g, "");
          this.stats['root'][actualKey] = [];
        } else if (line.length === 0) {
          console.log("Skip");
        } else {
          let index = line.indexOf(".");
          let key = line.substring(0, index);
          let value = line.substring(index, line.length -1)
          let optional = value.substring(0, value.lastIndexOf(" "));
          if(actualKey === "root") {
            this.stats['root'].push({ entry: key, stat: value.replace(/\./g, "").trim(), percentage: optional || null });
          } else {
            this.stats['root'][actualKey].push({ entry: key, stat: value, percentage: optional || null });
          }
        }
      });
    });
    console.log(this.stats);
  }
}