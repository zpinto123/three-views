import { SET_BOOKS } from "./action-types";
import { booksApi } from "../../../services";

export const getBooks = () => async dispatch => {
  booksApi.getBooks().then(({ books }) => {
    dispatch({
      type: SET_BOOKS,
      payload: { books }
    });
  });
};

export const createBook = bookData => async dispatch => {
  booksApi.createBook(bookData).then(() => getBooks()(dispatch));
};

export const editBook = bookData => async dispatch => {
  booksApi.editBook(bookData).then(() => getBooks()(dispatch));
};
