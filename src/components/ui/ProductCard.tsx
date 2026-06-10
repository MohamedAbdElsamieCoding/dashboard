import { PiTrendUpThin } from "react-icons/pi";

const ProductCard = () => {
  return (
    <div className="p-4 flex gap-6 bg-[#1B1B23] border border-border rounded-xl items-center">
      <img src="/product.png" alt="product" className="rounded-lg h-16 w-16" />
      <div className="flex flex-col gap-2 w-full">
        <h3 className="text-text tracking-wide text-xs font-medium">
          OmniBook Pro M3
        </h3>
        <p className="text-[10px] text-text-muted font-normal">
          Electronics •<span> 842 sales</span>
        </p>
        <div className="flex justify-between items-center text-secondary">
          <p className="text-base font-mono font-normal">$1,499</p>
          <div className="flex items-center">
            <p className="text-[10px] font-normal">14%</p>
            <PiTrendUpThin width={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
