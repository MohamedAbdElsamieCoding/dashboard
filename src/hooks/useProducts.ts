import { useQuery } from "@tanstack/react-query";
import { getProducts, type ProductsWithRevenue } from "../services/products";
import type { ProductsResponse } from "../types/products.type";

export const useProducts = (search = "") => {
  return useQuery<ProductsResponse, Error, ProductsWithRevenue>({
    queryKey: ["products", search],
    queryFn: () => getProducts(search),

    select: (data) => ({
      ...data,
      totalRevenue: data.products.reduce(
        (acc, product) => acc + product.price * product.stock,
        0,
      ),
    }),
  });
};
