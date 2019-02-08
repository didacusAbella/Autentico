import { Component, OnInit} from '@angular/core';
import { MenuItem } from "primeng/api";
import { StatsService } from './components/stats/stats.service';
import * as jsPDF from "jspdf";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public menuEntries: MenuItem[];

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.menuEntries = [
      {
        label: 'Home', icon: 'pi pi-home', routerLink: 'home'
      },
      {
        label: 'Modifica', icon: 'pi pi-pencil', items: [
          { label: 'Inserisci Capo', routerLink: './clothings/newClothing', icon: 'pi pi-plus'},
          { label: 'Inserisci Collezione', routerLink: './collections/newCollection', icon: 'pi pi-plus'},
          { label: 'Inserisci Brand', routerLink: './brands/newBrand', icon: 'pi pi-plus'}
        ]
      },
      {
        label: 'Visualizza', icon: 'pi pi-eye', items: [
          { label: 'Capi', routerLink: 'clothings', icon: "pi pi-info-circle"},
          { label: 'Brand', routerLink: 'brands', icon: "pi pi-info-circle"},
          { label: 'Collezioni', routerLink: 'collections', icon: "pi pi-info-circle"}
        ]
      },
      { label: 'Info', icon: 'pi pi-info', routerLink: 'info'}
    ];
  } 
}
