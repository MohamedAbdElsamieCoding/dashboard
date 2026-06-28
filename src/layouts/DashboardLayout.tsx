import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const handleSearch = (value: string) => {
    navigate(`/products?search=${encodeURIComponent(value)}`, {
      replace: true,
    });
  };

  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col ml-64">
        <Navbar onSearch={handleSearch} />
        <section className="flex-1 p-10">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default DashboardLayout;
