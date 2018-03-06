import { Component } from '@angular/core';
// import { GisViewerProps } from 'gis-viewer/dist/types/index.d';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
  ]
})
export class AppComponent {
  title = 'app';
  gisViewerState: any;

  constructor() {
    this.gisViewerState
  }

  
}
