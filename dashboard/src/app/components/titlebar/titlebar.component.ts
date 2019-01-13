import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss'],
  selector: 'autentico-titlebar'
})
export class TitlebarComponent implements OnInit {

  public title: String;

  ngOnInit(): void {
    this.title = "Autentico DashBoard-(Benvenuto Amministratore)";
  }

}