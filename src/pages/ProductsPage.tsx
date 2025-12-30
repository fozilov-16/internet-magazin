import ProductsFilter from "../components/ProductsFilter";
import { api, GetCategory, GetTodo } from "../../api/api";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Eye, Heart, Star } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

type Product = {
  id: number;
  image: string;
  productName: string;
  price: number;
  discountPrice?: number;
  quantity: number;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<any[]>([]);


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
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="px-[135px] py-[60px]">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-[135px] py-[60px] text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="pt-[60px] pb-[60px] px-[135px]">
      <div className="flex gap-[60px]">
        <ProductsFilter />

        <div className="flex flex-col gap-[32px]">  

          <div className="flex flex-wrap gap-[30px] justify-center">
            {products?.slice(0,3).map((prod) => (
              <div key={prod.id} className="w-[260px]">
                <div className="bg-[#F5F5F5] p-4 rounded-xl relative group">

                  {prod.discountPrice && (
                    <div className="absolute bg-[#DB4444] text-white text-sm rounded-md w-[55px] h-[26px] flex items-center justify-center">
                      {Math.round(
                        100 - (prod.discountPrice / prod.price) * 100
                      )}
                      %
                    </div>
                  )}
                  
                  <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                    <button className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow cursor-pointer ">
                      <Heart size={18} />
                    </button>
                    <NavLink to="/productDetails" state={{ product: prod }}>
                      <button className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow cursor-pointer">
                        <Eye size={18} />
                      </button>
                    </NavLink>
                  </div>
  
                  <div className="flex justify-center py-6">
                    <img
                      src={`${api}/images/${prod.image}`}
                      alt={prod.productName}
                      className="w-[180px] h-[180px] object-contain"
                    />
                  </div>
  
                  <Button
                    variant="contained"
                    color="inherit"
                    className="absolute left-0 bottom-0 w-full opacity-0 group-hover:opacity-100 transition"
                  >
                    Add To Cart
                  </Button>
                </div>
  
                <div className="flex flex-col gap-2 mt-3">
                  <p className="text-[16px] font-medium">
                    {prod.productName}
                  </p>
  
                  <div className="flex items-center gap-3">
                    <p className="text-red-500 text-lg font-semibold">
                      ${prod.price}
                    </p>
                    <p className="text-gray-400 line-through">
                      ${prod.discountPrice}
                    </p>
                  </div>
  
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500 gap-[5px]">
                    <Star /><Star /><Star /><Star /><Star />
                  </div>
                  <p className="text-gray-500 text-sm">
                    ({prod.quantity})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-[30px] justify-center">
            {products?.slice(0,6).map((prod) => (
              <div key={prod.id} className="w-[260px]">
                <div className="bg-[#F5F5F5] p-4 rounded-xl relative group">

                  {prod.discountPrice && (
                    <div className="absolute bg-[#DB4444] text-white text-sm rounded-md w-[55px] h-[26px] flex items-center justify-center">
                      {Math.round(
                        100 - (prod.discountPrice / prod.price) * 100
                      )}
                      %
                    </div>
                  )}
                  
                  <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                    <button className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow">
                      <Heart size={18} />
                    </button>
                    <NavLink to="/productDetails" state={{ product: prod }}>
                      <button className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow cursor-pointer">
                        <Eye size={18} />
                      </button>
                    </NavLink>
                  </div>
  
                  <div className="flex justify-center py-6">
                    <img
                      src={`${api}/images/${prod.image}`}
                      alt={prod.productName}
                      className="w-[180px] h-[180px] object-contain"
                    />
                  </div>
  
                  <Button
                    variant="contained"
                    color="inherit"
                    className="absolute left-0 bottom-0 w-full opacity-0 group-hover:opacity-100 transition"
                  >
                    Add To Cart
                  </Button>
                </div>
  
                <div className="flex flex-col gap-2 mt-3">
                  <p className="text-[16px] font-medium">
                    {prod.productName}
                  </p>
  
                  <div className="flex items-center gap-3">
                    <p className="text-red-500 text-lg font-semibold">
                      ${prod.price}
                    </p>
                    {prod.discountPrice && (
                      <p className="text-gray-400 line-through">
                        ${prod.discountPrice}
                      </p>
                    )}
                  </div>
  
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500 gap-[5px]">
                    <Star /><Star /><Star /><Star /><Star />
                  </div>
                  <p className="text-gray-500 text-sm">
                    ({prod.quantity})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      <Outlet/>
    </div>
  );
}