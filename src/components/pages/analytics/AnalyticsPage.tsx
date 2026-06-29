import { clsx } from "clsx";
import { useState } from "react";
import { IoIosTrendingUp } from "react-icons/io";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import RevenuePerformanceChart from "../../../services/charts/RevenuePerformance";
import SalesDistributionChart from "../../../services/charts/CategorySplit";
import NewCustomersChart from "../../../services/charts/NewCustomers";
import { useProducts } from "../../../hooks/useProducts";
import { useUsers } from "../../../hooks/useUsers";
import type { Product } from "../../../types/products.type";

type TimeRangeOption = "Last 30 Days" | "Last 90 Days" | "Custom Range";

const AnalyticsPage = () => {
  const { data: productsData } = useProducts();
  const products = productsData?.products ?? [];
  const { data: usersData } = useUsers();
  const users = usersData?.users ?? [];
  const [activeTab, setActiveTab] = useState<TimeRangeOption>("Last 30 Days");
  const [statusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const chartLabelsByRange: Record<TimeRangeOption, string[]> = {
    "Last 30 Days": ["Week 1", "Week 2", "Week 3", "Week 4"],
    "Last 90 Days": [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
    ],
    "Custom Range": ["Period 1", "Period 2", "Period 3", "Period 4"],
  };

  const chartLabels = chartLabelsByRange[activeTab];

  const productsForRange: Product[] =
    activeTab === "Last 30 Days"
      ? products.slice(0, 8)
      : activeTab === "Last 90 Days"
        ? products.slice(0, 12)
        : products.slice(0, 6);

  const revenueData = chartLabels.map((_, index) => {
    const groupSize =
      Math.ceil(productsForRange.length / chartLabels.length) || 1;
    return productsForRange
      .slice(index * groupSize, (index + 1) * groupSize)
      .reduce((sum, product) => sum + product.price * product.stock, 0);
  });

  const newCustomersData = chartLabels.map((_, index) => {
    const groupSize = Math.ceil(users.length / chartLabels.length) || 1;
    return users.slice(index * groupSize, (index + 1) * groupSize).length * 8;
  });

  const categoryProducts: Product[] =
    activeTab === "Last 30 Days"
      ? products.slice(0, 8)
      : activeTab === "Last 90 Days"
        ? products
        : products.slice(0, 6);

  const handleDownloadCSV = () => {
    const headers = [
      "Customer",
      "Source",
      "Lifetime Value",
      "Status",
      "Activity",
    ];

    const rows = filteredCustomers.map((c) => [
      c.customer,
      c.source,
      c.lifetimeValue,
      c.status,
      c.activity,
    ]);

    const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "customers.csv";
    a.click();

    URL.revokeObjectURL(url);
  };

  const itemsPerPage = 5;

  const timeRange: { title: TimeRangeOption }[] = [
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
  const totalRevenue = productsData?.totalRevenue ?? 0;
  const customers =
    users.map((user) => ({
      id: user.id,
      customer: `${user.firstName} ${user.lastName}`,
      source: "Organic",
      lifetimeValue: user.age * 120,
      status: user.gender,
      activity: user.email,
    })) ?? [];

  const labels = chartLabels;
  const data = newCustomersData;

  const topProducts = [...categoryProducts]
    .map((p) => ({
      ...p,
      revenue: p.price * p.stock,
      sales: p.stock,
    }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 4);

  const totalPages = Math.ceil(customers.length / itemsPerPage);

  const paginatedCustomers = customers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  const filteredCustomers = customers.filter((c) => {
    if (statusFilter === "all") return true;
    return c.status === statusFilter;
  });
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
                "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                activeTab === item.title
                  ? "bg-primary text-[#1000A9] shadow-sm"
                  : "text-text-muted hover:text-text hover:bg-white/5",
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
                  $
                  {totalRevenue.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
                </p>
                <div className="rounded-full bg-secondary/10 flex items-center text-secondary px-3 py-0.5">
                  <IoIosTrendingUp />
                  <p>+12.4%</p>
                </div>
              </div>
            </div>
          </div>
          <RevenuePerformanceChart labels={labels} data={revenueData} />
        </div>
        <div className="col-span-1 p-6 flex flex-col gap-6 border border-border rounded-xl bg-bg/60">
          <div className="flex items-start justify-between">
            <h2 className="text-lg font-medium">Category Split</h2>
            <IoEllipsisVerticalSharp />
          </div>
          <SalesDistributionChart products={categoryProducts} />
        </div>
        <div className="col-span-1 flex flex-col gap-2 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-text">New Customers</h2>
            <p className="text-xs text-secondary tracking-wide">+2.4k</p>
          </div>
          <NewCustomersChart data={data} labels={labels} />
        </div>
        <div className="col-span-2 flex flex-col gap-6">
          <h2 className="text-lg font-medium text-text">Product Performance</h2>

          <div className="grid grid-cols-2 gap-4">
            {topProducts.map((product) => (
              <div
                key={product.id}
                className="bg-surface p-4 flex items-center gap-4 border border-border rounded-xl w-full"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />

                <div className="flex flex-col items-start">
                  <h3 className="text-base font-bold text-text">
                    {product.title}
                  </h3>
                  <p className="text-text-muted tracking-wide font-medium text-xs">
                    Top Seller this month
                  </p>
                </div>

                <div className="flex flex-col gap-1 items-center">
                  <p className="text-base text-secondary font-bold">
                    ${product.revenue.toLocaleString()}
                  </p>
                  <p className="tracking-wide text-xs font-medium">
                    {product.sales} sales
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-6 border border-border rounded-xl p-6 bg-surface/30">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-text">
              Recent Customer Growth Activity
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadCSV}
                className="p-2 rounded-md border border-border bg-surface hover:bg-surface/70 transition"
              >
                <MdOutlineFileDownload />
              </button>
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
              {paginatedCustomers.map((customer) => (
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
          <div className="flex items-center justify-between mt-4 text-sm text-text-muted">
            <p>
              Page {currentPage} of {totalPages}
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg border border-border hover:bg-white/5 disabled:opacity-50"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`h-9 w-9 rounded-lg border ${
                    currentPage === i + 1
                      ? "bg-primary text-bg"
                      : "border-border hover:bg-white/5"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg border border-border hover:bg-white/5 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
