import { css } from "styled-components";
import { tokens } from "../../design";

const styles = {
  container: css`
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    text-align: center;
    flex-direction: column;
    background-color: ${tokens.COLORS.WATER};
  `
};

export default styles;
