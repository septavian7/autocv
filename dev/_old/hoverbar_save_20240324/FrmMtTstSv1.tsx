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

/* --------- STYLES --------- */

const OuterContainer = styled(motion.div)`
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
  height: 60px;
`;

const HoverBarContainer = styled(motion.div)`
  position: relative;
  /*   background-color: #808080; */
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  /*   overflow: hidden; */
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
`;

const InnerContainerLeft = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
`;

const InnerContainerRight = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  /*   float: left; */
`;

const ButtonContainerCenter = styled(motion.div)`
  height: 100%;
  background-color: rgba(0, 0, 200, 0.5);
  align-items: center;
  position: relative;
  display: flex;
  /*   justify-content: right; */
  /*   overflow: hidden; */
  overflow: visible;
  /*   float: right; */
`;

const ButtonContainerCenterRight = styled(motion.div)`
  height: 100%;
  background-color: rgba(0, 200, 0, 0.9);
  align-items: center;
  position: relative;
  display: flex;
  /*   justify-content: right; */
  /*   overflow: hidden; */
  overflow: visible;
  /*   float: right; */
`;

const ButtonContainerRight = styled(motion.div)`
  height: 100%;
  background-color: rgba(200, 0, 0, 0.9);
  align-items: center;
  position: relative;
  display: flex;
  /*   justify-content: right; */
  /*   overflow: hidden; */
  overflow: visible;
  /*   float: right; */
`;

interface ToggleButtonProps {
  $isExpanded: boolean;
}

const ToggleButton = styled(motion.button)<ToggleButtonProps>`
  /*   padding: 10px; */
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  height: 100%;
  display: flex;
  /*   position: absolute; */
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: visible;
`;

const ButtonText = styled(motion.span)`
  /*   left: 50%;
/*   top: 50%; */
  white-space: nowrap; */
`;

interface ToggleButtonProps {
  $isExpanded: boolean;
}

const ToggleButtonSm = styled(motion.button)<ToggleButtonProps>`
  /*   padding: 10px; */
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: hidden;
/*   transform: translateX(-20px); */
  display: none;!important;
`;

const ButtonTextSm = styled(motion.span)`
  /*   left: 50%;
/*   top: 50%; */
  white-space: nowrap; */
`;

const MenuButton = styled(motion.button)<ToggleButtonProps>`
  /*   padding: 10px; */
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: hidden;
  /*   margin: 10px; */
  display: none;!important;
`;

const MenuButtonText = styled(motion.span)`
  /*   left: 50%;
/*   top: 50%; */
  white-space: nowrap; */
`;

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
          width: isExpanded ? "100%" : "120px",
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <InnerContainerLeft
          initial={false}
          animate={{
            width: isExpanded ? "calc(50% - 0px)" : "calc(0% - 0px)",
            /*             transform: isExpanded ? "translateX(0%)" : "translateX(0%)", */
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        ></InnerContainerLeft>
        <InnerContainerRight
          initial={false}
          animate={{
            width: isExpanded ? "calc(50% + 0px)" : "calc(0% + 120px)",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ButtonContainerCenter
            initial={false}
            animate={{
              width: isExpanded ? "calc(33.33% + 0px)" : "calc(100% + 0px)",
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <ToggleButton
              onClick={toggleExpanded}
              initial={false}
              animate={{
                width: isExpanded ? "99px" : "60px",
                /*                 transform: isExpanded ? "translateX(0px)" : "translateX(0px)",
                 */
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              $isExpanded={isExpanded}
            >
              <AnimatePresence>
                {isExpanded && (
                  <ButtonText
                    key="expanded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0 }}
                  >
                    X Make
                  </ButtonText>
                )}
                {!isExpanded && (
                  <ButtonText
                    key="minimized"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0 }}
                  >
                    X
                  </ButtonText>
                )}
              </AnimatePresence>
            </ToggleButton>
          </ButtonContainerCenter>
          <ButtonContainerCenterRight
            initial={false}
            animate={{
              width: isExpanded ? "calc(33.33%% - 0px)" : "calc(0% + 0px)",
              /*               transform: isExpanded ? "translateX(0%)" : "translateX(0%)", */
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <MenuButton
              onClick={toggleExpanded}
              initial={false}
              animate={{
                width: isExpanded ? "60px" : "60px",
                transform: isExpanded ? "translateX(-5px)" : "translateX(4px)",
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              $isExpanded={isExpanded}
            >
              <AnimatePresence>
                {isExpanded && (
                  <MenuButtonText
                    key="expanded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0 }}
                  >
                    M
                  </MenuButtonText>
                )}
                {!isExpanded && (
                  <MenuButtonText
                    key="minimized"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0 }}
                  >
                    {/* X */}
                  </MenuButtonText>
                )}
              </AnimatePresence>
            </MenuButton>
          </ButtonContainerCenterRight>
          <ButtonContainerRight
            initial={false}
            animate={{
              width: isExpanded ? "calc(33.33%% - 0px)" : "calc(0% + 0px)",
              /*               transform: isExpanded ? "translateX(0%)" : "translateX(0%)", */
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ToggleButtonSm
              onClick={toggleExpanded}
              initial={false}
              animate={{
                width: isExpanded ? "30px" : "30px",
                transform: isExpanded
                  ? "translateX(-10px)"
                  : "translateX(-10px)",
              }}
              transition={{ duration: 0.01, ease: "easeInOut" }}
              $isExpanded={isExpanded}
            >
              <AnimatePresence>
                {isExpanded && (
                  <ButtonText
                    key="expanded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.01 }}
                  >
                    X
                  </ButtonText>
                )}
                {!isExpanded && (
                  <ButtonTextSm
                    key="minimized"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.01 }}
                  >
                    {/* X */}
                  </ButtonTextSm>
                )}
              </AnimatePresence>
            </ToggleButtonSm>
            {/*           <div>Test Text</div> */}
          </ButtonContainerRight>
        </InnerContainerRight>
      </HoverBarContainer>
    </OuterContainer>
  );
};

export default FramerMotionTest;
