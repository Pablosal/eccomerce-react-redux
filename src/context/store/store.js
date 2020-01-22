import { createStore } from "redux";

import { MayorReducer } from "../reducers/AllReducers";

let store = createStore(MayorReducer);
export default store;
