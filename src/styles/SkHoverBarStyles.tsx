/* src/styles/SkHoverBarStyles.tsx */

import styled from "@emotion/styled";
import { motion } from "framer-motion";

type SkHoverBarContainerProps = {
  minimized: boolean;
};

export const SkHoverBarContainer = styled(motion.div)<SkHoverBarContainerProps>`
  position: fixed;
  bottom: 70px;
  display: flex;
  align-items: center;
  z-index: 1100;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  background: ${({ theme }) => theme.hoverBarBackground};
  color: ${({ theme }) => theme.hoverBarTextColor};
  box-shadow: ${({ theme }) => theme.hoverBarBoxShadow};
  overflow: hidden;
  width: ${({ minimized }) => (minimized ? "60px" : "90vw")};
  right: ${({ minimized }) => (minimized ? "0" : "auto")};
  left: ${({ minimized }) => (minimized ? "auto" : "50%")};
  transform: ${({ minimized }) =>
    minimized ? "translateX(0)" : "translateX(-50%)"};
`;

// Left Aligned Content
export const LeftAligned = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
  & > span {
    margin-left: 8px;
  }
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
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
  gap: 0px;
`;
