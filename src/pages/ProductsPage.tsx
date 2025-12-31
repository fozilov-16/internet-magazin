import { useState, useEffect } from "react";
import { api, GetCategory, GetTodo } from "../../api/api";
import { Button } from "@mui/material";
import { Eye, Heart, Star } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { useWishlistStore } from "../store/useWishlistStore";
import ProductsFilter from "../components/ProductsFilter";

type Product = {
  id: number;
  image: string;
  productName: string;
  price: number;
  discountPrice?: number;
  quantity: number;
  categoryId: number;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const toggleItem = useWishlistStore((s) => s.toggleItem);
  const isInWishlist = useWishlistStore((s) => s.isInWishlist);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          GetTodo(),
          GetCategory(),
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.categoryId === selectedCategory)
    : products;

  if (loading) return <p className="px-4 md:px-[135px] py-12">Loading products...</p>;

  return (
    <div className="pt-12 pb-12 px-4 md:px-[135px]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[60px]">
        <div className="w-full md:w-[260px]">
          <ProductsFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="flex-1 flex flex-wrap gap-6 justify-center md:justify-start">
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="w-full sm:w-[180px] md:w-[260px]">
              <div className="bg-[#F5F5F5] p-4 rounded-xl relative group">
                {prod.discountPrice && (
                  <div className="absolute bg-[#DB4444] text-white text-sm rounded-md w-[55px] h-[26px] flex items-center justify-center">
                    {Math.round(100 - (prod.discountPrice / prod.price) * 100)}%
                  </div>
                )}
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                  <button
                    onClick={() => toggleItem(prod)}
                    className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow"
                  >
                    <Heart className={isInWishlist(prod.id) ? "fill-red-500 text-red-500" : "text-gray-400"} />
                  </button>
                  <NavLink to="/productDetails" state={{ product: prod }}>
                    <button className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow cursor-pointer">
                      <Eye size={18} />
                    </button>
                  </NavLink>
                </div>

                <div className="flex justify-center py-6">
                  <img src={`${api}/images/${prod.image}`} alt={prod.productName} className="w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] object-contain" />
                </div>

                <Button variant="contained" color="inherit" className="absolute left-0 bottom-0 w-full opacity-0 group-hover:opacity-100 transition">
                  Add To Cart
                </Button>
              </div>

              <div className="flex flex-col gap-2 mt-3 text-center md:text-left">
                <p className="text-[14px] sm:text-[16px] font-medium">{prod.productName}</p>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <p className="text-red-500 text-lg font-semibold">${prod.price}</p>
                  {prod.discountPrice && <p className="text-gray-400 line-through">${prod.discountPrice}</p>}
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="flex text-yellow-500 gap-[3px] sm:gap-[5px]"><Star /><Star /><Star /><Star /><Star /></div>
                  <p className="text-gray-500 text-sm">({prod.quantity})</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
