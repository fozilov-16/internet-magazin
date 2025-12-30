import { axiosRequest } from "../utils/axios";

export const api = import.meta.env.VITE_URL_PRODUCTS;

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

export const getProductById = async (id) => {
  try {
    const { data } = await axiosRequest.get(`${api}/get-product-by-id?id=${id}`);
    return data.data.product;
  } catch (error) {
    console.error(error)
  }
}
