import React from "react";
import { shallow, mount } from "enzyme";

import {
  getAllUsersSuccess,
  GET_ALL_USERS_SUCCESS,
  changeCommunityFilterSuccess,
  CHANGE_COMMUNITY_FILTER,
  getUserMatchesSuccess,
  GET_USER_MATCHES_SUCCESS,
  deleteFriendRequest,
  DELETE_FRIEND_REQUEST,
  addFriendSuccess,
  ADD_FRIEND_SUCCESS,
  sendMatchInviteSuccess,
  SEND_MATCH_SUCCESS,
  deleteMatchSuccess,
  DELETE_MATCH_SUCCESS,
  updateMatchSuccess,
  UPDATE_MATCH_SUCCESS
} from "./index";

describe("get users", () => {
  it("should return all users", () => {
    const action = getAllUsersSuccess;
    expect(action.type).toEqual("GET_ALL_USERS_SUCCESS");
  });
});
