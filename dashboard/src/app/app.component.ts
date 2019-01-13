import { Component, OnInit} from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public menuEntries: MenuItem[];

  ngOnInit(): void {
    this.menuEntries = [
      { 
        label: 'File', icon: 'pi pi-file', items: [
          { label: 'Scarica Statistiche', routerLink: '', icon: 'pi pi-download'}
        ]
      },
      {
        label: 'Modifica', icon: 'pi pi-pencil', items: [
          { label: 'Inserisci Capo', routerLink: '', icon: 'pi pi-plus'},
          { label: 'Inserisci Colore', routerLink: '', icon: 'pi pi-plus'},
          { label: 'Inserisci Collezione', routerLink: '', icon: 'pi pi-plus'},
          { label: 'Inserisci Brand', routerLink: '', icon: 'pi pi-plus'}
        ]
      },
      {
        label: 'Visualizza', icon: 'pi pi-eye', items: [
          { label: 'Capi', routerLink: 'clothings'},
          { label: 'Brand', routerLink: 'brands'},
          { label: 'Collezioni', routerLink: 'collections'},
          { label: 'Colori', routerLink: 'colors'}
        ]
      },
      { label: 'Info', icon: 'pi pi-info', routerLink: 'info'}
    ];
  }
  
}
