/* src/components/layout/FramerMotionTest/components/HoverBarButtonSettings.tsx */

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HoverBarButtonSettings = styled(motion.button)<{
  $isExpanded: boolean;
  $viewportWidth: number;
}>`
  background-color: rgba(255, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 900;
  overflow: hidden;
  margin: 5px;
  position: fixed;
  flex-basis: 60px;
  flex-grow: 0;
  order: 3;
  display: flex;
  opacity: 1;
`;

export const HoverBarButtonSettingsText = styled(motion.span)``;
