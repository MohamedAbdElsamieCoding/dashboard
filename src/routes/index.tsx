import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../components/pages/DashboardPage/DashboardPage";
import ProductsPage from "../components/Pages/ProductsPage";
import UsersPage from "../components/Pages/UsersPage";
import AnalyticsPage from "../components/Pages/AnalyticsPage";

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
        path: "users",
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
