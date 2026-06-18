import type { UsersResponse } from "../types/users.type";
import { api } from "./api";

export const getUsers = async (): Promise<UsersResponse> => {
  const { data } = await api.get<UsersResponse>("/users");
  return data;
};
