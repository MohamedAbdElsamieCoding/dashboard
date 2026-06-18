import { useMemo } from "react";
import { getRevenueChartOptions } from "../../../services/charts/revenueChartOpt";
import ReactECharts from "echarts-for-react";
import type { CartsResponse } from "../../../types/carts.type";

interface RevenueChartProps {
  cartsData: CartsResponse;
}

const RevenueChart = ({ cartsData }: RevenueChartProps) => {
  const revenueData = useMemo(() => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (
      cartsData?.carts.slice(0, 12).map((cart, index) => ({
        month: months[index],
        revenue: cart.discountedTotal,
      })) ?? []
    );
  }, [cartsData]);

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
