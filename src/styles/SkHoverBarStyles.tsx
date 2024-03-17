/* src/styles/SkHoverBarStyles.tsx */

import styled from "@emotion/styled";

type SkHoverBarContainerProps = {
  minimized: boolean;
};

export const SkHoverBarContainer = styled.div<SkHoverBarContainerProps>`
  position: fixed;
  bottom: 110px;
  z-index: 1100;
  overflow: hidden;

  /* Styles */
  /*   backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px); */
  /*   background: ${({ theme }) => theme.hoverBarBackground}; */
  color: ${({ theme }) => theme.hoverBarTextColor};
  /*   box-shadow: ${({ theme }) => theme.hoverBarBoxShadow}; */
  border-radius: 10px;

  /* Width and alignment */
  width: ${({ minimized }) => (minimized ? "60px" : "100vw")};
  right: 0%;
  padding-left: ${({ minimized }) => (minimized ? "0" : "0%")};
  padding-right: ${({ minimized }) => (minimized ? "0" : "0%")};
  box-sizing: border-box;

  /* Transition */
  transform: ${({ minimized }) =>
    minimized ? "none" : "translateX(0%)"}; /* Adjust for padding */
  transition:
    transform 0.5s ease-in-out,
    width 0.5s ease-in-out;
`;

export const SkPsuedoHoverBar = styled.div`
  position: fixed;
  bottom: 124px; /* Adjust positioning as needed to align with SkHoverBarContainer */
  right: 0%;
  left: 0%;
  width: 100vw; /* Or match to SkHoverBarContainer's logic for minimized state */
  height: 10px; /* New height */
  backdrop-filter: blur(5px);
  pointer-events: none;
  -webkit-backdrop-filter: blur(15px);
  background: ${({ theme }) =>
    theme.hoverBarBackground}; /* Example theme usage */
  color: ${({ theme }) => theme.hoverBarTextColor};
  box-shadow: ${({ theme }) => theme.hoverBarBoxShadow};
  border-radius: 0px;
  z-index: 900; /* Ensure it's below the functional container if they overlap */
  transition: all 0.5s ease-in-out;
`;

// Left Aligned Content
export const LeftAligned = styled.div`
  display: flex;
  align-items: center;

  margin-left: 10px;
  & > span {
    margin-left: 8px;
  }
  gap: 0px;
`;

// Center Aligned Content
export const CenterAligned = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

// Right Aligned Content
export const RightAligned = styled.div`
  display: flex;
  margin-right: 10px;
  gap: 0px;
`;
