import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-linear-to-b from-bg via-secondary/50 to-surface blur-3xl opacity-30" />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
