/* src/styles/SkHoverBarStyles.tsx */

// import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Hover Bar Container
export const SkHoverBarContainer = styled(motion.div)`
  position: fixed;
  bottom: 70px;
  display: flex;
  align-items: center;
  z-index: 2147483650;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  background: ${({ theme }) => theme.hoverBarBackground};
  color: ${({ theme }) => theme.hoverBarTextColor};
  box-shadow: ${({ theme }) => theme.hoverBarBoxShadow};
  overflow: hidden; // Hide the overflowing content
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
