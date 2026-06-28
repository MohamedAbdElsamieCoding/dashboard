import { useState } from "react";
import {
  IoMailOutline,
  IoNotificationsOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { LuLogOut, LuSettings } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  onSearch: (value: string) => void;
}

const Navbar = ({ onSearch }: NavbarProps) => {
  const [dropDownItems, setDropDownItems] = useState(false);
  const navigate = useNavigate();

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
        <IoNotificationsOutline className="cursor-pointer hover:text-primary transition-colors" />
        <IoMailOutline className="cursor-pointer hover:text-primary transition-colors" />
        <div className="h-10 w-0.5 bg-border" />
        <button
          className="relative cursor-default"
          onClick={() => setDropDownItems((prev) => !prev)}
        >
          <img
            src="/man.png"
            alt="profile"
            className="h-10 w-10 rounded-full border-2 border-border"
          />
          {dropDownItems && (
            <div className="absolute flex flex-col gap-6 items-start z-50 right-0 mt-2 border border-border rounded-2xl bg-bg/90 p-4 w-40">
              <div className="flex flex-col border-b border-border w-full">
                <h2 className="text-sm font-bold text-start">John Doe</h2>
                <p className="text-xs font-medium pb-2 text-start">
                  johndoe@email.com
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
