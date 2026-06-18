import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/users";
import type { UsersResponse } from "../types/users.type";

export const useUsers = () => {
  return useQuery<UsersResponse>({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};
