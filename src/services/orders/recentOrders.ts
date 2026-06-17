import type { Customer, Order } from "../../types/types";

export const recentOrders: Order[] = [
  {
    id: "#1001",
    customer: "Ahmed Ali",
    date: "2026-06-08",
    status: "Completed",
    amount: 120,
  },
  {
    id: "#1002",
    customer: "Sara Mohamed",
    date: "2026-06-07",
    status: "Pending",
    amount: 80,
  },
  {
    id: "#1003",
    customer: "Omar Hassan",
    date: "2026-06-06",
    status: "Cancelled",
    amount: 200,
  },
  {
    id: "#1004",
    customer: "Mariam Adel",
    date: "2026-06-05",
    status: "Completed",
    amount: 40,
  },
];

export const customers: Customer[] = [
  {
    id: "1",
    customer: "Ahmed Ali",
    source: "Website",
    lifetimeValue: "$1,250",
    status: "Active",
    activity: "2 hours ago",
  },
  {
    id: "2",
    customer: "Sara Mohamed",
    source: "Facebook Ads",
    lifetimeValue: "$980",
    status: "Active",
    activity: "Yesterday",
  },
  {
    id: "3",
    customer: "Omar Hassan",
    source: "Instagram",
    lifetimeValue: "$2,430",
    status: "VIP",
    activity: "5 mins ago",
  },
  {
    id: "4",
    customer: "Mariam Khaled",
    source: "Referral",
    lifetimeValue: "$650",
    status: "Inactive",
    activity: "3 days ago",
  },
  {
    id: "5",
    customer: "Youssef Adel",
    source: "Google Ads",
    lifetimeValue: "$3,120",
    status: "VIP",
    activity: "1 hour ago",
  },
];
