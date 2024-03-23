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
import {
  OuterContainer,
  HoverbarContainer,
  InnerContainerRight,
  ButtonContainerCenterRight,
  ButtonContainerRight,
} from "./components/HoverbarContainers";

// Importing animation configurations
import { hoverBarAnimations } from "./animations/HoverBarContainerAnimations";
import { hoverbarButtonAnimations } from "./animations/HoverBarButtonAnimations";

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
            initial={hoverBarAnimations.buttonContainerCenterRight.initial}
            animate={hoverBarAnimations.buttonContainerCenterRight.animate(
              isExpanded,
            )}
            transition={
              hoverBarAnimations.buttonContainerCenterRight.transition
            }
          >
            <ToggleButton
              onClick={toggleExpanded}
              initial={hoverbarButtonAnimations.toggleButton.initial}
              animate={hoverbarButtonAnimations.toggleButton.animate(
                isExpanded,
              )}
              transition={hoverbarButtonAnimations.toggleButton.transition}
              $isExpanded={isExpanded}
            >
              <ToggleButtonText>X</ToggleButtonText>
            </ToggleButton>
            <MenuButton
              onClick={toggleExpanded}
              initial={hoverbarButtonAnimations.menuButton.initial}
              animate={hoverbarButtonAnimations.menuButton.animate(isExpanded)}
              transition={hoverbarButtonAnimations.menuButton.transition}
              $isExpanded={isExpanded}
            >
              <MenuButtonText>M</MenuButtonText>
            </MenuButton>
            <AnimatePresence mode="wait">
              <SettingsButton
                key="settingsButton"
                initial={hoverbarButtonAnimations.settingsButton.initial}
                animate={hoverbarButtonAnimations.settingsButton.animate(
                  isExpanded,
                  viewportWidth,
                )}
                exit={hoverbarButtonAnimations.settingsButton.exit}
                onClick={toggleExpanded}
                transition={hoverbarButtonAnimations.settingsButton.transition}
                $isExpanded={isExpanded}
                $viewportWidth={viewportWidth}
              >
                <SettingsButtonText>S</SettingsButtonText>
              </SettingsButton>
            </AnimatePresence>
          </ButtonContainerCenterRight>
          <ButtonContainerRight
            initial={hoverBarAnimations.buttonContainerRight.initial}
            animate={hoverBarAnimations.buttonContainerRight.animate(
              isExpanded,
            )}
            transition={hoverBarAnimations.buttonContainerRight.transition}
          >
            <ToggleButtonSm
              onClick={toggleExpanded}
              initial={hoverbarButtonAnimations.toggleButtonSm.initial}
              animate={hoverbarButtonAnimations.toggleButtonSm.animate(
                isExpanded,
              )}
              transition={hoverbarButtonAnimations.toggleButtonSm.transition}
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
