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
    { title: "Users", link: "/users", icon: RiUser3Line },
    { title: "Analytics", link: "/analytics", icon: RiBarChart2Line },
  ];

  return (
    <aside className="w-64 border-r-border pt-6 px-6">
      <div className="mb-10 flex flex-col gap-2">
        <h2 className="text-2xl font-bold font-sans tracking-tight text-primary">
          Vertex
        </h2>
        <p className="font-sans font-semibold text-xs tracking-widest text-text-muted">
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
              <p className="font-sans text-sm font-medium tracking-[0.24px]">
                {item.title}
              </p>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
