import { ADD_PRODUCT, DETAIL_PRODUCT } from "../constant";

export const actDetailProduct = (product) => {
  return {
    type: DETAIL_PRODUCT,
    payload: product,
  };
};

export const actAddProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
