import { Component, OnInit } from "@angular/core";
import { StakeHolder } from './stakeholder';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  selector: 'autentico-info'
})
export class InfoComponent implements OnInit {

  public stakeholders: StakeHolder[];
  public emailForm: FormGroup;

  ngOnInit(): void {
    this.stakeholders = [
      new StakeHolder("Giammaria Giordano", "Studente di SITS. Responsabile sviluppo e creazione dell'Applicazione Autentico"),
      new StakeHolder("Valeria Pontillo", "Studente di SITS Responsabile coordinamento e costruzione di tutte le componenti di Autentico"),
      new StakeHolder("Diego Avella", "Studente di SITS. Responsabile Realizzazione Dashboard"),
      new StakeHolder("Marica Rinaldi", "Responsabile per il coordinamento degli studenti per il design dell'applicazione"),
      new StakeHolder("NexSoft S.P.A", "Sponsor del Progetto"),
      new StakeHolder("Mariarita Francese", "Docente presso l'Università degli studi di Salerno. Responsabile coordinamento studenti")
    ];
    this.initForm();
  }

  private initForm() {
    this.emailForm = new FormGroup({
      from: new FormControl(''),
      to: new FormControl(new Array("d.avella5@studenti.unisa.it", "v.pontillo@studenti.unisa.it", "g.giordano@studenti.unisa.it")),
      content: new FormControl('')
    });
  }

}