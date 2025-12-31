import { useEffect, useState } from "react";
import { GetCart, CartProduct, api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import bank from '../assets/images/Frame 834.png'

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

  useEffect(() => {
    loadCart();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto py-10">
      <p className="text-sm text-gray-400 mb-8">
        Product / View Cart / <span className="text-black">Checkout</span>
      </p>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-7">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>

          <div className="bg-white shadow rounded p-6 space-y-4">
            <input className="w-full border rounded px-4 py-3" placeholder="First name" />
            <input className="w-full border rounded px-4 py-3" placeholder="Last name" />
            <input className="w-full border rounded px-4 py-3" placeholder="Street address" />
            <input className="w-full border rounded px-4 py-3" placeholder="Apartment, floor, etc. (optional)" />
            <input className="w-full border rounded px-4 py-3" placeholder="Town / City" />
            <input className="w-full border rounded px-4 py-3" placeholder="Phone number" />
            <input className="w-full border rounded px-4 py-3" placeholder="Email address" />

            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="accent-red-500" />
              Save this information for faster check-out next time
            </label>
          </div>
        </div>
        <div className="col-span-5">
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.product.id} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={`${api}/images/${item.product.image}`}
                    className="w-12 h-12 object-contain"
                  />
                  <span>{item.product.productName}</span>
                </div>
                <span className="font-medium">
                  ${(item.product.discountPrice ?? item.product.price) * item.quantity}
                </span>
              </div>
            ))}

            <div className="border-t pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
            </div>

            <div className="border-t pt-4 flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
            <div className="space-y-3 pt-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" />
                Bank
                <img src={bank} alt="" className="ml-[100px]" />
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" defaultChecked />
                Cash on delivery
              </label>
            </div>
            <div className="flex gap-3 pt-4">
              <input
                placeholder="Coupon Code"
                className="flex-1 border px-4 py-2 rounded"
              />
              <button className="border border-red-500 text-red-500 px-6 rounded">
                Apply
              </button>
            </div>
            <button
              className="w-full bg-red-500 text-white py-3 rounded mt-4"
              onClick={() => navigate("/chekout")}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
