import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers";
import { matchReducer } from "./reducers/matches";
import { authReducer } from "./reducers/register";

const store = createStore(
  combineReducers({
    auth: authReducer,
    match: matchReducer,
    user: userReducer
  }),
  applyMiddleware(thunk)
);

export default store;
