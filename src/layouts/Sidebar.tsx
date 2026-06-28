import { NavLink } from "react-router-dom";
import {
  RiDashboardHorizontalLine,
  RiBox3Line,
  RiUser3Line,
  RiBarChart2Line,
} from "react-icons/ri";
import { clsx } from "clsx";

const Sidebar = () => {
  const navLinks = [
    { title: "Dashboard", link: "/", icon: RiDashboardHorizontalLine },
    { title: "Products", link: "/products", icon: RiBox3Line },
    { title: "Orders", link: "/orders", icon: RiUser3Line },
    { title: "Analytics", link: "/analytics", icon: RiBarChart2Line },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border pt-6 px-6 bg-surface flex flex-col">
      <div className="mb-10 flex flex-col gap-2 cursor-default">
        <h2 className="text-2xl font-bold tracking-tight text-primary">
          Vertex
        </h2>
        <p className="font-semibold text-xs tracking-widest text-text-muted">
          Admin Console
        </p>
      </div>

      <nav className="flex flex-col gap-6">
        {navLinks.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              className={({ isActive }) =>
                clsx(
                  "flex items-center gap-2 px-4 py-2 rounded transition",
                  isActive
                    ? "bg-primary text-black"
                    : "text-text-muted hover:bg-surface",
                )
              }
              key={item.title}
              to={item.link}
            >
              <Icon size={18} />
              <p className="text-sm font-medium tracking-[0.24px]">
                {item.title}
              </p>
            </NavLink>
          );
        })}
      </nav>
      <div className="-mx-6 mt-auto cursor-default select-none">
        <div className="w-full h-0.5 bg-border" />
        <div className="py-6 px-6 flex gap-4 items-center">
          <div className="rounded-full h-10 w-10 bg-primary flex items-center justify-center">
            <p className="text-base font-bold text-[#0D0096]">JD</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-xs font-bold tracking-wider">John Doe</h3>
            <p className="uppercase font-normal text-[10px] tracking-wide">
              SUPER ADMIN
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
