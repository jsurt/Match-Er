import {
  GET_USER_MESSAGES_REQUEST,
  GET_USER_MESSAGES_SUCCESS,
  GET_USER_MESSAGES_ERROR,
  DELETE_MESSAGE_REQUEST,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_ERROR
} from "../actions";

const initialState = {
  messages: []
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_MESSAGES_REQUEST:
      console.log("Request made");
      break;
    case GET_USER_MESSAGES_SUCCESS:
      console.log(state);
      const messages = action.messages.messages;
      console.log(messages);
      return Object.assign({}, state, {
        messages
      });
    case GET_USER_MESSAGES_ERROR:
      console.log("Error");
      break;
    case DELETE_MESSAGE_REQUEST:
      console.log("Request to delete made");
      break;
    case DELETE_MESSAGE_SUCCESS:
      console.log(`Deleting message ${action.id}`);
      console.log(...state.messages);
      const updatedMessages = [
        ...state.messages.filter(message => message.id !== action.id)
      ];
      console.log(
        Object.assign({}, state, {
          messages: updatedMessages
        })
      );
      return Object.assign({}, state, {
        messages: updatedMessages
      });
    case DELETE_MESSAGE_ERROR:
      console.log("Error deleting message");
      break;
    default:
      console.log("Returning state", state);
      return {
        ...state
      };
  }
};
