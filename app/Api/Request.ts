
import { IProduct } from "../Types/Product";
import { api } from "./Axios";

export interface IGetProduct {
  products: IProduct[];
  success: boolean;
}

export const getListProduct = async (): Promise<IProduct[]> => {
  const response = await api.get<IGetProduct>("/products", {
    params: { sort: "rating" },
  });

  return response.data.products;
};
