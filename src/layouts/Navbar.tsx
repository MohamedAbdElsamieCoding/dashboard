import {
  IoMailOutline,
  IoNotificationsOutline,
  IoSearchOutline,
} from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border px-6">
      <div className="border border-border rounded-full flex items-center px-3 py-2 bg-neutral-950">
        <IoSearchOutline className="text-xl" />
        <input
          type="text"
          className="px-2 focus:outline-0 text-text"
          placeholder="Search analytics data..."
        />
      </div>
      <div className="flex gap-6 items-center text-xl">
        <IoNotificationsOutline />
        <IoMailOutline />
        <div className="h-10 w-0.5 bg-border" />
        <img
          src="/man.png"
          alt="profile"
          className="h-10 w-10 rounded-full border-2 border-border"
        />
      </div>
    </header>
  );
};

export default Navbar;
