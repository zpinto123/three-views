import { css } from "styled-components";
import { tokens } from "../../../../shared/design";

const styles = {
  container: css`
    min-height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: 0.1px solid ${tokens.COLORS.DARK_WATER};
  `,
  valueContainer: css`
    width: 225px;
    display: flex;
    flex-direction: column;
  `,
  label: css`
    font-weight: bold;
  `
};

export default styles;
