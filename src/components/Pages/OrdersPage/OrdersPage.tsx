import { clsx } from "clsx";
import { useMemo, useState } from "react";
import {
  IoCalendarClearOutline,
  IoAdd,
  IoFilterOutline,
} from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useCarts } from "../../../hooks/useCarts";
import { LuEllipsisVertical } from "react-icons/lu";
import CreateOrderForm from "./CreateOrderForm";

const UsersPage = () => {
  type AmountFilter = "all" | "under100" | "100to500" | "over500";

  const [activeTab, setActiveTab] = useState("All Orders");
  const [dateRange, setDateRange] = useState("Last 30 Days");
  const [isOpen, setIsOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [amountFilter, setAmountFilter] = useState<AmountFilter>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCreateOrderOpen, setIsCreateOrderOpen] = useState(false);

  const { data: cartData } = useCarts();
  const baseDate = new Date("2026-06-22").getTime();

  const orders = useMemo(
    () =>
      cartData?.carts.map((cart) => ({
        ...cart,
        createdAt: new Date(baseDate - cart.id * 86400000).toISOString(),
        status: ["Pending", "Processing", "Shipped", "Delivered"][cart.id % 4],
      })) ?? [],
    [baseDate, cartData?.carts],
  );

  const filteredOrders = useMemo(() => {
    let result = orders;

    if (activeTab !== "All Orders") {
      result = result.filter((order) => order.status === activeTab);
    }

    switch (amountFilter) {
      case "under100":
        result = result.filter((order) => order.total < 100);
        break;

      case "100to500":
        result = result.filter(
          (order) => order.total >= 100 && order.total <= 500,
        );
        break;

      case "over500":
        result = result.filter((order) => order.total > 500);
        break;

      default:
        break;
    }

    return result;
  }, [orders, activeTab, amountFilter]);

  const ITEMS_PER_PAGE = 10;

  const totalOrders = filteredOrders.length;

  const totalPages = Math.max(1, Math.ceil(totalOrders / ITEMS_PER_PAGE));

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const startIndex =
    totalOrders === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1;

  const endIndex = Math.min(currentPage * ITEMS_PER_PAGE, totalOrders);

  const statusStyles = {
    Pending: "bg-yellow-500/10 text-yellow-500",
    Processing: "bg-blue-500/10 text-blue-500",
    Shipped: "bg-purple-500/10 text-purple-500",
    Delivered: "bg-green-500/10 text-green-500",
  };

  const catOrders = [
    { title: "All Orders" },
    { title: "Pending" },
    { title: "Processing" },
    { title: "Delivered" },
  ];

  const tableHeaders = [
    "ORDER #",
    "CUSTOMER",
    "DATE",
    "AMOUNT",
    "STATUS",
    "ACTIONS",
  ];

  const ranges = [
    "Today",
    "Last 7 Days",
    "Last 30 Days",
    "This Month",
    "This Year",
  ];

  return (
    <div className="flex flex-col gap-10">
      {isCreateOrderOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-bg border border-border rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Create Order</h2>

            <CreateOrderForm
              isOpen={isCreateOrderOpen}
              onClose={() => setIsCreateOrderOpen(false)}
            />
          </div>
        </div>
      )}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-3xl tracking-tighter text-text">
            Orders
          </h1>
          <p className="font-normal text-base text-text-muted">
            Manage and track your customer transactions across all channels.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 flex items-center justify-center gap-2 bg-[#292932] border border-border rounded-lg text-text"
            >
              <IoCalendarClearOutline className="text-sm" />
              <p className="tracking-wide text-xs font-medium">{dateRange}</p>
            </button>
            {isOpen && (
              <div className="absolute top-full mt-2 right-0 w-48 bg-bg/90 border border-border rounded-lg shadow-lg overflow-hidden z-50">
                {ranges.map((range) => (
                  <button
                    key={range}
                    onClick={() => {
                      setDateRange(range);
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left text-sm hover:bg-primary/50 hover:text-surface transition"
                  >
                    {range}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => setIsCreateOrderOpen(true)}
            className="px-4 py-2 flex items-center justify-center gap-2 bg-primary border border-border rounded-lg text-[#1000A9]"
          >
            <IoAdd className="text-sm" />
            <p className="tracking-wide text-xs font-medium">Create Order</p>
          </button>
        </div>
      </div>
      <div className="p-4 bg-[#292932]/50 border border-border rounded-xl flex items-center justify-between">
        <div className="p-1 bg-[#0D0D15] flex items-center gap-4 rounded-lg border border-border">
          {catOrders.map((item) => (
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
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen((prev) => !prev)}
              className="w-full flex items-center gap-3 bg-[#0D0D15] border border-border rounded-lg py-1.5 px-3"
            >
              <IoFilterOutline />

              <span className="text-sm">
                {amountFilter === "all" && "All Amounts"}
                {amountFilter === "under100" && "Under $100"}
                {amountFilter === "100to500" && "$100 - $500"}
                {amountFilter === "over500" && "Over $500"}
              </span>
            </button>

            {isFilterOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-[#0D0D15] border border-border rounded-lg overflow-hidden z-50">
                <button
                  onClick={() => {
                    setAmountFilter("all");
                    setIsFilterOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-primary/20"
                >
                  All Amounts
                </button>

                <button
                  onClick={() => {
                    setAmountFilter("under100");
                    setIsFilterOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-primary/20"
                >
                  Under $100
                </button>

                <button
                  onClick={() => {
                    setAmountFilter("100to500");
                    setIsFilterOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-primary/20"
                >
                  $100 - $500
                </button>

                <button
                  onClick={() => {
                    setAmountFilter("over500");
                    setIsFilterOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-primary/20"
                >
                  Over $500
                </button>
              </div>
            )}
          </div>
          <FiDownload />
        </div>
      </div>
      <div className="border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-[#292932]/50">
              {tableHeaders.map((header) => (
                <th
                  key={header}
                  className="px-6 py-4 text-left text-xs font-medium tracking-wider text-text-muted"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-border last:border-none"
              >
                <td className="px-6 py-4">{order.id}</td>

                <td className="px-6 py-4">{order.userId}</td>

                <td className="px-6 py-4 text-text-muted">
                  {new Date(order.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>

                <td className="px-6 py-4 font-medium">
                  ${order.total.toFixed(2)}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={clsx(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      statusStyles[order.status as keyof typeof statusStyles],
                    )}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="px-6 py-4 relative">
                  <button
                    onClick={() =>
                      setOpenMenuId(openMenuId === order.id ? null : order.id)
                    }
                    className="rounded-lg hover:bg-white/5"
                  >
                    <LuEllipsisVertical size={20} />
                  </button>
                  {openMenuId === order.id && (
                    <div className="absolute right-6 top-10 w-32 bg-[#1f1f28] border border-border rounded-lg shadow-lg overflow-hidden z-10">
                      <button
                        onClick={() => {
                          setOpenMenuId(null);
                        }}
                        className="w-full text-left px-4 py-1 text-sm hover:bg-white/5"
                      >
                        View
                      </button>

                      <button
                        onClick={() => {
                          setOpenMenuId(null);
                        }}
                        className="w-full text-left px-4 py-1 text-sm hover:bg-white/5"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          setOpenMenuId(null);
                        }}
                        className="w-full text-left px-4 py-1 text-sm text-red-400 hover:bg-red-500/10"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-[#292932]/50 p-6 border-t border-border flex justify-between items-center">
          <p className="text-text-muted text-xs tracking-wide">
            Showing {startIndex}-{endIndex} of {totalOrders} orders
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-md border border-border disabled:opacity-50"
            >
              <IoIosArrowBack />
            </button>

            <span className="text-sm text-text">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded-md border border-border disabled:opacity-50"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
