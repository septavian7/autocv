/* src/components/layout/FramerMotionTest/components/HoverBarButtonMenu.tsx */

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const MenuButton = styled(motion.button)<{ $isExpanded: boolean }>`
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
  order: 2;
`;

export const MenuButtonText = styled(motion.span)``;
