import { BrowserModule } from '@angular/platform-browser';
import "material-ui-"
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

// import 'gis-viewer/dist/gisviewer.js';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
