/* src/styles/SkGlobalStyles.tsx */

import React from 'react';
import { Global, css } from '@emotion/react';

const SkGlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Avenir';
        src: url('/fonts/Avenir-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: 'Avenir';
        src: url('/fonts/Avenir-Bold.woff2') format('woff2');
        font-weight: bold;
        font-style: normal;
      }
      body {
        font-family: 'Avenir', sans-serif;
      }
    `}
  />
);

export default SkGlobalStyles;
