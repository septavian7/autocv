/* src/components/layout/FramerMotionTest.tsx */

/*
 * Issues and resolutions:
 * 1. Passing dynamic styles to motion components:
 *    - Tried using the 'css' prop from '@emotion/react', but it's not compatible with 'motion' components.
 *    - Resolved by using the 'style' prop instead, which is standard in React and works with 'motion' components.
 * 2. Defining transient props for dynamic styles:
 *    - Attempted to use the 'transient' function from '@emotion/react', but it's not available in the package.
 *    - Resolved by directly passing dynamic styles using the 'style' prop on the 'motion' component.
 * 3. Using a boolean state value as a prop for styled components:
 *    - Directly passing the 'isExpanded' state as a prop to styled components caused an error.
 *    - Resolved by prefixing explicitly setting props
 */

import React, { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

/* --------- STYLES --------- */

const TestContainer = styled(motion.div)`
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0);
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  width: 90vw;
  height: 80px;
`;

const TestSubContainer = styled(motion.div)`
  position: relative; // Add this line
  background-color: #808080;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100%;
`;

interface ToggleButtonProps {
  $isExpanded: boolean;
}

const ToggleButton = styled(motion.button)<ToggleButtonProps>`
  padding: 10px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; // Add this line to ensure the button is clickable
`;

/* --------- COMPONENT --------- */

const FramerMotionTest: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  /* --------- RENDER --------- */

  return (
    <TestContainer>
      <TestSubContainer
        initial={false}
        animate={{
          width: isExpanded ? "100%" : "80px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ToggleButton
          onClick={toggleExpanded}
          initial={false}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          $isExpanded={isExpanded}
        >
          X
        </ToggleButton>
      </TestSubContainer>
    </TestContainer>
  );
};

export default FramerMotionTest;
