import { Component } from '@angular/core';
import * as ff '../../../node_modules/gis-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../../node_modules/gis-viewer/'
  ]
})
export class AppComponent {
  title = 'app';
}
