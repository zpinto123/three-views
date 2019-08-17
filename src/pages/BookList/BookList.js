import React, { Component } from "react";
import { styleUtils } from "../../shared/utils";
import { BookListItem } from "./components";
import { List } from "../../shared/components";
import styles from "./styles";

const { style } = styleUtils;
const Container = style("div", styles.container);
const TotalBooksContainer = style("div", styles.totalBooksContainer);
const ListOfBooks = style(List, styles.listOfBooks);
const BooksLabel = style("span");
const TotalLabel = style("span");

class BookList extends Component {
  state = {
    selectedBooks: {},
    numberOfSelected: 0
  };

  componentDidMount() {
    const { getBooks } = this.props;
    getBooks();
  }

  handleBookSelect = id => ({ target: { checked } }) => {
    const { selectedBooks } = this.state;
    const newSelectedBooks = { ...selectedBooks, [id]: checked };
    const numberOfSelected = Object.keys(newSelectedBooks).filter(
      id => newSelectedBooks[id]
    ).length;

    this.setState({
      selectedBooks: newSelectedBooks,
      numberOfSelected
    });
  };

  renderBookItems = data => {
    const { selectedBooks } = this.state;
    return (
      <BookListItem
        key={data.bookId}
        {...data}
        selected={!!selectedBooks[data.bookId]}
        handleBookSelect={this.handleBookSelect(data.bookId)}
      />
    );
  };

  render() {
    const { t, books } = this.props;
    const { selectedBooks, numberOfSelected } = this.state;
    return (
      <Container>
        <CreateBook />
        <ListOfBooks items={books} renderItems={this.renderBookItems} />
        <TotalBooks
          t={t}
          selectedBooks={selectedBooks}
          numberOfSelected={numberOfSelected}
          books={books}
        />
      </Container>
    );
  }
}

const CreateBook = () => <BookListItem newBook />;

const TotalBooks = ({ t, books, selectedBooks, numberOfSelected }) => {
  const totalPrice = books.reduce(
    (acc, { bookId, price }) => (selectedBooks[bookId] ? acc + price : acc),
    0
  );
  return (
    <TotalBooksContainer>
      <BooksLabel>{`${t("books")}: ${numberOfSelected}`}</BooksLabel>
      <TotalLabel>{`${t("total")}: €${totalPrice.toFixed(2)}`}</TotalLabel>
    </TotalBooksContainer>
  );
};

export default BookList;
