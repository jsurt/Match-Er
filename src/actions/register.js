export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const registerUser = (firstname, lastname, email, password, state) => ({
  type: REGISTER_USER_SUCCESS,
  firstname,
  lastname,
  email,
  password,
  state
});

const registerUserRequest = obj => dispatch => {
  return fetch;
};
