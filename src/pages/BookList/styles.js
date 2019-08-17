import { css } from "styled-components";
import { tokens } from "../../shared/design";

const styles = {
  container: css`
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
  `,
  totalBooksContainer: css`
    height: 100px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${tokens.COLORS.LIGHT_BLUE};
    position: fixed;
    border-radius: 5px;
    top: 20px;
    right: 5px;
  `
};
export default styles;
