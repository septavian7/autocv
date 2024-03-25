/* src/styles/SkHoverWindowStyles.tsx */

import styled from "@emotion/styled";

// Container Styles
export const Container = styled.div`
  /* Positioning */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  /* Display */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Styling */
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: saturate(70%) blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;

// Hover Window Styles
export const HoverWindow = styled.div`
  ${({ theme }) => `
    /* Positioning */
    position: relative;

    /* Box Model */
    padding: 10px;
    min-width: 33.3vw;
    max-width: 66.7vw;
    min-height: 25vw;
    max-height: 75%;
    overflow: auto;
    box-sizing: border-box;

    /* Display */
    display: flex;
    flex-direction: column;
    align-items: center;

    /* Styling */
    background: ${theme.hoverWindowBackground};
    color: ${theme.text};
    border-radius: 28px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);


    /* Scoped Reset Styles */
    *, *::before, *::after {
      box-sizing: inherit;
      margin: 0;
      padding: 0;
      font-family: inherit;
      font-size: medium;
      line-height: normal;
      color: inherit;
    }
  `}
`;

/* .item-container:last-child {
  border-bottom: none;
} */
