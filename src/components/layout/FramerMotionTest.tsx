/* src/components/layout/FramerMotionTest.tsx */

import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

/* --------- STYLES --------- */

const TestContainer = styled(motion.div)`
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 80px;
  background-color: #808080;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* --------- COMPONENT --------- */

const FramerMotionTest: React.FC = () => {
  /* --------- RENDER --------- */

  return (
    <TestContainer
    // Placeholder for future Framer Motion props
    >
      <p>Framer Motion Test</p>
    </TestContainer>
  );
};

export default FramerMotionTest;
