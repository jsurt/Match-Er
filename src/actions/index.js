import { API_BASE_URL } from "../config";
import { dispatch } from "rxjs/internal/observable/range";
import { userInfo } from "os";

export const GET_USER_DATA_REQUEST = "GET_USER_DATA_REQUEST";
export const getUserDataRequest = () => ({
  type: GET_USER_DATA_REQUEST
});

export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const getUserDataSuccess = data => ({
  type: GET_USER_DATA_SUCCESS,
  data
});

export const GET_USER_DATA_ERROR = "GET_USER_DATA_ERROR";
export const getUserDataError = () => ({
  type: GET_USER_DATA_ERROR
});

export const GET_USER_MESSAGES_REQUEST = "GET_USER_MESSAGES_REQUEST";
export const getUserMessagesRequest = () => ({
  type: GET_USER_MESSAGES_REQUEST
});

export const GET_USER_MESSAGES_SUCCESS = "GET_USER_MESSAGES_SUCCESS";
export const getUserMessagesSuccess = messages => ({
  type: GET_USER_MESSAGES_SUCCESS,
  messages
});

export const GET_USER_MESSAGES_ERROR = "GET_USER_MESSAGES_ERROR";
export const getUserMessagesError = () => ({
  type: GET_USER_MESSAGES_ERROR
});

export const getUserData = () => dispatch => {
  dispatch(getUserDataRequest());
  //debugger;
  const token = localStorage.getItem("token");
  return fetch(`${API_BASE_URL}/users/data`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => {
      console.log(data.user.id);
      dispatch(getUserDataSuccess(data));
    })
    .catch(err => {
      dispatch(getUserDataError());
      console.error(err);
    });
};

export const getUserMessages = id => dispatch => {
  console.log("Getting messages");
  dispatch(getUserMessagesRequest());
  const token = localStorage.getItem("token");
  return fetch(`${API_BASE_URL}/messages/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => {
      dispatch(getUserMessagesSuccess(data));
      console.log(data);
    })
    .catch(err => {
      dispatch(getUserMessagesError());
      console.error(err);
    });
};
