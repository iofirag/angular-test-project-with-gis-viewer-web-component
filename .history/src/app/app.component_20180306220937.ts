import { Component } from '@angular/core';
// import { GisViewerProps } from 'gis-viewer/dist/types/index.d';
import {
  GisViewerProps, MapSettings, TileLayerDefinition, ShapeLayerDefinition,
LayersControllerOptions, ScaleControlOptions, SearchBoxOptions,
MiniMapOptions, ZoomControl, DrawBarOptions, MouseCoordinateOptions,
  PolylineMeasureOptions, ZoomToExtendOptions, UnitsChangerOptions
} from 'gis-viewer/dist/gisviewer';
// from '../../dist/assets/gis-viewer/gisviewer';

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
  test:
  constructor() {
    this.gisViewerState = this.createDevState();
  }

  createDevState(): GisViewerProps {
    const protocol = 'http:';

    const mapSettings: MapSettings = {
      metric: true,
      wheelZoomOnlyAfterClick: true,
      clusterOptions: {
        // disableClusteringAtZoom: 13,
        // chunkedLoading: true,
        // chunkProgress: true,
        // singleMarkerMode: false
      },
      mode: 'cluster'
    };

    const tileLayers: any[] = [
      {
        name: 'Online Map',
        tilesURI: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        // zoom: 1,
        // center: {
        // 	lat:0,
        // 	lng: 0
        // },
        minZoom: 1,
        maxZoom: 18,
        attributionControl: false
        // zoomControl: false
      },
      {
        name: 'Verint Map',
        tilesURI: protocol + '//osm/osm_tiles/{z}/{x}/{y}.png',
        // zoom: 1,
        // center: {
        // 	lat: 32.076304,
        // 	lng: 35.013960
        // },
        minZoom: 1,
        maxZoom: 20,
        attributionControl: false
        // zoomControl: false
      }
    ];

    const shapeLayers: any[] = [
      {
        layerName: 'Test data 1',
        // isDisplay: false,
        shapes: [
          {
            shapeWkt:
              'POLYGON((-14.765625 17.052584352706003,-12.83203125 15.703433338617463,-15.99609375 15.534142999890243,-14.765625 17.052584352706003))',
            data: {
              name: '232 (known as polygon1)',
              id: 'polygon1'
            }
          },
          {
            shapeWkt: 'POLYGON((0 0 0,0 5 0,5 5 0,5 0 0,0 0 0))',
            data: {
              name: '232 (known as polygon1)',
              id: 'polygon1'
            }
          },
          {
            shapeWkt: 'LINESTRING(1 1 1,5 5 5,7 7 5)',
            data: {
              name: '232 (known as polygon1)',
              id: 'polygon1'
            }
          }
        ]
      }
    ];

    const isImportExport = true;

    const layersController: any = {
      enable: true
    };

    const scaleControl: any = {
      enable: true,
      position: 'bottomright'
    };

    const searchBox: any = {
      enable: true,
      searchOnLayer: true,
      queryServerUrl:
        protocol +
        '//osm/nominatim?format=json&limit=3&type=administrative&q={s}'
    };

    const miniMap: any = {
      enable: true,
      toggleDisplay: true
    };

    const zoomControl: any = {
      enable: true
    };

    const drawBar: any = {
      enable: true,
      draw: {
        polyline: true,
        polygon: true, // Turns off this drawing tool
        circle: true, // Turns off this drawing tool
        rectangle: true, // Turns off this drawing tool
        marker: true // Turns off this drawing tool
        // textualMarker: false // Turns off this drawing tool
      },
      edit: {
        remove: true // Turns on remove button
      }
    };

    const mouseCoordinate: any = {
      enable: true,
      gps: true,
      utm: false,
      utmref: false
    };

    const polylineMeasure: any = {
      enable: true,
      showMeasurementsClearControl: true,
      clearMeasurementsOnStop: false
    };

    const zoomToExtend: any = {
      enable: true,
      position: 'topright'
    };

    const unitsChanger: any = {
      enable: true
    };

    const isToolbarSettings = true;

    return {
      mapSettings,
      tileLayers,
      shapeLayers,
      layersController,
      scaleControl,
      searchBox,
      miniMap,
      drawBar,
      zoomControl,
      mouseCoordinate,
      polylineMeasure,
      zoomToExtend,
      zoomToExtendOnNewData: true,
      unitsChanger, //
      isImportExport, //
      isToolbarSettings //
      //   onMapReady: this.onMapReadyCB.bind(this),
      //   onDrawEdited: this.drawEditedCB.bind(this),
      //   onDrawCreated: this.drawCreatedCB.bind(this),
      //   onSaveKmlBlob: this.onSaveKmlFormatCB.bind(this),
      //   onSaveCsvBlob: this.onSaveCsvFormatCB.bind(this),
      //   onDrawDeleted: this.drawDeletedCB.bind(this),
      //   onSaveShpBlob: this.onSaveShpFormatCB.bind(this),
      //   onSelectionDone: this.onSelectionDoneCB.bind(this),
      //   onBoundsChanged: this.onBoundsChangedCB.bind(this),
      //   onEndImportDraw: this.endImportDrawCB.bind(this),
      //   onChangeMapMode: this.changeMapModeCD.bind(this),
      //   onFetchDataByShapeId: this.fetchDataByShapeIdCB.bind(this)
    };
  }
}
