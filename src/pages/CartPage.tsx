import { useEffect, useState } from "react";
import { GetCart, CartProduct, api, DeleteProductFromCart, DeleteAllFromCart } from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadCart = async () => {
    setLoading(true);
    const data = await GetCart();
    setCart(data);
    setLoading(false);
  };

  const subtotal = cart.reduce(
    (sum, item) =>
      sum + (item.product.discountPrice ?? item.product.price) * item.quantity,
    0
  );

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  useEffect(() => {
    loadCart();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <p className="text-sm text-gray-400 mb-6 cursor-pointer hover:text-black" onClick={() => navigate("/home")}>
        Home <span className="text-sm text-gray-400">/ Cart</span>
      </p>

      <div className="hidden md:grid grid-cols-12 text-gray-500 mb-4 px-2">
        <div className="col-span-5">Product</div>
        <div className="col-span-2 text-center">Price</div>
        <div className="col-span-3 text-center">Quantity</div>
        <div className="col-span-2 text-right">Subtotal</div>
      </div>

      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.product.id} className="flex flex-col md:grid md:grid-cols-12 items-center bg-white shadow-sm rounded px-4 py-4 gap-2 md:gap-0">
            
            <div className="md:col-span-5 flex items-center gap-4 w-full">
              <img
                src={`${api}/images/${item.product.image}`}
                className="w-16 h-16 object-contain"
              />
              <span className="font-medium">{item.product.productName}</span>
            </div>

            <div className="md:col-span-2 text-center font-medium w-full">
              ${item.product.discountPrice ?? item.product.price}
            </div>

            <div className="md:col-span-3 flex justify-center w-full">
              <input
                type="number"
                value={item.quantity}
                min={1}
                onChange={(e) =>
                  updateQuantity(item.product.id, Number(e.target.value))
                }
                className="w-16 border rounded text-center py-1"
              />
            </div>

            <div className="md:col-span-2 flex justify-between md:justify-end items-center gap-4 font-semibold w-full">
              <span>${(item.product.discountPrice ?? item.product.price) * item.quantity}</span>
              <button className="text-red-500 font-bold cursor-pointer"
                onClick={async () => {
                  await DeleteProductFromCart(item.id);
                  loadCart();
                }}
              >×</button>
            </div>

          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
        <button className="cursor-pointer border px-6 py-2 rounded w-full md:w-auto" onClick={() => navigate("/home")}>
          Return To Shop
        </button>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <button className="border px-6 py-2 rounded cursor-pointer w-full md:w-auto" onClick={loadCart}>
            Update Carts
          </button>
          <button className="border border-red-500 text-red-500 px-6 py-2 rounded cursor-pointer w-full md:w-auto"
            onClick={async () => {
              await DeleteAllFromCart();
              loadCart();
            }}
          >
            Remove all
          </button>
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8 mt-10">
        <div className="md:col-span-7 flex flex-col sm:flex-row items-start gap-2 sm:gap-4 w-full">
          <input
            placeholder="Coupon Code"
            className="border px-4 py-2 rounded w-full sm:w-64"
          />
          <button className="border border-red-500 text-red-500 px-6 py-2 rounded w-full sm:w-auto">
            Apply
          </button>
        </div>

        <div className="md:col-span-5 border rounded p-4 sm:p-6 w-full">
          <h2 className="font-semibold mb-4">Cart Total</h2>

          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>

          <div className="flex justify-between text-sm mb-4">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className="border-t pt-4 flex justify-between font-semibold mb-6">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>

          <button className="w-full bg-red-500 text-white py-3 rounded cursor-pointer"
          onClick={() => navigate('/chekout')}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
