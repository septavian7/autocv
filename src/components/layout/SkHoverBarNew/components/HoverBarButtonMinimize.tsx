/* src/components/layout/FramerMotionTest/components/HoverBarButtonMinimize.tsx */

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HoverBarButtonMinimize = styled(motion.button)<{
  $isExpanded: boolean;
}>`
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
`;

export const HoverBarButtonMinimizeText = styled(motion.span)``;
