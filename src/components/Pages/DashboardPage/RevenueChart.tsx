import { getRevenueChartOptions } from "../../../services/charts/revenueChartOpt";
import ReactECharts from "echarts-for-react";

const RevenueChart = () => {
  const revenueData = [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 18000 },
    { month: "Mar", revenue: 15000 },
    { month: "Apr", revenue: 25000 },
    { month: "May", revenue: 22000 },
  ];
  return (
    <div className="p-6 flex flex-col gap-10 bg-bg/60 border border-border rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-medium text-text">Revenue Analytics</h2>
          <p className="text-xs font-medium tracking-wide">
            Monthly growth and performance overview
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-4 py-1 rounded-lg bg-[#34343D]/50">
            <p className="tracking-wide text-xs text-text font-medium">
              12 Months
            </p>
          </div>
          <div className="px-4 py-1 rounded-lg bg-primary shadow-sm shadow-primary">
            <p className="tracking-wide text-xs font-bold text-[#1000A9]">
              30 Days
            </p>
          </div>
        </div>
      </div>
      <ReactECharts
        option={getRevenueChartOptions(revenueData)}
        style={{ height: 320, width: "100%" }}
        opts={{ renderer: "canvas" }}
      />
    </div>
  );
};

export default RevenueChart;
