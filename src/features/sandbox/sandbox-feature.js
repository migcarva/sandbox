import React from "react";
import * as Tabs from "@radix-ui/react-tabs";

import { LightWeightChart } from "./lightweight";
import { RFChart } from "./rfc";

const data = [
  ["2024-01-01", 13.92, 14.083, 13.5025, 13.92, 10379666.97],
  ["2024-01-02", 13.92, 14.2455, 13.871, 14.157, 19149600.5],
  ["2024-01-03", 14.157, 14.3755, 14.013, 14.2695, 12874309.69],
  ["2024-01-04", 14.2695, 14.2695, 13.9535, 13.9645, 8899211.04],
  ["2024-01-05", 13.9645, 14.076, 13.8415, 13.8525, 13092402.18],
  ["2024-01-06", 13.8525, 14.029, 13.7325, 13.987, 9720198.64],
  ["2024-01-07", 13.987, 14.05, 13.74, 13.74, 9190532.1],
  ["2024-01-08", 13.74, 14, 13.56, 13.948, 12672318.36],
  ["2024-01-09", 13.948, 14.04, 13.81, 13.838, 6286435.6],
  ["2024-01-10", 13.838, 14.17, 13.781, 13.9485, 7569704.26],
  ["2024-01-11", 13.9485, 14.0515, 13.78, 13.956, 8794455.91],
  ["2024-01-12", 13.956, 14.137, 13.9125, 13.967, 7559702.66],
  ["2024-01-13", 13.967, 14.0445, 13.8875, 13.954, 4397620.95],
  ["2024-01-14", 13.954, 14.0065, 13.7055, 13.7485, 4905640.1],
  ["2024-01-15", 13.7485, 13.9675, 13.6605, 13.9645, 6061252.8],
  ["2024-01-16", 13.9645, 14.2125, 13.791, 14.2055, 7495234.58],
  ["2024-01-17", 14.2055, 14.281, 14.0055, 14.1555, 7210145.14],
  ["2024-01-18", 14.1555, 14.34, 14.042, 14.284, 5680927.01],
  ["2024-01-19", 14.284, 15, 14.204, 14.9935, 35887908.25],
  ["2024-01-20", 14.9935, 15.4675, 14.752, 15.3235, 22971830.33],
  ["2024-01-21", 15.3235, 15.5375, 15.1715, 15.5025, 13531808.24],
  ["2024-01-22", 15.5025, 15.5845, 15.119, 15.26, 9711015.13],
  ["2024-01-23", 15.26, 15.309, 15.0115, 15.2925, 14617172.3],
  ["2024-01-24", 15.2925, 15.44, 14.9025, 14.962, 13335255.61],
  ["2024-01-25", 14.962, 15.0245, 14.8105, 14.912, 8170430.79],
  ["2024-01-26", 14.912, 14.954, 14.6325, 14.7225, 7527855.9],
  ["2024-01-27", 14.721, 15.1045, 14.6455, 15.021, 14233804.03],
  ["2024-01-28", 15.021, 15.19, 14.91, 15.0555, 11111880.56],
  ["2024-01-29", 15.0555, 15.1305, 14.827, 14.9175, 5920339.42],
];

export const SandboxFeature = () => {
  const tabs = [
    {
      title: "Lightcharts",
      name: "lightcharts",
    },
    {
      title: "RF Charts",
      name: "rf-charts",
    },
    {
      title: "Both",
      name: "both",
    },
  ];

  const lightchartData = data.map((e) => {
    return {
      time: e[0],
      open: e[1],
      high: e[2],
      low: e[3],
      close: e[4],
    };
  });

  const rfcData = data.map((e) => {
    return {
      date: new Date(e[0]),
      open: e[1],
      high: e[2],
      low: e[3],
      close: e[4],
      volume: 0,
    };
  });

  const height = 620;
  const width = 370;

  return (
    <div className="">
      <Tabs.Root className="flex flex-col w-full" defaultValue={tabs[0].name}>
        <Tabs.List className="flex shrink-0 border-b border-solid border-zinc-300">
          {tabs.map((t) => (
            <Tabs.Trigger
              className="TabsTrigger bg-white px-4 h-8 flex flex-1 items-center justify-center text-neutral-400 data-[state=active]:text-neutral-950"
              value={t.name}
              key={`trigger-${t.name}`}
            >
              {t.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Tabs.Content
          className="flex-grow bg-white grid grid-cols-2 gap-2 py-2 w-full"
          value={tabs[0].name}
          key={`tab-${tabs[0].name}`}
        >
          <LightWeightChart
            width={width}
            height={height}
            data={lightchartData}
          />
        </Tabs.Content>

        <Tabs.Content
          className="flex-grow bg-white grid grid-cols-2 gap-2 py-2"
          value={tabs[1].name}
          key={`tab-${tabs[1].name}`}
        >
          <RFChart width={width} height={height} data={rfcData} />
        </Tabs.Content>
        <Tabs.Content
          className="flex-grow bg-white grid grid-cols-2 gap-2 py-2"
          value={tabs[2].name}
          key={`tab-${tabs[2].name}`}
        >
          <div className="flex flex-col">
            <LightWeightChart
              width={width}
              height={height / 2}
              data={lightchartData}
            />
            <RFChart width={width} height={height / 2} data={rfcData} />
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};
