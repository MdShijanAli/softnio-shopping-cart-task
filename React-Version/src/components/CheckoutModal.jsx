import cyanImg from "../assets/images/cyan.png";
import blackImg from "../assets/images/lg-a 3.png";
import productImg from "../assets/images/product-gallery.png";

export default function CheckoutModal({ onClose, onSubmit, isLoading = false }) {
  const tableRowItems = [
    {
      id: 1,
      img: blackImg,
      name: 'Classy Modern Smart watch',
      color: "Black",
      size: "XL",
      qnt: "1",
      price: "99.00"
    },
    {
      id: 2,
      img: productImg,
      color: "Purple",
      name: 'Classy Modern Smart watch',
      size: "L",
      qnt: "2",
      price: "178.99"
    },
    {
      id: 3,
      img: cyanImg,
      color: "Cyan",
      name: 'Classy Modern Smart watch',
      size: "M",
      qnt: "1",
      price: "79.99"
    }
  ]
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-[650px] shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>

        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

        <table className="w-full border-collapse text-[14px">
          <thead>
            <tr className="border-b text-[#8091A7] font-normal">
              <th className="text-left pb-2">Item</th>
              <th className="text-center pb-2">Color</th>
              <th className="text-center pb-2">Size</th>
              <th className="text-right pb-2">Qnt</th>
              <th className="text-right pb-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {
              tableRowItems.map((item) => (
                <tr key={item.id} className="border-b text-[#364A63]">
                  <td className="py-3">
                    <div className="flex items-center">
                      <img
                        src={item?.img}
                        alt="Product"
                        className="w-10 h-10 rounded"
                      />
                      <span className="ml-2 text-gray-700">{item?.name}</span>
                    </div>
                  </td>
                  <td className="text-center">{item?.color}</td>
                  <td className="text-center font-bold">{item?.size}</td>
                  <td className="text-right">{item?.qnt}</td>
                  <td className="text-right font-semibold">${item?.price}</td>
                </tr>
              ))
            }
          </tbody>
          <tfoot>
            <tr className="text-[#373737] text-[22px]">
              <td colSpan="3" className="text-left font-bold pt-3">Total</td>
              <td className="text-right font-bold text-lg pt-4">4</td>
              <td className="text-right font-bold text-lg pt-4">$356.00</td>
            </tr>
          </tfoot>
        </table>

        <div className="flex justify-end gap-5 items-center mt-6">
          <button
            className="text-indigo-500 border border-indigo-500 rounded px-4 py-2 hover:bg-indigo-500 hover:text-white transition"
            onClick={onClose}
          >
            Continue Shopping
          </button>
          <button
            className={`bg-indigo-500 text-white rounded px-4 py-2 hover:bg-indigo-600 transition flex items-center gap-3 ${ isLoading && "opacity-50 cursor-not-allowed"
              }`}
            onClick={onSubmit}
            disabled={isLoading}
          >
            {isLoading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            )}
            {isLoading ? "Processing..." : "Checkout"}
          </button>

        </div>
      </div>
    </div>
  );
}
