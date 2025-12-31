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

export interface Product {
  id: number;
  productName: string;
  price: number;
  discountPrice?: number;
  image: string;
}

export const GetTodo = async () => {
  const { data } = await axiosRequest.get(`/Product/get-products`);
  return data.data.products;
};

export const GetCategory = async () => {
  const { data } = await axiosRequest.get(`/Category/get-categories`);
  return data.data;
};

export const getProductById = async (id: number) => {
  const { data } = await axiosRequest.get(
    `/Product/get-product-by-id?id=${id}`
  );
  return data.data.product;
};

export const AddToCart = async (productId: number) => {
  const { data } = await axiosRequest.post(
    `/Cart/add-product-to-cart?id=${productId}`
  );
  return data;
};

export const GetCart = async (): Promise<CartProduct[]> => {
  const { data } = await axiosRequest.get("/Cart/get-products-from-cart");
  return data.data[0].productsInCart;
};

export const DeleteProductFromCart = async (id: number) => {
  await axiosRequest.delete(`/Cart/delete-product-from-cart?id=${id}`);
};

export const DeleteAllFromCart = async (): Promise<void> => {
  await axiosRequest.delete(`/Cart/clear-cart`);
};

export const getUserProfile = async (userName: string) => {
  const { data } = await axiosRequest.get(`/UserProfile/get-user-profiles`, {
    params: {
      UserName: userName,
      PageNumber: 1,
      PageSize: 10,
    },
  });

  return data.data[0];
};
