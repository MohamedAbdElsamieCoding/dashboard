import { useState } from "react";
import { useAddProduct } from "../../../hooks/useAddProduct";
import { IoClose } from "react-icons/io5";

interface AddProductFormProps {
  onClose: () => void;
}

const AddProductForm = ({ onClose }: AddProductFormProps) => {
  const addProductMutation = useAddProduct();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addProductMutation.mutate(
      {
        title,
        price: Number(price),
      },
      {
        onSuccess: () => {
          onClose();
        },
      },
    );
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="relative bg-surface p-8 rounded-xl w-96">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          <IoClose size={24} />
        </button>
        <form onSubmit={handleSubmit} className="p-2 flex flex-col gap-2">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-1 rounded-lg"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-1 rounded-lg"
          />

          <button
            className="bg-primary rounded-lg text-surface p-1 mt-2"
            type="submit"
            disabled={addProductMutation.isPending || !title.trim() || !price}
          >
            {addProductMutation.isPending ? "Adding..." : "Confirm"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
