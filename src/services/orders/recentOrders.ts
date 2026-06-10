import type { Order } from "../../types/types";

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
];
