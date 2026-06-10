import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col ml-64">
        <Navbar />
        <section className="flex-1 p-10">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default DashboardLayout;
