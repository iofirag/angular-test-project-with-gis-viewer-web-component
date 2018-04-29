import { Component } from '@angular/core';
// import { GisViewerProps } from 'gis-viewer/dist/types/components.d.ts';
// import {
//   /* GisViewerProps,  */MapSettings, TileLayerDefinition, ShapeLayerDefinition,
// LayersControllerOptions, ScaleControlOptions, SearchBoxOptions,
// MiniMapOptions, ZoomControl, DrawBarOptions, MouseCoordinateOptions,
//   PolylineMeasureOptions, ZoomToExtendOptions, UnitsChangerOptions
// } from 'gis-viewer/dist/gisviewer';

import { GisViewerProps, TileLayerDefinition, ShapeLayerDefinition,
   MiniMapOptions,
   DrawBarOptions, MouseCoordinateOptions,
   UnitsChangerOptions, MapConfig, LayerManagerConfig, ScaleConfig, SearchConfig, MiniMapConfig, DrawBarConfig, MouseCoordinateConfig, MeasureConfig, ZoomToExtentConfig, UnitsChangerConfig, FullScreenConfig, ToolbarConfig, MapPluginsConfig} from 'gis-viewer/dist/types/models/apiModels';

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

  constructor() {
    this.gisViewerState = this.createDevState();
  }

  createDevState(): GisViewerProps {
    const protocol = 'http:';

    const mapConfig: MapConfig = {
      isZoomToExtentOnNewData: true,
      isWheelZoomOnlyAfterClick: true,
      isZoomControl: true,
      isFlyToBounds: true,
      // isExport: true,
      clusterOptions: {
        // disableClusteringAtZoom: 13,
        // chunkedLoading: true,
        // chunkProgress: true,
        // singleMarkerMode: false
      },
      mode: 'cluster',
      distanceUnitType: 'km',
      coordinateSystemType: 'gps',
    };

    const tileLayers: TileLayerDefinition[] = [
      {
        name: 'Online Map',
        tilesURI: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png', // protocol + '//osm/osm_tiles/{z}/{x}/{y}.png', // 'http://{s}.tile.osm.org/{z}/{x}/{y}.png', // 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', // 'http://10.164.39.38/pandonia/{z}/{x}/{y}.png',
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
        tilesURI: protocol + '//osm/osm_tiles/{z}/{x}/{y}.png', // 'http://{s}.tile.osm.org/{z}/{x}/{y}.png', // 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', // 'http://10.164.39.38/pandonia/{z}/{x}/{y}.png',
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

    const shapeLayers: ShapeLayerDefinition[] = [
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

    const layerManagerConfig: LayerManagerConfig = {
      enable: true,
      drawBarConfig,
      isImport: true
    };

    const scaleConfig: ScaleConfig = {
      enable: true,
      scaleOptions: {
        position: 'bottomright'
      }
    };

    const searchConfig: SearchConfig = {
      enable: true,
      searchOptions: {
        searchOnLayer: true,
        queryServerUrl: 'http://nominatim.openstreetmap.org/search?format=json&q={s}' // protocol + '//osm/nominatim?format=json&limit=3&type=administrative&q={s}' // 'http://10.164.39.38/nominatim/search.php?format=json&q={s}' // 'http://nominatim.openstreetmap.org/search?format=json&q={s}' // 'http://nominatim.openstreetmap.org/search?format=json&q={s}'
      }
    };

    const miniMapConfig: MiniMapConfig = {
      enable: true,
      miniMapOptions: {
        toggleDisplay: true
      }
    };

    // const zoomControlConfig: ZoomConfig = {
    //   enable: true
    // };

    const mouseCoordinateConfig: MouseCoordinateConfig = {
      enable: true,
    };

    const measureConfig: MeasureConfig = {
      enable: true,
      measureOptions: {
        // showMeasurementsClearControl: true,
        // clearMeasurementsOnStop: false
      }
    };

    const zoomToExtentConfig: ZoomToExtentConfig = {
      enable: true,
      zoomToExtentOptions: {
        position: 'topright'
      }
    };

    const unitsChangerConfig: UnitsChangerConfig = {
      enable: true
    };
    const fullScreenConfig: FullScreenConfig = {
      enable: true
    };




    const toolbarConfig: ToolbarConfig = {
      isExport: true,
      isSettings: true,
      toolbarPluginsConfig: {
        layerManagerConfig, fullScreenConfig, measureConfig,
        unitsChangerConfig, zoomToExtentConfig, searchConfig
      }

    };
    const mapPluginsConfig: MapPluginsConfig = {
      miniMapConfig, scaleConfig, mouseCoordinateConfig
    };

    return {
      tileLayers,
      mapConfig,
      shapeLayers,

      toolbarConfig,
      mapPluginsConfig,

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
