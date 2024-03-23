/* src/components/layout/FramerMotionTest/components/InnerContainerRight.tsx */

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const InnerContainerRight = styled(motion.div)`
  position: flex-end;
  display: flex;
  align-items: center;
  /*   justify-content: center; */
  overflow: visible;
  height: 100%;
  /*   width: 50%; */
  background-color: rgba(0, 255, 0, 0);
`;

/* export const InnerContainerRight = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 99.9%;
  z-index: 2;
  background: rgba(91, 59, 140, 0.5);
  border-radius: 10px;
  // backdrop-filter: blur(4px) saturate(180%);
  // -webkit-backdrop-filter: blur(4px) saturate(100%);
`; */
