import React from "react";
import PropTypes from "prop-types";
import { Checkbox as MUICheckbox } from "@material-ui/core";

const Checkbox = ({ handleChange, color, ...restOfProps }) => (
  <MUICheckbox onChange={handleChange} color={color} {...restOfProps} />
);

Checkbox.propTypes = {
  color: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
  color: "primary"
};

export default Checkbox;
