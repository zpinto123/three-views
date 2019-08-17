import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BookList from "./BookList";
import { getBooks } from "../../shared/state/books/actions";
import { localizationUtils } from "../../shared/utils";
import resources from "./locales";

const { withLocalization } = localizationUtils;

const mapStateToProps = state => ({
  books: state.books.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBooks
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLocalization(BookList, resources, "BookList"));
