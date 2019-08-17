import { SET_BOOKS } from "./action-types";
import initialState from "./initial-state";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS: {
      const { books } = action.payload;
      return {
        ...state,
        list: books
      };
    }
    default:
      return state;
  }
};
