import { api } from "../api";

export const addProduct = async (productData: {
  title: string;
  price: number;
}) => {
  const res = await api.post("/products/add", productData);
  return res;
};
