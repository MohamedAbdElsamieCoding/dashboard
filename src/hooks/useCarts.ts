import { useQuery } from "@tanstack/react-query";
import { getCarts } from "../services/carts";
import type { CartsResponse } from "../types/carts.type";

export const useCarts = () => {
  return useQuery<CartsResponse>({
    queryKey: ["carts"],
    queryFn: getCarts,
  });
};
