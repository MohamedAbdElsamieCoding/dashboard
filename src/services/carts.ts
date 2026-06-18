import type { CartsResponse } from "../types/carts.type";
import { api } from "./api";

export const getCarts = async (): Promise<CartsResponse> => {
  const { data } = await api.get<CartsResponse>("/carts");
  return data;
};
