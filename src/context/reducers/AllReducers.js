import { combineReducers } from "redux";
import EcommerceReducer from "./EcommerceReducer";
import { CarroReducer } from "./CarroReducer";

export const MayorReducer = combineReducers({
  EcommerceReducer,
  CarroReducer
});
