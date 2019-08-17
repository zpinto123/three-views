import React from "react";
import PropTypes from "prop-types";
import { Button as MUIButton } from "@material-ui/core";
import { styleUtils } from "../../utils";
import styles from "./styles";

const { style } = styleUtils;
const SButton = style(MUIButton, styles.button);

const Button = ({ handleClick, children, size, color, ...restOfProps }) => (
  <SButton onClick={handleClick} color={color} size={size} {...restOfProps}>
    {children}
  </SButton>
);

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  size: "small",
  color: "primary"
};

export default Button;
