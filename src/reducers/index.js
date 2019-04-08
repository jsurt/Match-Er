import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_ERROR,
  CHANGE_COMMUNITY_FILTER,
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  ADD_FRIEND_SUCCESS,
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
    location: "",
    friends: []
  },
  community: {
    filter: "state",
    users: []
  }
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
      console.log("All users requested");
      break;
    case GET_ALL_USERS_SUCCESS:
      console.log(action.data);
      console.log(
        Object.assign({}, state, {
          community: {
            ...state.community,
            users: action.data
          }
        })
      );
      return Object.assign({}, state, {
        community: {
          ...state.community,
          users: action.data
        }
      });
    case GET_ALL_USERS_ERROR:
      console.log("Get all users errored");
      break;
    case CHANGE_COMMUNITY_FILTER:
      console.log("Changing community filter");
      return Object.assign({}, state, {
        community: {
          ...state.community,
          filter: action.filter
        }
      });
    case GET_USER_DATA_REQUEST:
      console.log("Data requested");
      break;
    case GET_USER_DATA_SUCCESS:
      console.log(action.data);
      console.log(state);
      const {
        id,
        firstname,
        lastname,
        username,
        location,
        friends
      } = action.data.user;
      console.log(state);
      return Object.assign({}, state, {
        user: { id, firstname, lastname, username, location, friends }
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
      console.log(...state.user.friends);
      const updatedFriendsDelete = [
        ...state.user.friends.filter(friend => friend._id !== action.id)
      ];
      console.log(updatedFriendsDelete);
      console.log(
        Object.assign({}, state, {
          user: {
            ...state.user,
            friends: updatedFriendsDelete
          }
        })
      );
      return Object.assign({}, state, {
        user: {
          ...state.user,
          friends: updatedFriendsDelete
        }
      });
    case ADD_FRIEND_SUCCESS:
      console.log(action.user);
      console.log(state.user.friends);
      state.user.friends.push(action.user);
      const updatedFriendsAdd = state.user.friends;
      console.log(updatedFriendsAdd);
      console.log(
        Object.assign({}, state, {
          user: {
            ...state.user,
            friends: updatedFriendsAdd
          }
        })
      );
      return Object.assign({}, state, {
        user: {
          ...state.user,
          friends: updatedFriendsAdd
        }
      });
    default:
      return {
        ...state
      };
  }
  console.log(state);
};
