import React, { Component } from "react";
import PropTypes from "prop-types";
import { styleUtils } from "../../utils";
import styles from "./styles";

const { style } = styleUtils;
const Container = style("div", styles.container);

class List extends Component {
  render() {
    const { items, renderItems } = this.props;
    if (!items) return null;
    return <Container>{items.map(data => renderItems(data))}</Container>;
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  renderItems: PropTypes.func.isRequired
};

export default List;
