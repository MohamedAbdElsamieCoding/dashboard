import { clsx } from "clsx";
import { IoAdd } from "react-icons/io5";
import Card from "../../ui/Card";
import { LuBanknote, LuClipboardCheck, LuTriangleAlert } from "react-icons/lu";

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      product: "iPhone 15 Pro",
      sku: "APL-IP15P-001",
      category: "Smartphones",
      price: "$1,099",
      stock: 42,
      status: "Active",
    },
    {
      id: 2,
      product: "Samsung Galaxy S25",
      sku: "SMS-S25-002",
      category: "Smartphones",
      price: "$999",
      stock: 18,
      status: "Active",
    },
    {
      id: 3,
      product: "MacBook Air M4",
      sku: "APL-MBA-M4",
      category: "Laptops",
      price: "$1,299",
      stock: 12,
      status: "Active",
    },
    {
      id: 4,
      product: "Dell XPS 15",
      sku: "DLL-XPS15",
      category: "Laptops",
      price: "$1,499",
      stock: 0,
      status: "Out of Stock",
    },
    {
      id: 5,
      product: "Sony WH-1000XM6",
      sku: "SNY-WHXM6",
      category: "Audio",
      price: "$399",
      stock: 65,
      status: "Active",
    },
    {
      id: 6,
      product: "Apple Watch Series 11",
      sku: "APL-AWS11",
      category: "Wearables",
      price: "$499",
      stock: 24,
      status: "Active",
    },
    {
      id: 7,
      product: "iPad Pro M4",
      sku: "APL-IPDM4",
      category: "Tablets",
      price: "$1,099",
      stock: 9,
      status: "Low Stock",
    },
    {
      id: 8,
      product: "Logitech MX Master 3S",
      sku: "LOG-MXM3S",
      category: "Accessories",
      price: "$99",
      stock: 88,
      status: "Active",
    },
    {
      id: 9,
      product: "PlayStation 5 Slim",
      sku: "SNY-PS5SL",
      category: "Gaming",
      price: "$499",
      stock: 5,
      status: "Low Stock",
    },
    {
      id: 10,
      product: 'Samsung 49" Odyssey G9',
      sku: "SMS-G9-49",
      category: "Monitors",
      price: "$1,299",
      stock: 3,
      status: "Low Stock",
    },
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

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-end justify-between">
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-text-muted text-xs font-medium">
            {"Inventory > Products"}
          </p>
          <h1 className="text-text tracking-tight text-3xl font-semibold">
            Products
          </h1>
          <p className="text-text text-sm font-normal">
            Manage your global product catalog and stock levels.
          </p>
        </div>
        <button className="bg-primary px-6 py-4 flex items-center gap-2 text-[#1000A9] rounded-lg">
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
            className="border border-border px-4 py-2 text-text rounded-lg"
          >
            <option value="All">All Categories</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <p className="tracking-wide font-medium text-xs">Status</p>
          <select
            name="status"
            id="status"
            className="border border-border px-4 py-2 text-text rounded-lg"
          >
            <option value="status">All Statuses</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <p className="tracking-wide font-medium text-xs">Sort</p>
          <select
            name="sort"
            id="sort"
            className="border border-border px-4 py-2 text-text rounded-lg"
          >
            <option value="news">Newest First</option>
          </select>
        </div>
        <button>Clear All Filters</button>
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
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-border hover:bg-white/5 transition-colors"
              >
                <td className="px-6 py-4">
                  <p className="font-medium">{product.product}</p>
                </td>
                <td className="px-6 py-4">{product.sku}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4">
                  <span
                    className={clsx(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      product.status === "Active" &&
                        "bg-green-500/10 text-green-400",
                      product.status === "Low Stock" &&
                        "bg-yellow-500/10 text-yellow-400",
                      product.status === "Out of Stock" &&
                        "bg-red-500/10 text-red-400",
                    )}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4">Actions</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-6 py-4 bg-[#292932]/50">
          <p className="text-sm text-text-muted">
            Showing 1 to 4 of 24 results
          </p>
          <div className="flex items-center gap-2 ">
            <button className="px-3 py-2 rounded-lg border border-border hover:bg-white/5">
              Previous
            </button>
            <button className="h-9 w-9 rounded-lg bg-primary text-bg font-medium">
              1
            </button>
            <button className="h-9 w-9 rounded-lg border border-border hover:bg-white/5">
              2
            </button>
            <button className="h-9 w-9 rounded-lg border border-border hover:bg-white/5">
              3
            </button>
            <button className="px-3 py-2 rounded-lg border border-border hover:bg-white/5">
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Card icon={LuClipboardCheck} title="TOTAL PRODUCTS" value="1,284" />

        <Card
          icon={LuBanknote}
          title="STOCK VALUE"
          value="$142,502.00"
          iconClassName="text-secondary"
        />

        <Card
          icon={LuTriangleAlert}
          title="REORDER ALERTS"
          value="18 Items"
          iconClassName="text-[#FFB783]"
        />
      </div>
    </div>
  );
};

export default ProductsPage;
