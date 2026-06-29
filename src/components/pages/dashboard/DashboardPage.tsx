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
import { IoFilterOutline, IoDownloadOutline } from "react-icons/io5";
import ProductCard from "../../ui/ProductCard";
import { useProducts } from "../../../hooks/useProducts";
import { useUsers } from "../../../hooks/useUsers";
import { useCarts } from "../../../hooks/useCarts";
import { useMemo } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import type { Order, OrderStatus } from "../../../types/types";

const DashboardPage = () => {
  const {
    data: productsData,
    isLoading: productsLoading,
    isError: productsError,
    refetch,
  } = useProducts();

  const { data: usersData, isLoading: usersLoading } = useUsers();
  const { data: cartsData, isLoading: cartsLoading } = useCarts();

  const latestCustomers = usersData?.users.slice(0, 3) ?? [];

  const recentOrders: Order[] = useMemo(() => {
    if (!cartsData || !usersData) return [];
    const statuses: OrderStatus[] = ["Completed", "Pending", "Cancelled"];

    return cartsData.carts.map((cart) => {
      const user = usersData.users.find((user) => user.id === cart.userId);
      return {
        id: `#${cart.id}`,
        customer: user ? `${user.firstName} ${user.lastName}` : "Unknown User",
        amount: cart.total,
        date: new Date().toLocaleDateString(),
        status: statuses[cart.id % statuses.length],
      };
    });
  }, [cartsData, usersData]);

  const totalRevenue = useMemo(() => {
    return cartsData?.carts?.reduce((sum, cart) => sum + cart.total, 0) ?? 0;
  }, [cartsData]);

  if (productsLoading || usersLoading || cartsLoading || !cartsData) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (productsError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <RiErrorWarningLine className="text-6xl text-red-500" />

        <h2 className="text-2xl font-semibold">Failed to load dashboard</h2>

        <p className="text-gray-500">
          An unexpected error occurred while fetching data.
        </p>

        <button
          onClick={() => refetch()}
          className="px-5 py-2 rounded-lg bg-primary text-white"
        >
          Retry
        </button>
      </div>
    );
  }

  const totalProducts = productsData?.total ?? 0;
  const totalCustomers = usersData?.total ?? 0;

  const totalOrders = cartsData?.total ?? cartsData?.carts?.length ?? 0;

  const stats = [
    {
      title: "Total Revenue",
      value: `$${totalRevenue}`,
      percentage: "+12%",
      icon: PiMoneyWavyLight,
    },
    {
      title: "Total Orders",
      value: totalOrders.toString(),
      percentage: "+5%",
      icon: PiShoppingBagLight,
    },
    {
      title: "Total Customers",
      value: totalCustomers.toString(),
      percentage: "+8%",
      icon: PiUserThin,
    },
    {
      title: "Total Products",
      value: totalProducts.toString(),
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart cartsData={cartsData} />
        </div>
        <div className="col-span-1 ">
          <DailySalesChart cartsData={cartsData} />
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
            <RecentOrders data={recentOrders.slice(0, 6)} />
          </div>
        </div>
        <div className="col-span-1">
          <div className="p-6 flex flex-col border gap-6 border-border rounded-xl">
            <h2 className="text-lg font-medium text-text text-center">
              Latest Customers
            </h2>
            {latestCustomers.map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-3 overflow-hidden"
              >
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col items-start gap-0.5">
                  <p className="font-medium text-sm">
                    {user.firstName} {user.lastName}
                  </p>

                  <p className="text-xs text-text-muted break-all">
                    {user.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 gap-6 border border-border rounded-xl bg-bg/60">
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-lg text-text">
            Top Selling Products
          </h2>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-secondary/10 transition">
              <IoFilterOutline />
              <span className="text-sm">Filter</span>
            </button>

            <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-secondary/10 transition">
              <IoDownloadOutline />
              <span className="text-sm">Export</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {productsData?.products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
