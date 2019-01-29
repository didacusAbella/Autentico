import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';
import {TreeNode} from 'primeng/api';

@Component({
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  selector: 'autentico-info'
})
export class InfoComponent implements OnInit {

  public stakeholders: TreeNode[];
  public emailForm: FormGroup;

  ngOnInit(): void {
    this.stakeholders = [
      { 
        label: "Cliente",
        data: { stakeholder: "NexSoft Spa" },
        children: [
          { 
            label: "Top Manager",
            data: { stakeholder: "Mariarita Francese" },
            children: [
              { label: "Developer", data: { stakeholder: "Diego Avella" }, leaf: true },
              { label: "Developer", data: { stakeholder: "Giammaria Giordano" }, leaf: true },
              { label: "Developer", data: { stakeholder: "Valeria Pontillo" }, leaf: true }
            ]
          }
        ]
      }
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