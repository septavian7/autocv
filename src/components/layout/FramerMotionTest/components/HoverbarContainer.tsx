/* src/components/layout/FramerMotionTest/components/HoverbarContainer.tsx */

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HoverbarContainer = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: right;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
`;

/* export const HoverbarContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  height: 99.9%;
  z-index: 1;
  background: #5b3b8c;
  border-radius: 10px;
  // Shadow
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
 */
