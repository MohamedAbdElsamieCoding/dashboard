import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../components/pages/DashboardPage/DashboardPage";
import ProductsPage from "../components/pages/ProductsPage/ProductsPage";
import UsersPage from "../components/pages/OrdersPage/OrdersPage";
import AnalyticsPage from "../components/pages/AnalyticsPage/AnalyticsPage";
import SettingsPage from "../components/pages/SettingsPage/SettingsPage";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import AuthLayout from "../layouts/AuthLayout";
import { ProtectedRoute } from "../services/ProtectLayout";

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
