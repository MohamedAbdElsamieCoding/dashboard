import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../services/products/addProducts";
import { toast } from "sonner";

export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      toast.success("Product added successfully");
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },

    onError: () => {
      toast.error("Failed to add product");
    },
  });
};
