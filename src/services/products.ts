import type { ProductsResponse } from "../types/products.type";
import { api } from "./api";

export const getProducts = async (): Promise<ProductsResponse> => {
  const { data } = await api.get<ProductsResponse>("/products");
  return data;
};
