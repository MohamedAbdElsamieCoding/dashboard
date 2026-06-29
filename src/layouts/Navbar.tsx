import { useState } from "react";
import {
  IoMailOutline,
  IoNotificationsOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { LuLogOut, LuSettings } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";

interface NavbarProps {
  onSearch: (value: string) => void;
}

const Navbar = ({ onSearch }: NavbarProps) => {
  const [dropDownItems, setDropDownItems] = useState(false);
  const [activePanel, setActivePanel] = useState<"notifications" | "messages" | null>(null);
  const navigate = useNavigate();
  const { data: userData } = useUsers();
  const user = userData?.users?.[0];

  const notifications = [
    { id: 1, title: "New order received", time: "5 min ago", unread: true },
    { id: 2, title: "Inventory alert", time: "1 hour ago", unread: false },
    { id: 3, title: "Payment confirmed", time: "3 hours ago", unread: true },
  ];

  const messages = [
    { id: 1, title: "Design review", preview: "Please confirm the latest changes", time: "12 min ago", unread: true },
    { id: 2, title: "Team update", preview: "Weekly report is ready to review", time: "2 hours ago", unread: false },
  ];

  const unreadNotifications = notifications.filter((item) => item.unread).length;
  const unreadMessages = messages.filter((item) => item.unread).length;

  const togglePanel = (panel: "notifications" | "messages") => {
    setDropDownItems(false);
    setActivePanel((current) => (current === panel ? null : panel));
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-border px-6">
      <form className="border border-border rounded-full flex items-center px-3 py-2 bg-neutral-950 w-1/2">
        <IoSearchOutline className="text-xl text-text-muted" />
        <input
          type="text"
          onChange={(e) => onSearch(e.target.value)}
          className="px-2 bg-transparent focus:outline-0 text-text w-full"
          placeholder="Search by products..."
        />
      </form>
      <div className="flex gap-6 items-center text-xl">
        <div className="relative">
          <button
            type="button"
            onClick={() => togglePanel("notifications")}
            className="cursor-pointer transition-colors hover:text-primary"
          >
            <IoNotificationsOutline />
          </button>
          {activePanel !== "notifications" && unreadNotifications > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              {unreadNotifications}
            </span>
          )}
          {activePanel === "notifications" && (
            <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-border bg-bg/95 p-3 shadow-lg z-50">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-text">Notifications</h3>
                <span className="text-xs text-text-muted">{unreadNotifications} new</span>
              </div>
              <div className="flex flex-col gap-2">
                {notifications.map((item) => (
                  <div key={item.id} className="rounded-lg border border-border/60 bg-surface/50 p-2">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-text">{item.title}</p>
                      {item.unread && <span className="mt-1 h-2 w-2 rounded-full bg-primary" />}
                    </div>
                    <p className="text-xs text-text-muted">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => togglePanel("messages")}
            className="cursor-pointer transition-colors hover:text-primary"
          >
            <IoMailOutline />
          </button>
          {activePanel !== "messages" && unreadMessages > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
              {unreadMessages}
            </span>
          )}
          {activePanel === "messages" && (
            <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-border bg-bg/95 p-3 shadow-lg z-50">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-text">Messages</h3>
                <span className="text-xs text-text-muted">{unreadMessages} unread</span>
              </div>
              <div className="flex flex-col gap-2">
                {messages.map((item) => (
                  <div key={item.id} className="rounded-lg border border-border/60 bg-surface/50 p-2">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-text">{item.title}</p>
                      {item.unread && <span className="mt-1 h-2 w-2 rounded-full bg-primary" />}
                    </div>
                    <p className="text-xs text-text-muted">{item.preview}</p>
                    <p className="text-[11px] text-text-muted/70">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="h-10 w-0.5 bg-border" />
        <button
          className="relative cursor-default"
          onClick={() => {
            setActivePanel(null);
            setDropDownItems((prev) => !prev);
          }}
        >
          <img
            src={user?.image}
            alt="profile"
            className="h-10 w-10 rounded-full border-2 border-border"
          />
          {dropDownItems && (
            <div className="absolute flex flex-col gap-6 items-start z-50 right-0 mt-2 border border-border rounded-2xl bg-bg/90 p-4 w-40">
              <div className="flex flex-col border-b border-border w-full">
                <h2 className="text-sm font-bold text-start">{`${user?.firstName} ${user?.lastName}`}</h2>
                <p className="text-xs font-medium pb-2 text-start break-all">
                  {user?.email}
                </p>
              </div>

              <button
                onClick={() => navigate("/settings")}
                className="flex items-center justify-start gap-3 w-full"
              >
                <LuSettings className="font-bold text-sm" />
                <p className="text-sm font-medium">Setting</p>
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  setDropDownItems(false);
                  navigate("/login", { replace: true });
                }}
                className="flex items-center justify-start gap-3 w-full"
              >
                <LuLogOut className="font-bold text-sm text-red-700" />
                <p className="text-sm font-medium text-red-700">Logout</p>
              </button>
            </div>
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
