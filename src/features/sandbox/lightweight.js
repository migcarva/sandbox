import React from "react";
import {
  Chart as LightChart,
  CandlestickSeries as LCandlestickSeries,
} from "lightweight-charts-react-wrapper";
import { ChartProps } from "./chart-configs.js";

export const LightWeightChart = ({ width, height, data }) => {
  return (
    <div className="w-full">
      <LightChart width={width} height={height} {...ChartProps.chart}>
        <LCandlestickSeries data={data} {...ChartProps.candles} />
      </LightChart>
    </div>
  );
};
