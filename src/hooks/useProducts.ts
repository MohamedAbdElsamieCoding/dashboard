import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/products";
import type { ProductsResponse } from "../types/products.type";

export const useProducts = () => {
  return useQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: getProducts,
    select: (data) => {
      const totalRevenue = data.products.reduce((acc, product) => {
        return acc + product.price * product.stock;
      }, 0);
      return {
        ...data,
        totalRevenue,
      };
    },
  });
};
