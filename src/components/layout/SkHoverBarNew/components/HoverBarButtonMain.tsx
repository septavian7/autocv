/* src/components/layout/FramerMotionTest/components/HoverBarButtonMain.tsx */

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ToggleButton = styled(motion.button)<{ $isExpanded: boolean }>`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: visible;
  position: fixed;
  flex-basis: 100px;
  flex-grow: 0;
  order: 1;
`;

export const ToggleButtonText = styled(motion.span)``;
