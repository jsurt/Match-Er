import {
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR
} from "../actions";

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
      console.log("Data request successful");
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
    default:
      console.log("Default");
      break;
  }
  return state;
};
