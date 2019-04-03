import {
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  DELETE_FRIEND_REQUEST,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_ERROR
} from "../actions";
import store from "../store";

const initialState = {
  user: {
    id: "",
    avatarSrc: "https://image.flaticon.com/icons/svg/1177/1177568.svg",
    firstname: "",
    lastname: "",
    username: "",
    state: "",
    friends: []
  },
  community: {
    filter: "country",
    users: []
  }
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA_REQUEST:
      console.log("Data requested");
      break;
    case GET_USER_DATA_SUCCESS:
      console.log(action.data);
      const {
        id,
        firstname,
        lastname,
        username,
        state,
        friends
      } = action.data.user;
      return Object.assign({}, state, {
        user: { id, firstname, lastname, username, state, friends }
      });
    case GET_USER_DATA_ERROR:
      console.log("Data request errored");
      break;
    case DELETE_FRIEND_REQUEST:
      console.log("Request to delete friend");
      break;
    case DELETE_FRIEND_SUCCESS:
      console.log(action.id);
      console.log(state);
      return Object.assign({}, state, {
        user: [...state.user.filter(user => user.id !== action.id)]
      });
    default:
      console.log("Default");
      break;
  }
  return state;
};
