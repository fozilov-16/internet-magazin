import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AddToCart, GetTodo } from '../../api/api';
import redrec from '../assets/images/redRec.png';
import delivery from '../assets/images/icon-delivery.png';
import return1 from '../assets/images/Icon-return.png';
import { Eye, Heart, Star } from "lucide-react";
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
  
  if (!product) return <div className="p-4">Product not found</div>;

  const { productName, image, price, discountPrice } = product;

  const handleAddToCart = async (productId: number) => {
    try {
      await AddToCart(productId);
      alert("Товар добавлен в корзину ✅");
    } catch (error) {
      alert("Этот товар уже находится в корзине ❌");
      console.error(error);
    }
  };


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
    <div className="flex flex-col w-full px-4 md:px-[135px]">
      
      <button 
        onClick={() => navigate(-1)} 
        className="w-32 h-10 bg-gray-200 rounded font-semibold mt-12 mb-8 md:ml-[200px] cursor-pointer"
      >
        Back
      </button>

      <div className="flex flex-col md:flex-row items-center md:justify-center gap-8 md:gap-[70px] mt-8">
        <div className="flex  gap-4 md:gap-[30px] flex-col md:flex-row">

          <div className="flex flex-row md:flex-col gap-4 md:gap-[16px] justify-center">
            {[1,2,3,4].map((_, idx) => (
              <div key={idx} className="bg-[#F5F5F5] border border-[#EEEEEE] flex items-center justify-center rounded w-[80px] sm:w-[100px] h-[80px] sm:h-[90px]">
                <img src={`${api}/images/${image}`} alt="preview" className="w-[60px] sm:w-[100px] h-[60px] sm:h-[90px]" />
              </div>
            ))}
          </div>

          <div className="bg-[#F5F5F5] border border-[#EEEEEE] flex items-center justify-center rounded w-full sm:w-[380px] md:w-[460px] h-[300px] sm:h-[320px]">
            <img src={`${api}/images/${image}`} alt="main" className="w-[250px] sm:w-[380px] md:w-[380px] h-[200px] sm:h-[320px]" />
          </div>

        </div>

        <div className="flex flex-col gap-6 max-w-full md:max-w-[400px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-[20px] sm:text-[24px] font-medium">{productName}</h1>
            <p className="text-[12px] sm:text-[14px] text-gray-500">(150 Reviews)</p>
            <h1 className="text-[20px] sm:text-[24px] font-bold">${price}</h1>
            <p className="text-[12px] sm:text-[14px] text-gray-400">
              High quality vinyl with air channel adhesive <br />
              for easy bubble free install & mess <br />
              free removal Pressure sensitive.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2 sm:gap-4 items-start">
              <img src={delivery} alt="delivery" className="w-6 sm:w-8" />
              <div className="flex flex-col">
                <h1 className="font-semibold text-sm sm:text-base">Free Delivery</h1>
                <p className="text-[10px] sm:text-[14px] text-gray-500">Enter your postal code for delivery availability</p>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-4 items-start">
              <img src={return1} alt="return" className="w-6 sm:w-8" />
              <div className="flex flex-col">
                <h1 className="font-semibold text-sm sm:text-base">Return Delivery</h1>
                <p className="text-[10px] sm:text-[14px] text-gray-500">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>

          <NavLink to={"/products"}>
            <Button danger className='w-full sm:w-[330px] mt-4'>Buy Now</Button>
          </NavLink>
        </div>
      </div>

      <div className="flex flex-col w-full gap-4 mt-12 md:pl-[60px]">
        <div className="flex items-center gap-2">
          <img src={redrec} alt="icon" className="w-4 sm:w-[14px]" />
          <h1 className="text-[16px] sm:text-[20px] text-[#DB4444] font-semibold">Related Items</h1>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-[60px] justify-center mb-24 mt-12">
          {products?.slice(0,4).map((prod) => (
            <div key={prod.id} className="w-full sm:w-[180px] md:w-[260px]">
              <div className="bg-[#F5F5F5] p-4 rounded-xl relative group">
                {prod.discountPrice && (
                  <div className="absolute bg-[#DB4444] text-white text-sm rounded-md w-[55px] h-[26px] flex items-center justify-center">
                    {Math.round(100 - (prod.discountPrice / prod.price) * 100)}%
                  </div>
                )}
                
                <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
                  <button className="bg-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full shadow cursor-pointer">
                    <Heart size={16} />
                  </button>
                  <NavLink to="/productDetails" state={{ product: prod }}>
                    <button className="bg-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full shadow cursor-pointer">
                      <Eye size={16} />
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
                  type="primary"
                  onClick={() => handleAddToCart(prod.id)}
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
                  <p className="text-gray-500 text-sm">({prod.quantity})</p>
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
