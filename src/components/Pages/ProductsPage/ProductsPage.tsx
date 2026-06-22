import { clsx } from "clsx";
import { IoAdd } from "react-icons/io5";
import Card from "../../ui/Card";
import {
  LuBanknote,
  LuClipboardCheck,
  LuTriangleAlert,
  LuEllipsisVertical,
} from "react-icons/lu";
import { useMemo, useState } from "react";
import AddProductForm from "./AddProductForm";
import { useProducts } from "../../../hooks/useProducts";

const ProductsPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const [currentPage, setCurrentPage] = useState(1);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const handleFilterChange = (setter: (v: string) => void, value: string) => {
    setter(value);
    setCurrentPage(1);
  };
  const { data } = useProducts();

  const products = useMemo(() => data?.products ?? [], [data?.products]);
  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (category !== "all") {
      result = result.filter((product) => product.category === category);
    }

    // Status Filter
    if (status !== "all") {
      result = result.filter(
        (product) => product.availabilityStatus === status,
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    return result;
  }, [products, category, status, sortBy]);

  const stats = useMemo(() => {
    if (!data) {
      return {
        totalProducts: 0,
        stockValue: 0,
        reorderAlerts: 0,
      };
    }

    return {
      totalProducts: data.total,

      stockValue: data.products.reduce(
        (sum, product) => sum + product.price * product.stock,
        0,
      ),

      reorderAlerts: data.products.filter((product) => product.stock < 10)
        .length,
    };
  }, [data]);

  const clearFilters = () => {
    setCategory("all");
    setStatus("all");
    setSortBy("newest");
  };

  const categoriesOpts = [
    { title: "All Categories", value: "all" },
    { title: "Beauty", value: "beauty" },
    { title: "Furniture", value: "furniture" },
    { title: "Fragrances", value: "fragrances" },
  ];
  const statusesOpts = [
    { title: "All Statuses", value: "all" },
    { title: "In Stock", value: "In Stock" },
    { title: "Low Stock", value: "Low Stock" },
    { title: "Out of Stock", value: "Out of Stock" },
  ];
  const sortOpts = [
    { title: "Newest First", value: "newest" },
    { title: "Price: Low to High", value: "price-low" },
    { title: "Price: High to Low", value: "price-high" },
    { title: "Highest Rating", value: "rating" },
  ];

  const tableHeaders = [
    "PRODUCT",
    "SKU",
    "CATEGORY",
    "PRICE",
    "STOCK",
    "STATUS",
    "ACTIONS",
  ];

  const pageSize = 4;

  const total = filteredProducts.length;

  const totalPages = Math.ceil(total / pageSize);

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  const paginatedProducts = filteredProducts.slice(start, end);

  return (
    <div className="flex flex-col gap-10">
      {isFormOpen && <AddProductForm onClose={() => setIsFormOpen(false)} />}
      <div className="flex items-end justify-between">
        <div className="flex flex-col items-start justify-start gap-1">
          <h1 className="text-text tracking-tight text-3xl font-semibold">
            Products
          </h1>
          <p className="text-text text-sm font-normal">
            Manage your global product catalog and stock levels.
          </p>
        </div>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-primary px-4 py-2 flex items-center gap-2 text-[#1000A9] rounded-lg"
        >
          <IoAdd className="text-lg" />
          <p className="tracking-wide text-sm font-medium">Add Product</p>
        </button>
      </div>
      <div className="p-6 w-full flex items-center justify-between border border-border rounded-xl">
        <div className="flex items-center gap-4">
          <p className="tracking-wide font-medium text-xs">Filter by</p>
          <select
            name="categories"
            id="categories"
            value={category}
            onChange={(e) => handleFilterChange(setCategory, e.target.value)}
            className="border border-border px-4 py-2 text-text rounded-lg "
          >
            {categoriesOpts.map((item) => (
              <option
                key={item.value}
                className="text-surface"
                value={item.value}
              >
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-4">
          <p className="tracking-wide font-medium text-xs">Status</p>
          <select
            name="status"
            id="status"
            value={status}
            onChange={(e) => handleFilterChange(setStatus, e.target.value)}
            className="border border-border px-4 py-2 text-text rounded-lg "
          >
            {statusesOpts.map((item) => (
              <option
                key={item.value}
                className="text-surface"
                value={item.value}
              >
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-4">
          <p className="tracking-wide font-medium text-xs">Sort</p>
          <select
            name="sort"
            id="sort"
            value={sortBy}
            onChange={(e) => handleFilterChange(setSortBy, e.target.value)}
            className="border border-border px-4 py-2 text-text rounded-lg "
          >
            {sortOpts.map((item) => (
              <option
                key={item.value}
                className="text-surface"
                value={item.value}
              >
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <button
          className="text-sm hover:text-red-500 hover:underline cursor-pointer"
          onClick={clearFilters}
        >
          Clear All Filters
        </button>
      </div>
      <div className="border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-[#292932]/50">
              {tableHeaders.map((header) => (
                <th
                  key={header}
                  className="px-6 py-4 text-left text-xs font-medium tracking-wider text-text-muted"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((product) => (
              <tr
                key={product.id}
                className="border-b border-border hover:bg-white/5 transition-colors"
              >
                <td className="px-6 py-4">
                  <p className="font-medium">{product.id}</p>
                </td>
                <td className="px-6 py-4">{product.sku}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4">{product.price.toFixed(2)}$</td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4">
                  <span
                    className={clsx(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      product.availabilityStatus === "In Stock" &&
                        "bg-green-500/10 text-green-400",
                      product.availabilityStatus === "Low Stock" &&
                        "bg-yellow-500/10 text-yellow-400",
                      product.availabilityStatus === "Out of Stock" &&
                        "bg-red-500/10 text-red-400",
                    )}
                  >
                    {product.availabilityStatus}
                  </span>
                </td>
                <td className="px-6 py-4 relative">
                  <button
                    onClick={() =>
                      setOpenMenuId(
                        openMenuId === product.id ? null : product.id,
                      )
                    }
                    className="rounded-lg hover:bg-white/5"
                  >
                    <LuEllipsisVertical size={20} />
                  </button>
                  {openMenuId === product.id && (
                    <div className="absolute right-6 top-10 w-32 bg-[#1f1f28] border border-border rounded-lg shadow-lg overflow-hidden z-10">
                      <button
                        onClick={() => {
                          console.log("view", product.id);
                          setOpenMenuId(null);
                        }}
                        className="w-full text-left px-4 py-1 text-sm hover:bg-white/5"
                      >
                        View
                      </button>

                      <button
                        onClick={() => {
                          console.log("edit", product.id);
                          setOpenMenuId(null);
                        }}
                        className="w-full text-left px-4 py-1 text-sm hover:bg-white/5"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          console.log("delete", product.id);
                          setOpenMenuId(null);
                        }}
                        className="w-full text-left px-4 py-1 text-sm text-red-400 hover:bg-red-500/10"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-6 py-4 bg-[#292932]/50">
          <p className="text-sm text-text-muted">
            Showing {total === 0 ? 0 : start + 1} to {Math.min(end, total)} of
            {total} results
          </p>
          <div className="flex items-center gap-2 ">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-2 rounded-lg border border-border hover:bg-white/5 disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`h-9 w-9 rounded-lg border ${
                  currentPage === i + 1
                    ? "bg-primary text-bg"
                    : "border-border hover:bg-white/5"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-2 rounded-lg border border-border hover:bg-white/5 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Card
          icon={LuClipboardCheck}
          title="TOTAL PRODUCTS"
          value={stats.totalProducts.toLocaleString()}
        />

        <Card
          icon={LuBanknote}
          title="STOCK VALUE"
          value={`$${stats.stockValue.toLocaleString()}`}
          iconClassName="text-secondary"
        />

        <Card
          icon={LuTriangleAlert}
          title="REORDER ALERTS"
          value={`${stats.reorderAlerts} Items`}
          iconClassName="text-[#FFB783]"
        />
      </div>
    </div>
  );
};

export default ProductsPage;
