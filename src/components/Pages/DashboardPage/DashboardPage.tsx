import {
  PiMoneyWavyLight,
  PiShoppingBagLight,
  PiUserThin,
} from "react-icons/pi";
import { AiOutlineFileDone } from "react-icons/ai";
import Card from "../../ui/Card";
import RevenueChart from "./RevenueChart";
import DailySalesChart from "./DailySalesChart";
import RecentOrders from "./RecentOrders";
import { recentOrders } from "../../../services/orders/recentOrders";
import {
  IoEllipsisVerticalSharp,
  IoFilterOutline,
  IoDownloadOutline,
} from "react-icons/io5";
import ProductCard from "../../ui/ProductCard";

const DashboardPage = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$128,430",
      percentage: "+12%",
      icon: PiMoneyWavyLight,
    },
    {
      title: "Total Orders",
      value: "1,240",
      percentage: "+5%",
      icon: PiShoppingBagLight,
    },
    {
      title: "Total Customers",
      value: "892",
      percentage: "+8%",
      icon: PiUserThin,
    },
    {
      title: "Total Products",
      value: "450",
      percentage: "Active",
      icon: AiOutlineFileDone,
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-4 gap-6">
        {stats.map((item) => (
          <Card
            key={item.title}
            icon={item.icon}
            percentage={item.percentage}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <RevenueChart />
        </div>
        <div className="col-span-1 ">
          <DailySalesChart />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3">
          <div className="p-6 flex flex-col border gap-6 border-border rounded-xl">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-text">Recent Orders</h2>
              <p className="text-xs tracking-wide font-medium text-primary">
                View All
              </p>
            </div>
            <RecentOrders data={recentOrders} />
          </div>
        </div>
        <div className="col-span-1">
          <div className="p-6 flex flex-col border gap-6 border-border rounded-xl">
            <h2 className="text-lg font-medium text-text text-center">
              Latest Customers
            </h2>
            <div className="flex flex-col gap-4">
              <div className="p-2 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img
                    src="/man.png"
                    alt="profile"
                    className="rounded-full w-10 h-10"
                  />
                  <div className="flex flex-col items-start">
                    <p className="text-xs font-medium tracking-wide">
                      Elena Fisher
                    </p>
                    <p className="text-[10px] font-normal">2 mins ago</p>
                  </div>
                </div>
                <IoEllipsisVerticalSharp />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-2 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img
                    src="/man.png"
                    alt="profile"
                    className="rounded-full w-10 h-10"
                  />
                  <div className="flex flex-col items-start">
                    <p className="text-xs font-medium tracking-wide">
                      Elena Fisher
                    </p>
                    <p className="text-[10px] font-normal">2 mins ago</p>
                  </div>
                </div>
                <IoEllipsisVerticalSharp />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-2 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img
                    src="/man.png"
                    alt="profile"
                    className="rounded-full w-10 h-10"
                  />
                  <div className="flex flex-col items-start">
                    <p className="text-xs font-medium tracking-wide">
                      Elena Fisher
                    </p>
                    <p className="text-[10px] font-normal">2 mins ago</p>
                  </div>
                </div>
                <IoEllipsisVerticalSharp />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 gap-6 border border-border rounded-xl bg-bg/60">
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-lg text-text">
            Top Selling Products
          </h2>
          <div className="flex gap-2 items-center text-text-muted text-2xl">
            <IoFilterOutline />
            <IoDownloadOutline />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
