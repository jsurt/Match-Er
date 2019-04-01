import { API_BASE_URL } from "../config";
import { dispatch } from "rxjs/internal/observable/range";
//import { login } from "../actions/auth";

export const registerUser = data => dispatch => {
  console.log(data);
  //debugger;
  return fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("Ready to dispatch to login");
      const username = res.username;
      const password = data.password;
      //debugger;
      //dispatch(login(username, password));
    })
    .catch(err => console.error(err));
};
