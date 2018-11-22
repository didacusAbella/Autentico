import { Component, OnInit} from '@angular/core';
declare var $ :any;

@Component({
  selector: 'ad-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    $(document).foundation();
  }

}
