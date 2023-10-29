import { CHANGE_SEARCH_FIELD } from "./constants.js";

const initialState = {
  searchField: "",
};

// reducer = pure function
// action = {}
export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      // return new state with action.payload
      // Object.assign({}, state, what to change in obj)
      return Object.assign({}, state, { searchField: action.payload });
    // return { ...state, action.payload };
    default:
      return state;
  }
};
