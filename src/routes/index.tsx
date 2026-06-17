import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../components/pages/DashboardPage/DashboardPage";
import ProductsPage from "../components/pages/ProductsPage/ProductsPage";
import UsersPage from "../components/pages/OrdersPage/OrdersPage";
import AnalyticsPage from "../components/pages/AnalyticsPage/AnalyticsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "orders",
        element: <UsersPage />,
      },
      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
    ],
  },
]);

export default router;
