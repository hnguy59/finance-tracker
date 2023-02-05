import { axiosInstance } from "api/axios";
import {
  GetProductDetailsType,
  GetProductsQueryParameters,
  GetProductsType,
} from "api/services/types/CommBankProductTypes";

const BASE_URL = "https://api.commbank.com.au/public/";

export const getProducts = async (
  getProductsQueryParameters?: GetProductsQueryParameters
): Promise<GetProductsType> => {
  const axios = axiosInstance(BASE_URL);
  const response = await axios.get<GetProductsType>(
    "cds-au/v1/banking/products",
    {
      params: getProductsQueryParameters,
    }
  );

  return response.data;
};

export const getProductDetails = async (
  productId: string
): Promise<GetProductDetailsType> => {
  const axios = axiosInstance(BASE_URL);
  const response = await axios.get<GetProductDetailsType>(
    `cds-au/v1/banking/products/${productId}`
  );

  return response.data;
};
