import { useWishlistStore } from "../store/useWishlistStore";
import { api } from "../../api/api";
import { Button } from "@mui/material";

const WishlistPage = () => {
  const items = useWishlistStore((state) => state.items);
  const removeItem = useWishlistStore((state) => state.toggleItem);

  if (!items.length)
    return (
      <div className="flex justify-center items-center h-[60vh] px-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-500 text-center">
          No Products
        </h2>
      </div>
    );

  return (
    <div className="pt-12 pb-12 px-4 sm:px-8 md:px-[135px]">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">WishList</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {items.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 relative"
          >
            <div className="relative">
              <img
                src={`${api}/images/${p.image}`}
                alt={p.productName}
                className="w-full h-[180px] sm:h-[220px] md:h-[250px] object-contain p-2 sm:p-4"
              />
            </div>
            <div className="p-3 sm:p-4 flex flex-col gap-2">
              <p className="text-base sm:text-lg font-semibold group-hover:text-red-500 transition">
                {p.productName}
              </p>
              <div className="flex items-center gap-2">
                <p className="text-red-500 font-bold text-base sm:text-lg">${p.price}</p>             
                {p.discountPrice && (
                  <p className="line-through text-gray-400 text-sm sm:text-base">${p.discountPrice}</p>
                )}
              </div>
              <Button
                variant="contained"
                color="error"
                onClick={() => removeItem(p)}
                className="mt-2 w-full"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
