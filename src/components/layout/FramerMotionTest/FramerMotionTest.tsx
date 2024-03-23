// src/components/layout/FramerMotionTest/FramerMotionTest.tsx

import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { visibilityStore } from "../../../stores/SkVisibilityStore";

// Importing modularized components
import { ToggleButton, ToggleButtonText } from "./components/ToggleButton";
import { MenuButton, MenuButtonText } from "./components/MenuButton";
import {
  SettingsButton,
  SettingsButtonText,
} from "./components/SettingsButton";
import {
  ToggleButtonSm,
  ToggleButtonSmText,
} from "./components/ToggleButtonSm";
import { HoverbarContainer } from "./components/HoverbarContainer";
import { InnerContainerRight } from "./components/InnerContainerRight";
import { ButtonContainerCenterRight } from "./components/ButtonContainerCenterRight";
import { ButtonContainerRight } from "./components/ButtonContainerRight";

// Importing animation configurations
import { hoverBarAnimations } from "./animations/HoverBarAnimations";
import { buttonAnimations } from "./animations/ButtonAnimations";

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

const FramerMotionTest: React.FC = observer(() => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { viewportWidth } = visibilityStore;

  useEffect(() => {
    // Initialize the event listener when the component mounts
    window.addEventListener("resize", visibilityStore.handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      visibilityStore.dispose();
    };
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <OuterContainer>
      <HoverbarContainer
        initial={hoverBarAnimations.initial}
        animate={hoverBarAnimations.animate(isExpanded)}
        transition={hoverBarAnimations.transition}
      >
        <InnerContainerRight
          initial={hoverBarAnimations.innerContainerRight.initial}
          animate={hoverBarAnimations.innerContainerRight.animate(isExpanded)}
          transition={hoverBarAnimations.innerContainerRight.transition}
        >
          <ButtonContainerCenterRight
            initial={buttonAnimations.buttonContainerCenterRight.initial}
            animate={buttonAnimations.buttonContainerCenterRight.animate(
              isExpanded,
            )}
            transition={buttonAnimations.buttonContainerCenterRight.transition}
          >
            <ToggleButton
              onClick={toggleExpanded}
              initial={buttonAnimations.toggleButton.initial}
              animate={buttonAnimations.toggleButton.animate(isExpanded)}
              transition={buttonAnimations.toggleButton.transition}
              $isExpanded={isExpanded}
            >
              <ToggleButtonText>X</ToggleButtonText>
            </ToggleButton>
            <MenuButton
              onClick={toggleExpanded}
              initial={buttonAnimations.menuButton.initial}
              animate={buttonAnimations.menuButton.animate(isExpanded)}
              transition={buttonAnimations.menuButton.transition}
              $isExpanded={isExpanded}
            >
              <MenuButtonText>M</MenuButtonText>
            </MenuButton>
            <AnimatePresence mode="wait">
              <SettingsButton
                key="settingsButton"
                initial={buttonAnimations.settingsButton.initial}
                animate={buttonAnimations.settingsButton.animate(
                  isExpanded,
                  viewportWidth,
                )}
                exit={buttonAnimations.settingsButton.exit}
                onClick={toggleExpanded}
                transition={buttonAnimations.settingsButton.transition}
                $isExpanded={isExpanded}
                $viewportWidth={viewportWidth}
              >
                <SettingsButtonText>S</SettingsButtonText>
              </SettingsButton>
            </AnimatePresence>
          </ButtonContainerCenterRight>
          <ButtonContainerRight
            initial={buttonAnimations.buttonContainerRight.initial}
            animate={buttonAnimations.buttonContainerRight.animate(isExpanded)}
            transition={buttonAnimations.buttonContainerRight.transition}
          >
            <ToggleButtonSm
              onClick={toggleExpanded}
              initial={buttonAnimations.toggleButtonSm.initial}
              animate={buttonAnimations.toggleButtonSm.animate(isExpanded)}
              transition={buttonAnimations.toggleButtonSm.transition}
              $isExpanded={isExpanded}
            >
              <ToggleButtonSmText>X</ToggleButtonSmText>
            </ToggleButtonSm>
          </ButtonContainerRight>
        </InnerContainerRight>
      </HoverbarContainer>
    </OuterContainer>
  );
});

export default FramerMotionTest;
