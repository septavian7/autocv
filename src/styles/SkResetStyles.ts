/* src/styles/SkResetStyles.ts */

import { css } from "@emotion/react";

export const ResetStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-size: medium;
    line-height: normal;
    color: inherit;
  }
`;
