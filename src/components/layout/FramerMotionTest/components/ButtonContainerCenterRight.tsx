/* src/components/layout/FramerMotionTest/components/ButtonContainerCenterRight.tsx */

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ButtonContainerCenterRight = styled(motion.div)`
  height: 100%;
  background-color: rgba(0, 200, 200, 0);
  align-items: center;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow: visible;
`;

/* export const ButtonContainerCenterRight = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(75% + 0px);
  height: 100%;
  z-index: 4;
  background: rgba(91, 59, 140, 0.8);
  overflow: hidden;
`; */
