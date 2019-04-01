import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers";
import { messageReducer } from "./reducers/messages";
import { authReducer } from "./reducers/register";

const store = createStore(
  combineReducers({
    auth: authReducer,
    message: messageReducer,
    user: userReducer
  }),
  applyMiddleware(thunk)
);

export default store;
