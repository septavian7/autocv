/* src/components/layout/FramerMotionTest/components/SettingsButton.tsx */

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SettingsButton = styled(motion.button)<{
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

  // @media (max-width: 550px) {
  //   display: none;
  // }
`;

export const SettingsButtonText = styled(motion.span)``;

/* export const SettingsButton = styled(motion.button)<{
  $isExpanded: boolean;
  viewportWidth: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: #f44336;
  color: #ffffff;
  border: none;
  cursor: pointer;
  z-index: 5;
  overflow: hidden;
  border-radius: ${({ $isExpanded, viewportWidth }) =>
    $isExpanded && viewportWidth > 550 ? "0 10px 10px 0" : "0"};
`;

export const SettingsButtonText = styled(motion.span)`
  font-size: 24px;
  font-weight: bold;
`;
 */
