import reducer from "./reducers";
import initialState from "./initial-state";
import { books } from "../../mocks";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_BOOKS", () => {
    expect(
      reducer(initialState, {
        type: "SET_BOOKS",
        payload: { books }
      })
    ).toEqual({ list: [...books] });
  });
});
