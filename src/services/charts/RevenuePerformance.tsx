import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { useProducts } from "../../hooks/useProducts";

const RevenuePerformanceChart = () => {
  const { data: productsData } = useProducts();
  const products = productsData?.products ?? [];

  const revenueByMonth = Array.from({ length: 6 }).map((_, index) => {
    const chunk = products.slice(index * 3, index * 3 + 3);

    return {
      month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"][index],
      revenue: chunk.reduce((acc, p) => acc + p.price * p.stock, 0),
    };
  });

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
      data: revenueByMonth.map((i) => i.month),
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

        data: revenueByMonth.map((i) => i.revenue),

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
