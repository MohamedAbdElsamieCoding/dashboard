import type { Order } from "../../../types/types";

interface Props {
  data: Order[];
}

const statusStyles = {
  Completed: "bg-green-500/10 text-green-400",
  Pending: "bg-yellow-500/10 text-yellow-400",
  Cancelled: "bg-red-500/10 text-red-400",
};

const RecentOrders = ({ data }: Props) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-xs text-gray-400 border-b border-border">
            <th className="py-3">Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>

        <tbody>
          {data.map((order) => (
            <tr
              key={order.id}
              className="border-b border-border hover:bg-bg/40 transition"
            >
              <td className="py-4 font-medium">{order.id}</td>
              <td>{order.customer}</td>
              <td className="text-text-muted">{order.date}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    statusStyles[order.status]
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="text-right font-medium">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(order.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
