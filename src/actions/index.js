import { API_BASE_URL } from "../config";
import { dispatch } from "rxjs/internal/observable/range";
import { userInfo } from "os";

export const GET_ALL_USERS_REQUEST = "GET_ALL_USERS_REQUEST";
export const getAllUsersRequest = () => ({
  type: GET_ALL_USERS_REQUEST
});

export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
export const getAllUsersSuccess = data => ({
  type: GET_ALL_USERS_SUCCESS,
  data
});

export const GET_ALL_USERS_ERROR = "GET_ALL_USERS_ERROR";
export const getAllUsersError = () => ({
  type: GET_ALL_USERS_ERROR
});

export const CHANGE_COMMUNITY_FILTER = "CHANGE_COMMUNITY_FILTER";
export const changeCommunityFilterSuccess = filter => ({
  type: CHANGE_COMMUNITY_FILTER,
  filter
});

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

export const GET_USER_MATCHES_REQUEST = "GET_USER_MATCHES_REQUEST";
export const getUserMatchesRequest = () => ({
  type: GET_USER_MATCHES_REQUEST
});

export const GET_USER_MATCHES_SUCCESS = "GET_USER_MATCHES_SUCCESS";
export const getUserMatchesSuccess = matches => ({
  type: GET_USER_MATCHES_SUCCESS,
  matches
});

export const GET_USER_MATCHES_ERROR = "GET_USER_MATCHES_ERROR";
export const getUserMatchesError = () => ({
  type: GET_USER_MATCHES_ERROR
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

export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const addFriendSuccess = user => ({
  type: ADD_FRIEND_SUCCESS,
  user
});

export const SEND_MATCH_REQUEST = "SEND_MATCH_REQUEST";
export const sendMatchRequest = () => ({
  type: SEND_MATCH_REQUEST
});

export const SEND_MATCH_SUCCESS = "SEND_MATCH_SUCCESS";
export const sendMatchInviteSuccess = id => ({
  type: SEND_MATCH_SUCCESS,
  id
});

export const SEND_MATCH_ERROR = "SEND_MATCH_ERROR";
export const sendMatchError = () => ({
  type: SEND_MATCH_ERROR
});

export const DELETE_MATCH_REQUEST = "DELETE_MATCH_REQUEST";
export const deleteMatchRequest = () => ({
  type: DELETE_MATCH_REQUEST
});

export const DELETE_MATCH_SUCCESS = "DELETE_MATCH_SUCCESS";
export const deleteMatchSuccess = id => ({
  type: DELETE_MATCH_SUCCESS,
  id
});

export const DELETE_MATCH_ERROR = "DELETE_MATCH_ERROR";
export const deleteMatchError = () => ({
  type: DELETE_MATCH_ERROR
});

export const UPDATE_MATCH_SUCCESS = "UPDATE_MATCH_SUCCESS";
export const updateMatchSuccess = data => ({
  type: UPDATE_MATCH_SUCCESS,
  data
});

export const getAllUsers = () => dispatch => {
  const token = localStorage.getItem("token");
  return fetch(`${API_BASE_URL}/community`, {
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
      console.log(data);
      dispatch(getAllUsersSuccess(data));
    })
    .catch(err => {
      console.error("Error", err);
    });
};

export const changeCommunityFilter = filter => dispatch => {
  console.log("Changing filter");
  dispatch(changeCommunityFilterSuccess(filter));
};

export const getUserData = () => dispatch => {
  //dispatch(getUserDataRequest());
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
      console.log(data);
      dispatch(getUserDataSuccess(data));
      return data;
    })
    .catch(err => {
      //dispatch(getUserDataError());
      console.error(err);
    });
};

export const deleteFriend = id => dispatch => {
  console.log(`Deleting friend ${id}`);
  //dispatch(deleteFriendRequest());
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

export const addFriend = user => dispatch => {
  const token = localStorage.getItem("token");
  return fetch(`${API_BASE_URL}/friends/${user.id}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      console.log("Friend add with id" + user.id, res);
      dispatch(addFriendSuccess(user));
    })
    .catch(err => {
      console.error(err);
      //dispatch(deleteFriendError());
    });
};

export const getUserMatches = id => dispatch => {
  console.log("Getting matches");
  //dispatch(getUserMessagesRequest());
  const token = localStorage.getItem("token");
  return fetch(`${API_BASE_URL}/matches`, {
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
      console.log(data);
      dispatch(getUserMatchesSuccess(data));
    })
    .catch(err => {
      //dispatch(getUserMessagesError());
      console.error(err);
    });
};

export const sendMatchInvite = (receiverId, message, sentAt) => dispatch => {
  const inviteBody = JSON.stringify({
    receiverId,
    message,
    sentAt
  });
  console.log("Sending message");
  //dispatch(sendMessageRequest);
  const token = localStorage.getItem("token");
  return fetch(`${API_BASE_URL}/matches`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: inviteBody
  })
    .then(res => {
      console.log("match invite sent");
      dispatch(sendMatchInviteSuccess);
    })
    .catch(err => {
      console.error("There was an error", err);
    });
};

export const updateMatchInvite = (
  id,
  isAccepted,
  isCompleted,
  comments,
  score,
  datePlayed
) => dispatch => {
  const updateMatchBody = {
    id,
    isAccepted,
    isCompleted,
    comments: {
      content: comments
    },
    score,
    datePlayed
  };
  console.log(updateMatchBody);
  console.log(id);
  const token = localStorage.getItem("token");
  return fetch(`${API_BASE_URL}/matches/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      isAccepted: isAccepted,
      isCompleted: isCompleted,
      comment: comments,
      score: score,
      datePlayed: datePlayed
    })
  })
    .then(res => {
      console.log(isAccepted);
      dispatch(updateMatchSuccess(updateMatchBody));
    })
    .catch(err => console.error("There was an error", err));
};

export const deleteMatch = id => dispatch => {
  console.log("Deleting match in actions");
  const token = localStorage.getItem("token");
  return fetch(`${API_BASE_URL}/matches/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(dispatch(deleteMatchSuccess(id)))
    .catch(err => console.error("There was an error", err));
};
