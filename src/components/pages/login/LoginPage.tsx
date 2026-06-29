import { MdWindow } from "react-icons/md";
import { useLogin } from "../../../hooks/useLogin";
import { LuLogIn } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import type { LoginPayload } from "../../../types/login.type";
import { useForm } from "react-hook-form";
import axios from "axios";

const LoginPage = () => {
  const { mutate, isPending } = useLogin();
  const { register, handleSubmit } = useForm<LoginPayload>();

  const navigate = useNavigate();
  const onSubmit = (data: LoginPayload) => {
    mutate(data, {
      onSuccess: (user) => {
        console.log(user);

        const isAdmin = user.email === "emily.johnson@x.dummyjson.com";

        if (!isAdmin) {
          alert("Access denied. Admin only.");
          return;
        }

        localStorage.setItem("token", user.accessToken);
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/", { replace: true });
      },

      onError: (error) => {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data);
        }
      },
    });
  };

  return (
    <div className="relative z-10 text-center flex flex-col items-center gap-10">
      <div className="flex flex-col gap-2 items-center">
        <div className="bg-[#6366F1] rounded-xl p-2 w-fit">
          <MdWindow className="text-2xl" />
        </div>
        <h1 className="text-text text-2xl tracking-tighter font-semibold">
          Vertex
        </h1>
        <h2 className="text-text-muted text-sm font-normal">
          Enterprise Admin Environment
        </h2>
      </div>
      <div className="flex flex-col p-10 gap-6 items-start border border-border rounded-2xl bg-surface/50">
        <h3 className="text-lg font-medium text-text">
          Sign in to your account
        </h3>
        <p className="text-text-muted text-xs tracking-wide">
          Please enter your credentials to access the console
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start gap-4 w-full"
        >
          <div className="flex flex-col gap-1 items-start w-full">
            <label>useName</label>
            <input
              type="text"
              className="px-4 py-3 select-none rounded-xl bg-bg border border-border w-full"
              placeholder="Username"
              {...register("username")}
            />
          </div>
          <div className="flex flex-col gap-1 items-start w-full">
            <label>Password</label>
            <input
              type="password"
              className="px-4 py-3 select-none rounded-xl bg-bg border border-border w-full"
              placeholder="*********"
              {...register("password")}
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center gap-2 justify-center bg-linear-to-r from-[#5b5ef2] to-[#6366F1] rounded-xl py-1"
            disabled={isPending}
          >
            <p className="font-medium text-lg">
              {isPending ? "Signing in..." : "Sign In"}
            </p>
            <LuLogIn className="text-xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
