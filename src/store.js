import { createStore, combineReducers } from "redux";

import { appReducer } from "./reducers";
import { registerReducer } from "./reducers/register";

const store = createStore(
  combineReducers({
    app: appReducer,
    register: registerReducer
  })
);

export default store;
