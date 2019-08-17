import { apiUtils } from "../shared/utils";

const getBooks = () =>
  apiUtils.post(
    `
    query {
      books {
        bookId
        author
        title
        price
      }
    }
    `
  );

const editBook = ({ bookId, author, title, price }) =>
  apiUtils.post(
    `
    mutation editBook ($bookId: Int!, $author: String!, $title: String!, $price: Float!){
      editBook(bookId: $bookId, author: $author, title: $title, price: $price) {
        bookId,
        author,
        title,
        price
      }
    }
    `,
    { bookId, author, title, price }
  );

const createBook = ({ bookId, author, title, price }) =>
  apiUtils.post(
    `
    mutation createBook ($author: String!, $title: String!, $price: Float!){
      createBook(author: $author, title: $title, price: $price) {
        author,
        title,
        price
      }
    }
    `,
    { author, title, price }
  );

export default { getBooks, editBook, createBook };
