import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const NewCustomersChart = () => {
  const option = {
    grid: {
      top: 10,
      left: 0,
      right: 0,
      bottom: 0,
      containLabel: true,
    },

    tooltip: {
      trigger: "axis",
    },

    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

      axisLine: {
        show: false,
      },

      axisTick: {
        show: false,
      },
    },

    yAxis: {
      type: "value",
      show: false,
    },

    series: [
      {
        type: "line",
        smooth: true,
        symbol: "none",

        data: [24, 31, 28, 42, 38, 51, 47],

        lineStyle: {
          color: "#c0c1ff",
          width: 3,
        },

        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(192,193,255,0.35)",
            },
            {
              offset: 1,
              color: "rgba(192,193,255,0)",
            },
          ]),
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "180px", width: "100%" }} />
  );
};

export default NewCustomersChart;
