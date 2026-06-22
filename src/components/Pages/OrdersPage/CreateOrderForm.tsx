type CreateOrderModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
const CreateOrderForm = ({ isOpen, onClose }: CreateOrderModalProps) => {
  if (!isOpen) return null;

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm text-text-muted mb-2">
          Customer Name
        </label>
        <input
          type="text"
          placeholder="Enter customer name"
          className="w-full bg-[#14141F] border border-border rounded-lg px-4 py-3 outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="block text-sm text-text-muted mb-2">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full bg-[#14141F] border border-border rounded-lg px-4 py-3 outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="block text-sm text-text-muted mb-2">Product</label>
        <select className="w-full bg-[#14141F] border border-border rounded-lg px-4 py-3 outline-none focus:border-primary">
          <option>Select Product</option>
          <option>iPhone 15</option>
          <option>MacBook Air</option>
          <option>AirPods Pro</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-text-muted mb-2">Quantity</label>
        <input
          type="number"
          min="1"
          placeholder="1"
          className="w-full bg-[#14141F] border border-border rounded-lg px-4 py-3 outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="block text-sm text-text-muted mb-2">Status</label>
        <select className="w-full bg-[#14141F] border border-border rounded-lg px-4 py-3 outline-none focus:border-primary">
          <option>Pending</option>
          <option>Processing</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border border-border rounded-lg hover:bg-white/5 transition"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-primary text-bg rounded-lg hover:opacity-90 transition"
        >
          Create Order
        </button>
      </div>
    </form>
  );
};

export default CreateOrderForm;
