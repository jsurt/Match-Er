import {
  GET_USER_MATCHES_REQUEST,
  GET_USER_MATCHES_SUCCESS,
  GET_USER_MATCHES_ERROR,
  DELETE_MATCH_REQUEST,
  DELETE_MATCH_SUCCESS,
  DELETE_MATCH_ERROR,
  UPDATE_MATCH_SUCCESS
} from "../actions";

const initialState = {
  matches: []
};

export const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_MATCHES_REQUEST:
      console.log("Request made");
      break;
    case GET_USER_MATCHES_SUCCESS:
      console.log(state);
      const matches = action.matches.matches;
      console.log(matches);
      return Object.assign({}, state, {
        matches
      });
    case GET_USER_MATCHES_ERROR:
      console.log("Error");
      break;
    case DELETE_MATCH_REQUEST:
      console.log("Request to delete made");
      break;
    case DELETE_MATCH_SUCCESS:
      console.log(`Deleting message ${action.id}`);
      console.log(...state.matches);
      const updatedMatches = [
        ...state.matches.filter(match => match.id !== action.id)
      ];
      console.log(
        Object.assign({}, state, {
          matches: updatedMatches
        })
      );
      return Object.assign({}, state, {
        matches: updatedMatches
      });
    case DELETE_MATCH_ERROR:
      console.log("Error deleting message");
      break;
    case UPDATE_MATCH_SUCCESS:
      console.log(state.matches);
      const {
        id,
        isAccepted,
        isCompleted,
        comments,
        score,
        datePlayed
      } = action.data;
      const dataObj = {
        id,
        isAccepted,
        isCompleted,
        comments,
        score,
        datePlayed
      };
      console.log(dataObj.score);
      const updateMatch = newData => {
        console.log(newData.comments);
        return state.matches.map(match => {
          if (match.id !== id) {
            return match;
          } else if (match.id === id && newData.score !== null) {
            return {
              ...match,
              ...newData
            };
          } else if (match.id === id && newData.comments.content.length > 0) {
            console.log(match.comments);
            // console.log(
            //   (newData.comments = match.comments.concat(newData.comments))
            // );
            newData.comments = match.comments.concat(newData.comments);
            return {
              ...match,
              ...newData
            };
          } else {
            console.log(newData.comments.content);
            console.log(newData.comments);
            console.log(newData.comments.content.length);
            newData.comments = [];
            return {
              ...match,
              ...newData
            };
          }
        });
      };
      //console.log(updateMatch(dataObj));
      console.log(state);
      // console.log(
      //   Object.assign({}, state, {
      //     matches: updateMatch(dataObj)
      //   })
      // );
      return Object.assign({}, state, {
        matches: updateMatch(dataObj)
      });
    default:
      console.log("Returning state", state);
      return {
        ...state
      };
  }
};
