import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BookListItem from "./BookListItem";
import { editBook, createBook } from "../../../../shared/state/books/actions";
import { localizationUtils } from "../../../../shared/utils";
import resources from "./locales";

const { withLocalization } = localizationUtils;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      editBook,
      createBook
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(withLocalization(BookListItem, resources, "BookListItem"));
