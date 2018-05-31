import {
  ISLOADING,
  STOREDATA,
  STOREPRODUCT,
  STORETABLEDATA,
  STOREPRODUCTSMAXSUMTOTAL,
  STOREPRODUCTSMINSUMTOTAL,
  STOREPRODUCTSAVERAGETOTAL,
  STOREPRODUCTPRICEWEEK,
  STORECURRPRODUCTPRICEWEEK,
  ONSEARCHCHANGE,
  CREATEREPORT,
  VALUEFROM,
  VALUETO,
  SETDIRECTIONSORT
} from "./actionTypes";

export const loadingToggle = () => ({
  type: ISLOADING
});

export const storeData = data => ({
  type: STOREDATA,
  payload: data
});

export const storeProduct = data => ({
  type: STOREPRODUCT,
  payload: data
});

export const storeTableData = data => ({
  type: STORETABLEDATA,
  payload: data
});
export const storeProductsMaxSumTotal = data => ({
  type: STOREPRODUCTSMAXSUMTOTAL,
  payload: data
});
export const storeProductsMinSumTotal = data => ({
  type: STOREPRODUCTSMINSUMTOTAL,
  payload: data
});
export const storeProductsAverageTotal = data => ({
  type: STOREPRODUCTSAVERAGETOTAL,
  payload: data
});
export const storeProductPriceWeek = data => ({
  type: STOREPRODUCTPRICEWEEK,
  payload: data
});
export const storeCurrProductPriceWeek = data => ({
  type: STORECURRPRODUCTPRICEWEEK,
  payload: data
});

export const onSearchChange = data => ({
  type: ONSEARCHCHANGE,
  payload: data
});

export const createReport = data => ({
  type: CREATEREPORT,
  payload: data
});

export const valueFrom = data => ({
  type: VALUEFROM,
  payload: data
});

export const valueTo = data => ({
  type: VALUETO,
  payload: data
});

export const handleChange = e => {
  return dispatch => {
    if (e.target.name === "valueFrom") {
      dispatch(valueFrom(e.target.value));
    } else {
      dispatch(valueTo(e.target.value));
    }
  };
};

export const setDirectionSort = data => ({
  type: SETDIRECTIONSORT,
  payload: data
});
