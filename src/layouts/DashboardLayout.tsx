import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Navbar />
        <section className="flex-1 p-6">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default DashboardLayout;
