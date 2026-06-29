import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";
import { ProtectedRoute } from "../services/ProtectLayout";
import LoginPage from "../components/pages/login/LoginPage";
import DashboardPage from "../components/pages/dashboard/DashboardPage";
import ProductsPage from "../components/pages/products/ProductsPage";
import UsersPage from "../components/pages/orders/OrdersPage";
import AnalyticsPage from "../components/pages/analytics/AnalyticsPage";
import SettingsPage from "../components/pages/settings/SettingsPage";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
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
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export default router;
