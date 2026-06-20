import { PiTrendUpThin } from "react-icons/pi";
import type { Product } from "../../types/products.type";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="p-4 flex gap-6 bg-[#1B1B23] border border-border rounded-xl items-center">
      <img
        src={product.images[0]}
        alt="product"
        className="rounded-lg h-16 w-16"
      />
      <div className="flex flex-col gap-2 w-full">
        <h3 className="text-text tracking-wide text-xs font-medium">
          {product.title}
        </h3>
        <p className="text-[10px] text-text-muted font-normal">
          {product.category} •<span> {product.reviews[1].rating} review</span>
        </p>
        <div className="flex justify-between items-center text-secondary">
          <p className="text-base font-mono font-normal">${product.price}</p>
          <div className="flex items-center">
            <p className="text-[10px] font-normal">
              {product.discountPercentage}%
            </p>
            <PiTrendUpThin width={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
