import { Component } from '@angular/core';
import { GisViewerProps } from 'gis-viewer'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
  ]
})
export class AppComponent {
  title = 'app';
  gisViewerState: GisViewerProps;
}
