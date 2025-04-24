import parseGeoraster from "georaster";

// Create a dummy ArrayBuffer for test input
const dummyBuffer = new ArrayBuffer(8);

// Basic usage with no options
parseGeoraster(dummyBuffer).then((georaster) => {
  const noData: number | null = georaster.noDataValue;
  const bands: number = georaster.numberOfRasters;
  const proj: string = georaster.projection;
  const extent = {
    xmin: georaster.xmin,
    xmax: georaster.xmax,
    ymin: georaster.ymin,
    ymax: georaster.ymax,
  };
  const size = {
    pixelWidth: georaster.pixelWidth,
    pixelHeight: georaster.pixelHeight,
    width: georaster.width,
    height: georaster.height,
  };
  const rasters: number[][] = georaster.rasters;
  const source: string = georaster.sourceType;

  // Optional properties
  const geoKeys: Record<string, any> | undefined = georaster.geoKeys;
  const tiePoints = georaster.tiePoints;
  const fileDirectory = georaster.fileDirectory;

  // Optional method
  if (georaster.getValuesAtLatLng) {
    const values: number[] | undefined = georaster.getValuesAtLatLng(45.0, 9.0);
  }
});

// Extended usage with all options
const options = {
  blockSize: 512,
  url: "https://my-cog-server.com/data.tif",
  readOnDemand: true,
  projection: 3857,
};

parseGeoraster(dummyBuffer, options).then((georaster) => {
  console.log("Projection:", georaster.projection);
});

// Type safety: check that wrong types are caught
// @ts-expect-error
parseGeoraster(dummyBuffer, { blockSize: "not-a-number" });
// @ts-expect-error
parseGeoraster(dummyBuffer, { projection: "should-be-a-number" });
// @ts-expect-error
parseGeoraster(dummyBuffer, { readOnDemand: "not-a-boolean" });
