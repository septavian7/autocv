/* src/components/layout/FramerMotionTest/components/ButtonContainerRight.tsx */

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ButtonContainerRight = styled(motion.div)`
  height: 100%;
  background-color: rgba(200, 200, 0, 0);
  align-items: center;
  justify-content: right;
  position: relative;
  display: flex;
  overflow: hidden;
`;

/* export const ButtonContainerRight = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(25% + 0px);
  height: 100%;
  z-index: 4;
  background: rgba(91, 59, 140, 0.4);
  overflow: hidden;
  min-width: 40px;
`; */
