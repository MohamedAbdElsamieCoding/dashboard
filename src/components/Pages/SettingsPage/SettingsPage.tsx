import { GoPencil } from "react-icons/go";
import { LuCloudUpload, LuCircleAlert, LuMap } from "react-icons/lu";

const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-start justify-start gap-1">
        <h1 className="text-text tracking-tight text-3xl font-semibold">
          Settings
        </h1>
        <p className="text-text text-sm font-normal">
          Manage your account configurations and system preferences.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 p-6 flex flex-col gap-6 bg-surface/50 rounded-xl border border-border">
          <div className="flex items-center gap-4">
            <GoPencil className="text-base text-primary" />
            <h2 className="text-lg text-text">Edit Profile</h2>
          </div>
          <form className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-text-muted text-xs font-medium">
                Full Name
              </label>
              <input
                type="text"
                className="bg-bg px-4 py-2 rounded-lg w-full outline-none"
                placeholder="Enter your name..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-text-muted text-xs font-medium">
                Email Address
              </label>
              <input
                type="email"
                className="bg-bg px-4 py-2 rounded-lg w-full outline-none"
                placeholder="alex.rivera@omnidash.io"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-text-muted text-xs font-medium">
                Job Title
              </label>
              <input
                type="text"
                className="bg-bg px-4 py-2 rounded-lg w-full outline-none"
                placeholder="System Admin"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-text-muted text-xs font-medium">
                Organization
              </label>
              <input
                type="text"
                className="bg-bg px-4 py-2 rounded-lg w-full outline-none"
                placeholder="Vertex Global Ops"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-text-muted text-xs font-medium">
                Current Password
              </label>
              <input
                type="password"
                className="bg-bg px-4 py-2 rounded-lg w-full outline-none"
                placeholder="*****************"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-text-muted text-xs font-medium">
                New Password
              </label>
              <input
                type="password"
                className="bg-bg px-4 py-2 rounded-lg w-full outline-none"
                placeholder="*****************"
              />
            </div>
          </form>
          <div className="relative p-4 flex flex-col gap-2 items-center justify-center bg-bg rounded-lg cursor-pointer">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-non"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="16 12"
                className="text-text-muted/10"
              />
            </svg>
            <LuCloudUpload className="relative z-10 text-primary text-xl" />
            <p className="relative z-10 text-xs text-text-muted tracking-wide font-medium">
              Click to upload or drag and drop a new avatar
            </p>
            <p className="relative z-10 text-[10px] tracking-widest text-text-muted/50 font-bold">
              PNG, JPG up to 5MB
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <div className="p-6 bg-surface/50 rounded-xl border border-border flex flex-col items-start gap-4">
            <h2 className="text-text text-base font-normal">Storage Usage</h2>
            <h3 className="tracking-tighter text-primary text-5xl font-bold text-end">
              64 <span className="text-lg">%</span>
            </h3>
            <div className="w-full bg-text/20 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: "75%" }}
              />
            </div>
          </div>
          <div className="p-6 bg-surface/50 rounded-xl border border-border flex flex-col items-start gap-4">
            <h2 className="font-normal text-base text-text">
              PLATFORM ACTIVITY
            </h2>
            <h3 className="tracking-tighter text-primary text-sm font-bold text-end">
              Uptime Responsibility
            </h3>
            <div className="w-full bg-text/20 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: "95%" }}
              />
            </div>
            <h3 className="tracking-tighter text-secondary text-sm font-bold text-end">
              Daily Logins
            </h3>
            <div className="w-full bg-text/20 rounded-full h-2">
              <div
                className="bg-secondary h-2 rounded-full"
                style={{ width: "99%" }}
              />
            </div>
            <div className="h-0.5 w-5/6 mt-2 bg-text-muted/10 self-center rounded-full" />
            <p className="text-xs text-text-muted font-normal self-center">
              Member since November 2021
            </p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-start justify-start gap-6 p-6 bg-surface/50 rounded-xl border border-border">
          <div className="flex items-center gap-2">
            <LuCircleAlert className="text-xl text-primary" />
            <h2 className="text-lg text-text font-bold">
              Personal Information
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium tracking-wide text-xs">Bio</h3>
            <div className="border border-border rounded-lg px-4 py-2 bg-bg">
              <p className="text-text text-base font-normal">
                Seasoned system administrator with 8+ years of experience in
                managing high-availability server infrastructures and
                cloud-native applications. Passionate about automating workflows
                and optimizing dashboard performance for enterprise-level
                logistics platforms.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-text-muted text-xs tracking-wide">Location</p>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg border border-border/20">
                <LuMap className="text-text text-base" />
                <p className="text-text text-base">San Francisco, CA</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-text-muted text-xs tracking-wide">Timezone</p>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg border border-border/20">
                <p className="text-text text-base">PST (UTC-08:00)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
