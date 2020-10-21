import ProductList from "../../redux_components/ProductList";
import { DETAIL_PRODUCT } from "../constant";

export const actDetail = (product) => {
  return {
    type: DETAIL_PRODUCT,
    payload: product,
  };
};
