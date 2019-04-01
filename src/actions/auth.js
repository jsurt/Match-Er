import { API_BASE_URL } from "../config";
import { dispatch } from "rxjs/internal/observable/range";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const userLoginSuccess = () => ({
  type: USER_LOGIN_SUCCESS,
  payload: true
});

export const USER_LOGOUT = "USER_LOGOUT";
export const userLogout = () => ({
  type: USER_LOGOUT,
  payload: false
});

export const login = (username, password) => dispatch => {
  console.log("Logging user in");
  //debugger;
  return fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => {
      console.log("Storing token now");
      //debugger;
      dispatch(userLoginSuccess());
      localStorage.setItem("token", data.authToken);
      const token = localStorage.getItem("token");
      //console.log(token);
    })
    .catch(err => console.error(err));
};

export const logout = () => dispatch => {
  console.log("Logging out user");
  localStorage.clear();
  dispatch(userLogout());
};
