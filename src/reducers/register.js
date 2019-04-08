import { USER_LOGIN_SUCCESS, USER_LOGOUT } from "../actions/auth";

const initialState = {
  loggedIn: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      console.log(action.type);
      return Object.assign({}, state, {
        loggedIn: action.payload
      });
    case USER_LOGOUT:
      console.log(action.type);
      return Object.assign({}, state, {
        loggedIn: action.payload
      });
    default:
      console.log("Returning state", state);
      return {
        ...state
      };
  }
};
