import type { EChartsOption } from "echarts";
import { chartTheme } from "./chartTheme";
import type { DailySalesData } from "../../types/types";

export const getSalesChartOptions = (data: DailySalesData[]): EChartsOption => {
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
      data: data.map((d) => d.day),
      axisLine: { lineStyle: { color: "#2a2a33" } },
      axisLabel: { color: "#A1A1AA" },
    },

    yAxis: {
      type: "value",
      splitLine: { lineStyle: { color: "#2a2a33" } },
    },

    series: [
      {
        name: "Sales",
        type: "bar",
        data: data.map((d) => d.sales),

        barWidth: "45%",

        itemStyle: {
          borderRadius: [6, 6, 0, 0],
          color: "#22C55E",
        },
      },
    ],
  };
};
