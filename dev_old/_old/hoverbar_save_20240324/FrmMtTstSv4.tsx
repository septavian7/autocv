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
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "react-native-elements";

/* --------- STYLES --------- */

const OuterContainer = styled(motion.div)`
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

const HoverBarContainer = styled(motion.div)`
  position: relative;
  /*   background-color: #808080; */
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: right;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
`;

const InnerContainerLeft = styled(motion.div)`
  position: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
`;

const InnerContainerRight = styled(motion.div)`
  position: flex-end;
  display: flex;
  align-items: center;
  /*   justify-content: center; */
  overflow: visible;
  height: 100%;
  /*   width: 50%; */
  background-color: rgba(0, 255, 0, 0);
`;

const ButtonContainerCenter = styled(motion.div)`
  height: 100%;
  background-color: rgba(200, 0, 200, 0);
  align-items: center;
  justify-content: left;
  position: relative;
  display: flex;
  overflow: visible;
`;

const ButtonContainerCenterRight = styled(motion.div)`
  height: 100%;
  background-color: rgba(0, 200, 200, 0);
  align-items: center;
  position: relative;
  display: flex;
  overflow: visible;
`;

const ButtonContainerRight = styled(motion.div)`
  height: 100%;
  background-color: rgba(200, 200, 0, 0);
  align-items: center;
  justify-content: right;
  position: relative;
  display: flex;
  overflow: hidden;
`;

interface ToggleButtonProps {
  $isExpanded: boolean;
}

const ToggleButton = styled(motion.button)<ToggleButtonProps>`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: visible;
  position: fixed;
`;

const ToggleButtonText = styled(motion.span)``;

const MenuButton = styled(motion.button)<ToggleButtonProps>`
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
  /*   display: none; */
`;

const MenuButtonText = styled(motion.span)``;

const SettingsButton = styled(motion.button)<ToggleButtonProps>`
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
  /*   display: none; */
`;

const SettingsButtonText = styled(motion.span)``;

const ToggleButtonSm = styled(motion.button)<ToggleButtonProps>`
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

const ToggleButtonSmText = styled(motion.span)``;

/* --------- COMPONENT --------- */

const FramerMotionTest: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  /* --------- RENDER --------- */

  return (
    <OuterContainer>
      <HoverBarContainer
        initial={false}
        animate={{
          width: isExpanded ? "calc(100% - 0px)" : "calc(100% + 0px)",
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <InnerContainerRight
          initial={false}
          animate={{
            width: isExpanded ? "calc(50% + 1px)" : "calc(0.1% + 60px)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <ButtonContainerCenterRight
            initial={false}
            animate={{
              width: isExpanded ? "calc(75% + 0px)" : "calc(99.9% + 0px)",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <ToggleButton
              onClick={toggleExpanded}
              initial={false}
              animate={{
                width: isExpanded ? "100px" : "60px",
                transform: isExpanded
                  ? "translateX(calc(0% + -50px))"
                  : "translateX(calc(0% + -10px))",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              $isExpanded={isExpanded}
            >
              <ToggleButtonText>X</ToggleButtonText>
            </ToggleButton>
            <MenuButton
              onClick={toggleExpanded}
              initial={false}
              animate={{
                width: isExpanded ? "60px" : "60px",
                transform: isExpanded ? "translateX(50px)" : "translateX(60px)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              $isExpanded={isExpanded}
            >
              <MenuButtonText>M</MenuButtonText>
            </MenuButton>
            <SettingsButton
              onClick={toggleExpanded}
              initial={false}
              animate={{
                width: isExpanded ? "60px" : "60px",
                transform: isExpanded
                  ? "translateX(115px)"
                  : "translateX(125px)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              $isExpanded={isExpanded}
            >
              <SettingsButtonText>S</SettingsButtonText>
            </SettingsButton>
          </ButtonContainerCenterRight>
          <ButtonContainerRight
            initial={false}
            animate={{
              width: isExpanded ? "calc(25% + 0px)" : "calc(0.1% + 0px)",
              transform: isExpanded ? "translateX(0px)" : "translateX(0px)",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <ToggleButtonSm
              onClick={toggleExpanded}
              initial={false}
              animate={{
                width: isExpanded ? "40px" : "40px",
                transform: isExpanded
                  ? "translateX(10px)"
                  : "translateX(100px)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              $isExpanded={isExpanded}
            >
              <ToggleButtonSmText>X</ToggleButtonSmText>
            </ToggleButtonSm>
          </ButtonContainerRight>
        </InnerContainerRight>
      </HoverBarContainer>
    </OuterContainer>
  );
};

export default FramerMotionTest;
