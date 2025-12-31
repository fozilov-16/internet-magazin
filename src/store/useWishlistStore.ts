import { create } from "zustand";
import { persist } from "zustand/middleware";

export type WishlistProduct = {
  id: number;
  image: string;
  productName: string;
  price: number;
  discountPrice?: number;
  quantity: number;
};

type WishlistState = {
  items: WishlistProduct[];
  hasHydrated: boolean;
  toggleItem: (product: WishlistProduct) => void;
  isInWishlist: (id: number) => boolean;
  clear: () => void;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      hasHydrated: false,

      toggleItem: (product) => {
        const exists = get().items.some((item) => item.id === product.id);
        set({
          items: exists
            ? get().items.filter((i) => i.id !== product.id)
            : [...get().items, product],
        });
      },

      isInWishlist: (id) => get().items.some((item) => item.id === id),

      clear: () => set({ items: [] }),
    }),
    {
      name: "wishlist-storage",
      onRehydrateStorage: () => {
        return (state) => {
          useWishlistStore.setState({ hasHydrated: true });
        };
      },
    }
  )
);
