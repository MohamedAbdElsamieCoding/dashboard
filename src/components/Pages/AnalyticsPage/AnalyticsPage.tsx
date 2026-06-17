import { clsx } from "clsx";
import { useState } from "react";
import { IoIosTrendingUp } from "react-icons/io";
import { IoEllipsisVerticalSharp, IoFilterOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import RevenuePerformanceChart from "../../../services/charts/RevenuePerformance";
import SalesDistributionChart from "../../../services/charts/CategorySplit";
import NewCustomersChart from "../../../services/charts/NewCustomers";
import { customers } from "../../../services/orders/recentOrders";

const AnalyticsPage = () => {
  const [activeTab, setActiveTab] = useState("Last 30 Days");

  const timeRange = [
    { title: "Last 30 Days" },
    { title: "Last 90 Days" },
    { title: "Custom Range" },
  ];

  const headTitle = [
    { title: "CUSTOMER" },
    { title: "SOURCE" },
    { title: "LIFETIME VALUE" },
    { title: "STATUS" },
    { title: "ACTIVITY" },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-1">
          <h1 className="text-text tracking-tight text-3xl font-semibold">
            Analytics Suite
          </h1>
          <p className="text-text text-sm font-normal">
            Comprehensive performance monitoring and growth metrics.
          </p>
        </div>
        <div className="p-1 flex items-center gap-2 border border-border rounded-xl bg-[#1F1F27]">
          {timeRange.map((item) => (
            <button
              key={item.title}
              onClick={() => setActiveTab(item.title)}
              className={clsx(
                "px-4 py-2 rounded-md transition-colors",
                activeTab === item.title
                  ? "bg-primary text-[#1000A9]"
                  : "bg-transparent text-text-muted hover:text-text",
              )}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 p-6 flex flex-col gap-10 border border-border rounded-xl bg-bg/60">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-medium text-text">
                Revenue Performance
              </h2>
              <div className="flex items-center gap-2">
                <p className="text-primary font-bold tracking-tight text-5xl">
                  $128,430.50
                </p>
                <div className="rounded-full bg-secondary/10 flex items-center text-secondary px-3 py-0.5">
                  <IoIosTrendingUp />
                  <p>+12.4%</p>
                </div>
              </div>
            </div>
          </div>
          <RevenuePerformanceChart />
        </div>
        <div className="col-span-1 p-6 flex flex-col gap-6 border border-border rounded-xl bg-bg/60">
          <div className="flex items-start justify-between">
            <h2 className="text-lg font-medium">Category Split</h2>
            <IoEllipsisVerticalSharp />
          </div>
          <SalesDistributionChart />
        </div>
        <div className="col-span-1 flex flex-col gap-2 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-text">New Customers</h2>
            <p className="text-xs text-secondary tracking-wide">+2.4k</p>
          </div>
          <NewCustomersChart />
        </div>
        <div className="col-span-2 flex flex-col gap-6">
          <h2 className="text-lg font-medium text-text">Product Performance</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface p-4 flex items-center gap-4 border border-border rounded-xl w-full">
              <img
                src="/product.png"
                alt="product"
                className="w-16 h-16 rounded-lg"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-base font-bold text-text">
                  Titanium Watch S3
                </h3>
                <p className="text-text-muted tracking-wide font-medium text-xs">
                  Top Seller this month
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <p className="text-base text-secondary font-bold">$24,900</p>
                <p className="tracking-wide text-xs font-medium">842 sales</p>
              </div>
            </div>
            <div className="bg-surface p-4 flex items-center gap-4 border border-border rounded-xl w-full">
              <img
                src="/product.png"
                alt="product"
                className="w-16 h-16 rounded-lg"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-base font-bold text-text">
                  Titanium Watch S3
                </h3>
                <p className="text-text-muted tracking-wide font-medium text-xs">
                  Top Seller this month
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <p className="text-base text-secondary font-bold">$24,900</p>
                <p className="tracking-wide text-xs font-medium">842 sales</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-6 border border-border rounded-xl p-6 bg-surface/30">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-text">
              Recent Customer Growth Activity
            </h2>
            <div className="flex items-center gap-2">
              <IoFilterOutline />
              <MdOutlineFileDownload />
            </div>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-xs text-gray-400 border-b border-border bg-[#292932]/50 px-6 py-4">
                {headTitle.map((item) => (
                  <th
                    key={item.title}
                    className={`px-6 py-4 ${
                      item.title === "ACTIVITY" ? "text-right" : "text-left"
                    }`}
                  >
                    {item.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-border">
                  <td className="px-6 py-4">{customer.customer}</td>
                  <td className="px-6 py-4">{customer.source}</td>
                  <td className="px-6 py-4">{customer.lifetimeValue}</td>
                  <td className="px-6 py-4">{customer.status}</td>
                  <td className="px-6 py-4 text-right">{customer.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
