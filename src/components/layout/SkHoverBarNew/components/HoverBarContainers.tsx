/* src/components/layout/FramerMotionTest/components/HoverBarContainers.tsx */

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const OuterContainer = styled(motion.div)`
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0);
  border-radius: 10px;
  display: flex;
  justify-content: right;
  overflow: hidden;
  width: 100vw;
  height: 60px;
`;

export const HoverbarContainer = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: right;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
`;

export const ButtonContainerCenterRight = styled(motion.div)`
  height: 100%;
  background-color: rgba(0, 200, 200, 0);
  align-items: center;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow: visible;
`;

export const ButtonContainerRight = styled(motion.div)`
  height: 100%;
  background-color: rgba(200, 200, 0, 0);
  align-items: center;
  justify-content: right;
  position: relative;
  display: flex;
  overflow: hidden;
`;

export const InnerContainerRight = styled(motion.div)`
  position: flex-end;
  display: flex;
  align-items: center;
  overflow: visible;
  height: 100%;
  background-color: rgba(0, 255, 0, 0);
`;
