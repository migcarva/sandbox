import React from "react";
import { format } from "d3-format";
import {
  discontinuousTimeScaleProviderBuilder,
  Chart,
  ChartCanvas,
  CandlestickSeries,
  lastVisibleItemBasedZoomAnchor,
  XAxis,
  YAxis,
  EdgeIndicator,
  MouseCoordinateY,
} from "react-financial-charts";

export const RFChart = ({ width, height, data }) => {
  const margin = { left: 0, right: 40, top: 0, bottom: 24 };
  const xScaleProvider =
    discontinuousTimeScaleProviderBuilder().inputDateAccessor(
      (d) => d.date,
    );

  const {
    data: ldata,
    xScale,
    xAccessor,
    displayXAccessor,
  } = xScaleProvider(data);
  const max = xAccessor(ldata[ldata.length - 1]);
  const min = xAccessor(ldata[Math.max(0, ldata.length - 30)]);
  const xExtents = [min, max];
  const yExtents = (data) => {
    return [data.high, data.low];
  };
  const openCloseColor = (data) => {
    return data.close > data.open ? "#26a69a" : "#ef5350";
  };
  const yEdgeIndicator = (data) => {
    return data.close;
  };
  const pricesDisplayFormat = format(".2f");

  const gridHeight = height - margin.top - margin.bottom;
  const elderRayHeight = 20;
  const chartHeight = gridHeight - elderRayHeight;

  return (
    <div className="w-full">
      <ChartCanvas
        height={height}
        ratio={10}
        width={width}
        margin={margin}
        data={ldata}
        displayXAccessor={displayXAccessor}
        seriesName="Data"
        xScale={xScale}
        xAccessor={xAccessor}
        xExtents={xExtents}
        zoomAnchor={lastVisibleItemBasedZoomAnchor}
      >
        <Chart id={3} height={chartHeight} yExtents={yExtents}>
          <XAxis showGridLines showTicks={true} showTickLabel={true} />
          <YAxis showGridLines tickFormat={pricesDisplayFormat} />
          <CandlestickSeries />
          <MouseCoordinateY
            rectWidth={margin.right}
            displayFormat={pricesDisplayFormat}
          />
          <EdgeIndicator
            itemType="last"
            rectWidth={margin.right}
            fill={openCloseColor}
            lineStroke={openCloseColor}
            displayFormat={pricesDisplayFormat}
            yAccessor={yEdgeIndicator}
          />

          {/* <ZoomButtons /> */}
          {/* <OHLCTooltip origin={[8, 16]} /> */}
        </Chart>
      </ChartCanvas>
    </div>
  );
};
