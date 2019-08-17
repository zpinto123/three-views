import React, { Component } from "react";
import PropTypes from "prop-types";
import { Checkbox, Input, Button } from "../../../../shared/components";
import { styleUtils } from "../../../../shared/utils";
import styles from "./styles";

const { style } = styleUtils;
const Container = style("div", styles.container);
const ValueContainer = style("div", styles.valueContainer);
const Label = style("span", styles.label);
const Value = style("span");
const ActionsContainer = style("div");
const Action = style(Button);
const EditValue = style(Input);

const FIELDS = [
  { name: "bookId", editable: false },
  { name: "title", editable: true },
  { name: "author", editable: true },
  { name: "price", editable: true }
];

class BookListItem extends Component {
  constructor(props) {
    super(props);
    const { author, title, price } = props;
    this.state = {
      title,
      author,
      price,
      editing: false
    };
  }

  handleValueChange = field => ({ target: { value } }) =>
    this.setState({ [field]: value });

  handleOnEditClick = () =>
    this.setState(prevState => ({ editing: !prevState.editing }));

  handleSave = () => {
    const { bookId, createBook, editBook, newBook } = this.props;
    const { title, author, price } = this.state;
    if (newBook)
      createBook({ title, author, price }).then(res => {
        this.handleOnEditClick();
      });
    else
      editBook({ bookId, title, author, price }).then(res => {
        this.handleOnEditClick();
      });
  };

  render() {
    const { t, bookId, handleBookSelect, newBook, selected } = this.props;
    const { editing } = this.state;
    return (
      <Container>
        {FIELDS.map(
          ({ name, editable }) =>
            !(newBook && name === "bookId") && (
              <ValueContainer key={name}>
                <Label>{t(name)}</Label>
                {(editing && editable) || (newBook && name !== "bookId") ? (
                  <EditValue
                    value={this.state[name]}
                    handleChange={this.handleValueChange(name)}
                  />
                ) : (
                  <Value>{this.props[name]}</Value>
                )}
              </ValueContainer>
            )
        )}

        {newBook ? (
          <NewBookActions t={t} handleSave={this.handleSave} />
        ) : editing ? (
          <EditingBookActions
            t={t}
            handleOnEditClick={this.handleOnEditClick}
            handleSave={this.handleSave}
          />
        ) : (
          <ViewBookActions
            t={t}
            bookId={bookId}
            handleOnEditClick={this.handleOnEditClick}
            handleBookSelect={handleBookSelect}
            checked={selected}
          />
        )}
      </Container>
    );
  }
}

const NewBookActions = ({ t, handleSave }) => (
  <ActionsContainer>
    <Action handleClick={handleSave}>{t("create")}</Action>
  </ActionsContainer>
);

const EditingBookActions = ({ t, handleOnEditClick, handleSave }) => (
  <ActionsContainer>
    <Action handleClick={handleOnEditClick}>{t("cancel")}</Action>
    <Action handleClick={handleSave}>{t("save")}</Action>
  </ActionsContainer>
);

const ViewBookActions = ({
  t,
  bookId,
  handleOnEditClick,
  handleBookSelect,
  checked
}) => (
  <ActionsContainer>
    <Action handleClick={handleOnEditClick}>{t("edit")}</Action>
    <Checkbox checked={checked} handleChange={handleBookSelect} />
  </ActionsContainer>
);

BookListItem.propTypes = {
  bookId: PropTypes.number,
  author: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  newBook: PropTypes.bool,
  selected: PropTypes.bool,
  handleBookSelect: PropTypes.func
};

BookListItem.defaultProps = {
  author: "",
  title: "",
  price: "",
  newBook: false,
  selected: false
};

export default BookListItem;
