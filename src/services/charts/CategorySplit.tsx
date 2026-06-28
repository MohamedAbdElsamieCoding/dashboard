import ReactECharts from "echarts-for-react";
import type { Product } from "../../types/products.type";

type SalesDistributionChartProps = {
  products: Product[];
};

const SalesDistributionChart = ({ products }: SalesDistributionChartProps) => {
  const categoryMap: Record<string, number> = {};

  products.forEach((product) => {
    const category = product.category;
    const value = product.price * product.stock;
    categoryMap[category] = (categoryMap[category] || 0) + value;
  });

  const chartData = Object.entries(categoryMap).map(([name, value]) => ({
    name,
    value,
  }));
  const totalOrders = products.length;

  const option = {
    tooltip: {
      trigger: "item",
    },

    legend: {
      bottom: 0,
      left: "center",

      textStyle: {
        color: "#94a3b8",
        fontSize: 14,
      },
    },

    graphic: [
      {
        type: "text",
        left: "center",
        top: "38%",
        style: {
          text: totalOrders.toString(),
          fill: "#ffffff",
          fontSize: 30,
          fontWeight: 700,
        },
      },
      {
        type: "text",
        left: "center",
        top: "49%",
        style: {
          text: "Orders",
          fill: "#94a3b8",
          fontSize: 14,
        },
      },
    ],

    series: [
      {
        name: "Category Split",
        type: "pie",

        center: ["50%", "40%"],

        radius: ["58%", "75%"],

        avoidLabelOverlap: true,

        itemStyle: {
          borderRadius: 8,
          borderWidth: 0,
        },

        label: {
          show: false,
        },

        labelLine: {
          show: false,
        },

        data: chartData,
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{
        height: 380,
        width: "100%",
      }}
    />
  );
};

export default SalesDistributionChart;
