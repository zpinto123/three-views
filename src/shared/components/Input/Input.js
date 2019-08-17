import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { styleUtils } from "../../utils";
import styles from "./styles";

const { style } = styleUtils;
const SInput = style(TextField, styles.input);

const Input = ({ value, handleChange, margin }) => (
  <SInput value={value} onChange={handleChange} margin={margin} />
);

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func.isRequired
};

Input.defaultProps = {
  value: "",
  margin: "normal"
};

export default Input;
