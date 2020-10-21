import {
  ADD_PRODUCT,
  CHANGE_AMOUNT,
  DELETE_PRODUCT,
  DETAIL_PRODUCT,
} from "../constant";

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
export const actDeleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
};

export const actChangeAmount = (product, status) => {
  return {
    type: CHANGE_AMOUNT,
    payload: product,
    status,
  };
};
