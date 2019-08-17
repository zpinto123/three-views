import configureStore from "redux-mock-store";
import books from "../state/books/initial-state";

const mockStore = configureStore();
const store = mockStore({ books });

export { store };
