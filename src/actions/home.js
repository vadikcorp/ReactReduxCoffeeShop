import { STOREPRODUCTS } from "./actionTypes";

export const storeProducts = products => ({
  type: STOREPRODUCTS,
  payload: products
});
