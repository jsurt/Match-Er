import {
  GET_USER_MESSAGES_REQUEST,
  GET_USER_MESSAGES_SUCCESS,
  GET_USER_MESSAGES_ERROR
} from "../actions";

const initialState = {
  messageCount: 0,
  messages: []
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_MESSAGES_REQUEST:
      console.log("Request made");
      break;
    case GET_USER_MESSAGES_SUCCESS:
      console.log("Success");
      const messages = action.messages.messages;
      const messageCount = messages.length;
      console.log(messages, messageCount);
      return Object.assign({}, state, {
        messageCount,
        messages
      });
    case GET_USER_MESSAGES_ERROR:
      console.log("Error");
      break;
    default:
      console.log("Default");
      break;
  }
  return state;
};
