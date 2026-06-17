import { clsx } from "clsx";
import { useState } from "react";
import {
  IoCalendarClearOutline,
  IoAdd,
  IoFilterOutline,
} from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { recentOrders } from "../../../services/orders/recentOrders";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const UsersPage = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  const catOrders = [
    { title: "All Orders" },
    { title: "Pending" },
    { title: "Processing" },
    { title: "Delivered" },
    { title: "Cancelled" },
  ];

  const tableHeaders = [
    "ORDER #",
    "CUSTOMER",
    "DATE",
    "AMOUNT",
    "STATUS",
    "ACTIONS",
  ];

  return (
    <div className="flex flex-col gap-10">
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
          <button className="px-4 py-2 flex items-center justify-center gap-2 bg-[#292932] border border-border rounded-lg text-text">
            <IoCalendarClearOutline className="text-sm" />
            <p className="tracking-wide text-xs font-medium">Date Range</p>
          </button>
          <button className="px-4 py-2 flex items-center justify-center gap-2 bg-primary border border-border rounded-lg text-[#1000A9]">
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
          <div className="flex items-center gap-3 bg-[#0D0D15] border border-border rounded-lg py-1.5 px-3">
            <IoFilterOutline />
            <select name="filters" id="filters">
              <option value="more">More Filters</option>
            </select>
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
            {recentOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-border last:border-none"
              >
                <td className="px-6 py-4">{order.id}</td>

                <td className="px-6 py-4">{order.customer}</td>

                <td className="px-6 py-4 text-text-muted">
                  {new Date(order.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>

                <td className="px-6 py-4 font-medium">
                  ${order.amount.toFixed(2)}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={clsx(
                      "rounded-full px-3 py-1 text-xs font-medium",
                      {
                        "bg-green-500/10 text-green-500":
                          order.status === "Completed",

                        "bg-yellow-500/10 text-yellow-500":
                          order.status === "Pending",

                        "bg-red-500/10 text-red-500":
                          order.status === "Cancelled",
                      },
                    )}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-[#292932]/50 p-6  border-t border-border flex justify-between items-center">
          <p className="text-text-muted text-xs tracking-wide">
            Showing 1-10 of 1,240 orders
          </p>
          <div className="flex items-center gap-2">
            <IoIosArrowBack />
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
