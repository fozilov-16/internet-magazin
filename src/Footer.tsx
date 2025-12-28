import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Exclusive</h2>
          <p className="mb-2">Subscribe</p>
          <p className="text-sm text-gray-400 mb-4">
            Get 10% off your first order
          </p>
          <div className="flex items-center border border-gray-500 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-3 py-2 w-full outline-none text-sm"
            />
            <button className="px-3 text-gray-300 hover:text-white">
              <Send size={18} />
            </button>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Account</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>My Account</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Quick Link</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Social</h3>
          <div className="flex gap-4 text-gray-400">
            <Facebook className="hover:text-white cursor-pointer" />
            <Twitter className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
            <Linkedin className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mt-16 border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}