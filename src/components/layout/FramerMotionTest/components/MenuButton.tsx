/* src/components/layout/FramerMotionTest/components/MenuButton.tsx */

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

/* export const MenuButton = styled(motion.button)<{ $isExpanded: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: #2196f3;
  color: #ffffff;
  border: none;
  cursor: pointer;
  z-index: 5;
  overflow: hidden;
  border-radius: ${({ $isExpanded }) => ($isExpanded ? "0" : "0 10px 10px 0")};
`;

export const MenuButtonText = styled(motion.span)`
  font-size: 24px;
  font-weight: bold;
`;
 */
