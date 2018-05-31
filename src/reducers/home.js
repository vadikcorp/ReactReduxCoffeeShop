import { STOREPRODUCTS } from "../actions/actionTypes";

const initialState = {
  products: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STOREPRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    default:
      return state;
  }
};
