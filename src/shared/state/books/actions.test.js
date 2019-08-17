import { store } from "../../utils/tests-utils";
import { books } from "../../mocks";

const setBooks = books => ({
  type: "SET_BOOKS",
  payload: { books }
});

describe("action creators", () => {
  it("Saves books to redux if getBooks is successful", () => {
    store.dispatch(setBooks(books));
    expect(store.getActions()).toMatchSnapshot();
  });
});
