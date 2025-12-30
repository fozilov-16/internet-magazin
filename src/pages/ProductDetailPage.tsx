import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetTodo } from '../../api/api';
import redrec from '../assets/images/redRec.png';
import delivery from '../assets/images/icon-delivery.png';
import return1 from '../assets/images/Icon-return.png';
import { ProductCard } from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

import ProductsFilter from "../components/ProductsFilter";
import { Eye, Heart, Star } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from 'antd';

type Product = {
  id: number;
  image: string;
  productName: string;
  price: number;
  discountPrice?: number;
  quantity: number;
};

const api = import.meta.env.VITE_URL_PRODUCTS

const ProductDetailPage = () => {
  const location = useLocation();
  const product = location.state?.product;
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  if (!product) return <div>Product not found</div>;


  const { productName, image, price, discountPrice } = product;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await GetTodo();
        const filtered = data.filter((p: Product) => p.id !== product.id);
        setProducts(filtered);
      }
      catch (error) {
        setError("Failed to load related products");
      }
      finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, [product.id]);

  return (
    <div className="flex flex-col w-full">
      
      <button onClick={() => navigate(-1)} className="w-32 h-10 bg-gray-200 rounded font-semibold ml-[200px] mt-[50px] cursor-pointer">Back</button>

      <div className="flex items-center justify-center w-full gap-[70px] mt-[80px]">
        <div className="flex items-center gap-[30px]">
          <div className="flex flex-col gap-[16px]">
            {[1,2,3,4].map((_, idx) => (
              <div key={idx} className="bg-[#F5F5F5] border border-[#EEEEEE] flex items-center justify-center rounded w-[150px] h-[120px]">
                <img src={`${api}/images/${image}`} alt="preview" className="w-[100px] h-[90px]" />
              </div>
            ))}
          </div>

          <div className="bg-[#F5F5F5] border border-[#EEEEEE] flex items-center justify-center rounded w-[460px] h-[500px]">
            <img src={`${api}/images/${image}`} alt="main" className="w-[380px] h-[320px]" />
          </div>
        </div>

        <div className="flex flex-col gap-[33px] max-w-[400px]">
          <div className="flex flex-col gap-[21px]">
            <h1 className="text-[24px] font-medium">{productName}</h1>
            <p className="text-[14px] text-gray-500">(150 Reviews)</p>
            <h1 className="text-[24px] font-bold">${price}</h1>
            <p className="text-[14px] text-gray-400">
              High quality vinyl with air channel adhesive <br />
              for easy bubble free install & mess <br />
              free removal Pressure sensitive.
            </p>
          </div>

          <div className="flex flex-col gap-[18px]">
            <div className="flex gap-[16px]">
              <img src={delivery} alt="delivery" />
              <div className="flex flex-col">
                <h1 className="font-semibold">Free Delivery</h1>
                <p className="text-[14px] text-gray-500">Enter your postal code for delivery availability</p>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <img src={return1} alt="return" />
              <div className="flex flex-col">
                <h1 className="font-semibold">Return Delivery</h1>
                <p className="text-[14px] text-gray-500">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
          <NavLink to = {"/products"}>
            <Button danger className='w-[330px]'>Buy Now</Button>
          </NavLink>
        </div>
      </div>


      <div className="flex flex-col w-full gap-[24px] mt-[80px] pl-[60px]">
        <div className="flex items-center gap-[12px]">
          <img src={redrec} alt="icon" className="w-[14px]" />
          <h1 className="text-[20px] text-[#DB4444] font-semibold">Related Items</h1>
        </div>

        <div className="flex flex-wrap gap-[60px] justify-center mb-[100px] mt-[50px]">
            {products?.slice(0,4).map((prod) => (
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
                    type = "primary"
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

      </div>

    </div>
  );
};

export default ProductDetailPage;
