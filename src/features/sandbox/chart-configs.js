const defaultColors = {
  back: "#fff",
  grid: "#f5f5f5",
  candleDw: "#f43f5e",
  candleUp: "#00E396",
  volDw: "#f43f5e",
  volUp: "#00E396",
  wickDw: "#f43f5e",
  wickUp: "#00E396",
};

const CANDLES_PROPS = {
  downColor: defaultColors.candleDw,
  upColor: defaultColors.candleUp,
  borderVisible: false,
};

const CHART_PROPS = {
  grid: {
    vertLines: { visible: false },
    horzLines: { visible: true, color: "#D9D9D9", style: 2 },
  },
  rightPriceScale: { borderVisible: false },
  timeScale: {
    // borderVisible: false,
    barSpacing: 10,
    borderColor: "#D9D9D9",
  },
};

export const ChartProps = {
  chart: CHART_PROPS,
  candles: CANDLES_PROPS,
};
