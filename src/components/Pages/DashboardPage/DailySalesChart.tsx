import ReactECharts from "echarts-for-react";
import { getSalesChartOptions } from "../../../services/charts/salesChartOpt";
import { useMemo } from "react";
import type { CartsResponse } from "../../../types/carts.type";

interface DailySalesChartsProps {
  cartsData: CartsResponse;
}

const DailySalesChart = ({ cartsData }: DailySalesChartsProps) => {
  const dailySales = useMemo(() => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
      cartsData?.carts.slice(0, 7).map((cart, index) => ({
        day: days[index],
        sales: cart.total,
      })) ?? []
    );
  }, [cartsData]);

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
