/* src/components/layout/FramerMotionTest/components/ToggleButtonSm.tsx */

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ToggleButtonSm = styled(motion.button)<{ $isExpanded: boolean }>`
  background-color: rgba(0, 0, 255, 0.5);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  height: 66.7%;
  justify-content: center;
  align-items: center;
  z-index: 900;
  overflow: hidden;
  margin-right: 20px;
  position: absolute;
  /*   display: none; */
`;

export const ToggleButtonSmText = styled(motion.span)``;

/* export const ToggleButtonSm = styled(motion.button)<{ $isExpanded: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 60px;
  background: #4caf50;
  color: #ffffff;
  border: none;
  cursor: pointer;
  z-index: 5;
  overflow: hidden;
  border-radius: ${({ $isExpanded }) =>
    $isExpanded ? "0 10px 10px 0" : "10px"};
`;

export const ToggleButtonSmText = styled(motion.span)`
  font-size: 20px;
  font-weight: bold;
`;
 */
