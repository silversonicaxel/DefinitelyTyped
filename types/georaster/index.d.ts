export interface GeoRaster {
  noDataValue: number | null;
  numberOfRasters: number;
  projection: string;
  xmin: number;
  xmax: number;
  ymin: number;
  ymax: number;
  pixelWidth: number;
  pixelHeight: number;
  height: number;
  width: number;
  rasters: number[][];
  sourceType: string;
  geoKeys?: Record<string, any>;
  tiePoints?: any;
  fileDirectory?: any;
  getValuesAtLatLng?: (lat: number, lng: number) => number[] | undefined;
}

export interface ParseGeorasterOptions {
  blockSize?: number;
  url?: string;
  readOnDemand?: boolean;
  projection?: number;
}

declare function parseGeoraster(input: ArrayBuffer | Blob | File, options?: ParseGeorasterOptions): Promise<GeoRaster>;

export = parseGeoraster;
