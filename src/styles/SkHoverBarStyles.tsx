/* src/styles/SkHoverBarStyles.tsx */

import styled from "@emotion/styled";
// import { motion } from "framer-motion";
// import { Theme } from "../types/theme";

type SkHoverBarContainerProps = {
  minimized: boolean;
  // theme: Theme;
};

// SkHoverBarContainer
export const SkHoverBarContainer = styled.div<SkHoverBarContainerProps>`
  /* Positioning */
  position: fixed;
  bottom: 110px;
  right: 0;
  z-index: 1100;

  /* Box Model */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ minimized }) => (minimized ? "76px" : "100vw")};
  overflow: hidden;
  box-sizing: border-box;
  padding-left: ${({ minimized }) => (minimized ? "0" : "0%")};
  padding-right: ${({ minimized }) => (minimized ? "0" : "0%")};

  /* Styling */ /* Disabled for invisible container */
  /* backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px); */
  /*   background: ${({ theme }) => theme.hoverBarBackground}; */
  color: ${({ theme }) => theme.hoverBarTextColor};
  /* box-shadow: ${({ theme }) => theme.hoverBarBoxShadow}; */
  /*   border-radius: 10px; */

  /* Transitions */
  transform: ${({ minimized }) => (minimized ? "none" : "translateX(0%)")};
  transition:
    transform 0.5s ease-in-out,
    width 0.5s ease-in-out;
`;

// ExpandedHoverBar
// export const ExpandedHoverBar = styled(motion.div)`
export const ExpandedHoverBar = styled.div`
  /* Box Model */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;

  /* Styling */
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  background: ${({ theme }) => theme.hoverBarExpandedBackground};
  color: ${({ theme }) => theme.hoverBarTextColor};
  box-shadow: ${({ theme }) => theme.hoverBarExpandedBoxShadow};
  border-radius: 10px;
`;

// MinimizedHoverBar
// export const MinimizedHoverBar = styled(motion.div)`
export const MinimizedHoverBar = styled.div`
  /* Box Model */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  padding: 10px;

  /* Styling */
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  background: ${({ theme }) => theme.hoverBarMinimizedBackground};
  color: ${({ theme }) => theme.hoverBarTextColor};
  box-shadow: ${({ theme }) => theme.hoverBarMinimizedBoxShadow};
  border-radius: 50%;
`;

// SkPsuedoHoverBar
export const SkPsuedoHoverBar = styled.div`
  /* Positioning */
  position: fixed;
  bottom: 124px;
  right: 0%;
  left: 0%;
  z-index: 900;

  /* Box Model */
  width: 100vw;
  height: 10px;

  /* Styling */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(15px);
  background: ${({ theme }) => theme.hoverBarBackground};
  color: ${({ theme }) => theme.hoverBarTextColor};
  box-shadow: ${({ theme }) => theme.hoverBarBoxShadow};
  border-radius: 0px;
  pointer-events: none;

  /* Transitions */
  transition: all 0.5s ease-in-out;
`;

// Alignment Styles
export const LeftAligned = styled.div`
  /* Display */
  display: flex;
  align-items: center;

  /* Box Model */
  margin-left: 10px;
  gap: 0px;
`;

export const CenterAligned = styled.div`
  /* Display */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const RightAligned = styled.div`
  /* Display */
  display: flex;

  /* Box Model */
  margin-right: 10px;
  gap: 0px;
`;
