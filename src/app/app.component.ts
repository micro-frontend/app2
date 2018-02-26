import {Component} from '@angular/core';

@Component({
  selector: 'app-root-app2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count = 100;
  decrease(): void {
    this.count --;
  }
}
