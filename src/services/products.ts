import type { ProductsResponse } from "../types/products.type";
import { api } from "./api";
export type ProductsWithRevenue = ProductsResponse & {
  totalRevenue: number;
};
export const getProducts = async (
  search: string = "",
): Promise<ProductsResponse> => {
  const endpoint = search ? `/products/search?q=${search}` : "/products";
  const { data } = await api.get<ProductsResponse>(endpoint);
  return data;
};
