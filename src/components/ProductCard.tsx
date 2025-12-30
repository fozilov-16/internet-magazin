type Product = {
  id: number;
  image: string;
  productName: string;
  price: number;
  discountPrice?: number;
  quantity: number;
};

type ProductProps = {
  product: Product;
};

  const api = import.meta.env.VITE_URL_PRODUCTS;
  
export const ProductCard = ({ product }: ProductProps) => {
    return (
      <div className="w-[260px]">
        <div className="bg-[#F5F5F5] p-4 rounded-xl relative group">
            <div className="absolute bg-[#DB4444] text-white text-sm rounded-md w-[55px] h-[26px] flex items-center justify-center">
              {Math.round(100 - (product.discountPrice! / product.price) * 100)}%
            </div>
          <div className="flex justify-center py-6">
            <img
              src={`${api}/images/${product.image}`}
              alt={product.productName}
              className="w-[180px] h-[180px] object-contain"
            />
          </div>
          <p className="text-[16px] font-medium mt-3">{product.productName}</p>
          <div className="flex items-center gap-3">
            <p className="text-red-500 text-lg font-semibold">
              ${product.price}
            </p>
            <p className="text-gray-400 line-through">${product.discountPrice}</p>
          </div>
        </div>
      </div>
    );
};  