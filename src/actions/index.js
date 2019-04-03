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

export const DELETE_FRIEND_REQUEST = "DELETE_FRIEND_REQUEST";
export const deleteFriendRequest = () => ({
  type: DELETE_FRIEND_REQUEST
});

export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const deleteFriendSuccess = id => ({
  type: DELETE_FRIEND_SUCCESS,
  id
});

export const DELETE_FRIEND_ERROR = "DELETE_FRIEND_ERROR";
export const deleteFriendError = () => ({
  type: DELETE_FRIEND_ERROR
});

export const SEND_MESSAGE_REQUEST = "SEND_MESSAGE_REQUEST";
export const sendMessageRequest = () => ({
  type: SEND_MESSAGE_REQUEST
});

export const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";
export const sendMessageSuccess = id => ({
  type: SEND_MESSAGE_SUCCESS,
  id
});

export const SEND_MESSAGE_ERROR = "SEND_MESSAGE_ERROR";
export const sendMessageError = () => ({
  type: SEND_MESSAGE_ERROR
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
      console.log(data.user.friends);
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
  return fetch(`${API_BASE_URL}/messages`, {
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

export const deleteFriend = id => dispatch => {
  console.log(`Deleting friend ${id}`);
  dispatch(deleteFriendRequest());
  const token = localStorage.getItem("token");
  return fetch(`${API_BASE_URL}/friends/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      console.log("Friend deleted", res);
      dispatch(deleteFriendSuccess(id));
    })
    .catch(err => {
      console.error(err);
      dispatch(deleteFriendError());
    });
};

export const sendMessage = (receiverId, content, sentAt) => dispatch => {
  const subject = "subject";
  const msgBody = JSON.stringify({
    receiverId,
    subject,
    content,
    sentAt
  });
  console.log("Sending message");
  dispatch(sendMessageRequest);
  const token = localStorage.getItem("token");
  return fetch(`${API_BASE_URL}/messages`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: msgBody
  })
    .then(res => {
      console.log("message sent");
      dispatch(sendMessageSuccess);
    })
    .catch(err => {
      console.error("There was an error", err);
    });
};
