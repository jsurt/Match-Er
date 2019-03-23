import { REGISTER_USER_SUCCESS, registerUser } from "../actions/register";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
  state: ""
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      console.log("Registering user");
      return Object.assign({}, state, {
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
        password: action.password,
        state: action.state
      });
    //case REGISTER_USER_ERROR:
    //console.log("error");
    default:
      return state;
  }
};
