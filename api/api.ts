import { axiosRequest } from "../utils/axios";

export const api = import.meta.env.VITE_URL_PRODUCTS;

export type CartProduct = {
  id: number;
  quantity: number;
  product: {
    id: number;
    productName: string;
    image: string;
    price: number;
    discountPrice?: number;
  };
};

export const GetTodo = async () => {
  try {
    const { data } = await axiosRequest.get(`/Product/get-products`);
    return data.data.products;
  } catch (error) {
    throw error;
  }
};

export const GetCategory = async () => {
  try {
    const { data } = await axiosRequest.get(`/Category/get-categories`);
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const AddToCart = async (productId: number) => {
  try {
    const { data } = await axiosRequest.post(
      `/Cart/add-product-to-cart?id=${productId}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const GetCart = async (): Promise<CartProduct[]> => {
  const { data } = await axiosRequest.get("/Cart/get-products-from-cart");
  return data.data[0].productsInCart;
};
