import { axiosRequest } from "../utils/axios";

export const api = import.meta.env.VITE_URL_PRODUCTS;

export const GetTodo = async () => {
  try {
    const { data } = await axiosRequest.get(`/Product/get-products`);
    return data;
  } catch (error) {
    throw error;
  }
};
