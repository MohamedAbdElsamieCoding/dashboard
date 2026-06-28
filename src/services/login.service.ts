import type { LoginPayload, LoginResponse } from "../types/login.type";
import { api } from "./api";

export const login = async (credentials: LoginPayload) => {
  const { data } = await api.post<LoginResponse>("/auth/login", credentials);
  return data;
};
