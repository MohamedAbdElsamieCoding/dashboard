import ReactECharts from "echarts-for-react";
import { getSalesChartOptions } from "../../../services/charts/salesChartOpt";

const DailySalesChart = () => {
  const dailySales = [
    { day: "Mon", sales: 120 },
    { day: "Tue", sales: 200 },
    { day: "Wed", sales: 150 },
    { day: "Thu", sales: 280 },
    { day: "Fri", sales: 250 },
    { day: "Sat", sales: 300 },
    { day: "Sun", sales: 220 },
  ];
  return (
    <div className="p-6 flex flex-col gap-10 bg-bg/60 border border-border rounded-xl">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-medium text-text">Daily Sales Trend</h2>
        <p className="text-xs font-medium tracking-wide">
          Last 7 days performance
        </p>
      </div>
      <ReactECharts
        option={getSalesChartOptions(dailySales)}
        style={{ height: 250, width: "100%" }}
        opts={{ renderer: "canvas" }}
      />
    </div>
  );
};

export default DailySalesChart;
