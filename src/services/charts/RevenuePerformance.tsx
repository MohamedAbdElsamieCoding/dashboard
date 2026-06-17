import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const RevenuePerformanceChart = () => {
  const option = {
    tooltip: {
      trigger: "axis",
    },

    legend: {
      top: 0,
      right: 0,
    },

    grid: {
      top: 50,
      left: 20,
      right: 20,
      bottom: 20,
      containLabel: true,
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },

    yAxis: {
      type: "value",
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },

    series: [
      {
        name: "Previous Revenue",
        type: "line",
        smooth: true,
        symbol: "none",

        data: [12000, 18000, 15000, 21000, 20000, 26000],

        lineStyle: {
          width: 2,
          opacity: 0.35,
        },
      },

      {
        name: "Current Revenue",
        type: "line",
        smooth: true,

        data: [15000, 22000, 18000, 28000, 25000, 35000],

        symbol: "circle",
        symbolSize: 8,

        lineStyle: {
          width: 4,
        },

        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(59,130,246,0.35)",
            },
            {
              offset: 1,
              color: "rgba(59,130,246,0)",
            },
          ]),
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "350px", width: "100%" }} />
  );
};

export default RevenuePerformanceChart;
