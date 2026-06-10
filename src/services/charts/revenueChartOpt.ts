import type { EChartsOption } from "echarts";
import type { RevenueData } from "../../types/types";
import { chartTheme } from "./chartTheme";

export const getRevenueChartOptions = (data: RevenueData[]): EChartsOption => {
  return {
    ...chartTheme,

    tooltip: {
      trigger: "axis",
      backgroundColor: "#1f1f27",
      borderColor: "#2a2a33",
      textStyle: { color: "#fff" },
    },

    xAxis: {
      type: "category",
      data: data.map((d) => d.month),
      axisLine: { lineStyle: { color: "#2a2a33" } },
      axisLabel: { color: "#A1A1AA" },
    },

    yAxis: {
      type: "value",
      axisLine: { show: false },
      splitLine: { lineStyle: { color: "#2a2a33" } },
    },

    series: [
      {
        name: "Revenue",
        type: "line",
        smooth: true,
        data: data.map((d) => d.revenue),

        lineStyle: {
          width: 3,
          color: "#7C3AED",
        },

        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(124, 58, 237, 0.4)" },
              { offset: 1, color: "rgba(124, 58, 237, 0)" },
            ],
          },
        },

        symbol: "circle",
        symbolSize: 6,
      },
    ],
  };
};
