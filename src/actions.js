import { CHANGE_SEARCH_FIELD } from "./constants.js";

// return an obj
export const setSearchField = (text) => ({
  // CHANGE_SEARCH_FIELD = const
  type: CHANGE_SEARCH_FIELD,
  // sending data to reducer
  payload: text,
});
