import ReactECharts from "echarts-for-react";

const SalesDistributionChart = () => {
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
          text: "1,240",
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

        data: [
          { value: 4500, name: "Electronics" },
          { value: 3200, name: "Fashion" },
          { value: 2100, name: "Home" },
          { value: 1800, name: "Sports" },
        ],
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
