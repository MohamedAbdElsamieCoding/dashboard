export type OrderStatus = "Completed" | "Pending" | "Cancelled";

export interface RevenueData {
  month: string;
  revenue: number;
}

export interface DailySalesData {
  day: string;
  sales: number;
}

export interface Order {
  id: string;
  customer: string;
  date: string;
  status: OrderStatus;
  amount: number;
}

export type Customer = {
  id: string;
  customer: string;
  source: string;
  lifetimeValue: string;
  status: "Active" | "Inactive" | "VIP";
  activity: string;
};
