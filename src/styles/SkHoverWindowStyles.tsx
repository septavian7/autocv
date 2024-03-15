/* src/styles/SkHoverWindowStyles.tsx */

import React from "react";
import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; // High z-index to ensure it appears above most elements
  background: rgba(
    0,
    0,
    0,
    0.25
  ); // Semi-transparent background for the overlay
`;

export const HoverWindow = styled.div`
  ${({ theme }) => `
    background: ${theme.background};
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    color: ${theme.text};
    padding: 20px;
    border-radius: 25px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    overflow: auto;
    min-width: 33.3vw;
    max-width: 66.7vw;
    min-height: 25vw;
    max-height: 75vw;
    display: flex;
    flex-direction: column; // Corrected property name
    align-items: center;
    box-sizing: border-box; // Ensure sizing includes padding and border
    position: relative;

    // Scoped reset styles to prevent inheriting styles from host page
    *, *::before, *::after {
      box-sizing: inherit; // Inherit from HoverWindow to ensure consistency
      margin: 0; // Reset margins to prevent unexpected spacing
      padding: 0; // Reset padding to prevent unexpected spacing
      font-family: inherit; // Inherit the font-family set on HoverWindow or higher
      font-size: medium; // Reset font-size to a standard medium size, adjust as needed
      line-height: normal; // Reset line-height to normal to avoid inherited values
      color: inherit; // Inherit color to ensure text color consistency
    }
  `}
`;
