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
} from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  data: null,
  tableData: [],
  product: "",
  productsMaxSumTotal: null,
  productsMinSumTotal: null,
  productsAverageTotal: null,
  searchTerm: "",
  direction: {
    productsMaxSum: "asc",
    productsMinSum: "asc",
    productsAverage: "asc"
  },
  createReport: false,
  productPriceWeek: [],

  valueFrom: "",
  valueTo: "",

  currProductPriceWeek: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ISLOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case STOREDATA: {
      return {
        ...state,
        data: action.payload
      };
    }
    case STOREPRODUCT: {
      return {
        ...state,
        product: action.payload
      };
    }
    case STORETABLEDATA: {
      return {
        ...state,
        tableData: action.payload
      };
    }
    case STOREPRODUCTSMAXSUMTOTAL: {
      return {
        ...state,
        productsMaxSumTotal: action.payload
      };
    }
    case STOREPRODUCTSMINSUMTOTAL: {
      return {
        ...state,
        productsMinSumTotal: action.payload
      };
    }
    case STOREPRODUCTSAVERAGETOTAL: {
      return {
        ...state,
        productsAverageTotal: action.payload
      };
    }
    case STOREPRODUCTPRICEWEEK: {
      return {
        ...state,
        productPriceWeek: action.payload
      };
    }
    case STORECURRPRODUCTPRICEWEEK: {
      return {
        ...state,
        currProductPriceWeek: action.payload
      };
    }
    case ONSEARCHCHANGE: {
      return {
        ...state,
        searchTerm: action.payload
      };
    }
    case CREATEREPORT: {
      return {
        ...state,
        createReport: action.payload
      };
    }
    case VALUEFROM: {
      return {
        ...state,
        valueFrom: action.payload
      };
    }
    case VALUETO: {
      return {
        ...state,
        valueTo: action.payload
      };
    }
    case SETDIRECTIONSORT: {
      return {
        ...state,
        direction: {
          [action.payload]:
            state.direction[action.payload] === "asc" ? "desc" : "asc"
        }
      };
    }
    default:
      return state;
  }
};
