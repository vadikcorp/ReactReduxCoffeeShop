import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import home from "./home";
import productDetails from "./productDetails";
import createReport from "./createReport";

export default combineReducers({
  routing: routerReducer,
  home,
  productDetails,
  createReport
});
