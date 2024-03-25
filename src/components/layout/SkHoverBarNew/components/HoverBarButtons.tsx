/* src/components/layout/SkHoverBarNew/components/HoverBarButtons.tsx */

import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  HoverBarButtonMainAnimationProps,
  HoverBarButtonLargeAnimationProps,
  HoverBarButtonSmallAnimationProps,
} from "../animations/HoverBarButtonAnimations";
import {
  toggleHoverBarExpandMinimize,
  toggleMakeMenu,
  toggleMainMenu,
  toggleSettingsMenu,
  toggleTheme,
} from "../utils/HoverBarUtils";

const HoverBarButton = styled(motion.button)<{
  $isExpanded: boolean;
  $backgroundColor: string;
}>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: white;
  border: none;
  border-radius: 18px;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: fixed;
  margin: 5px;
  z-index: 900;
`;

const HoverBarButtonText = styled(motion.span)``;

const HoverBarButtonMain = styled(HoverBarButton)`
  display: flex;
  cursor: pointer;
  margin-left: 0px;
  height: 100%;
`;

const HoverBarButtonMainInnerLeft = styled(motion.div)`
  justify-content: center;
  align-items: center;
  font-size: 40px;
  initial: false,
  animate: (custom) => ({
    width: custom.isExpanded ? "40%" : "100%",
  }),
  transition: { duration: 0.5, ease: "easeInOut" },
`;

const HoverBarButtonMainInnerRight = styled(motion.div)`
  justify-content: right;
  align-items: center;
  font-size: 18px;
  initial: false,
  animate: (custom) => ({
    opacity: custom.isExpanded ? 1 : 0,
    width: custom.isExpanded ? "60%" : "0%",
    transform: custom.isExpanded ? "translateX(0)" : "translateX(20px)",
  }),
  transition: { duration: 0.5, ease: "easeInOut" },
`;

const HoverBarButtonLarge = styled(HoverBarButton)`
  cursor: pointer;
  font-size: 40px;
  width: 70px;
  height: 100%;
`;

const HoverBarButtonSmall = styled(HoverBarButton)`
  cursor: pointer;
  border-radius: 12px;
  margin-right: 5px;
  z-index: 1000;
  font-size: 24px;
  height: 66.7%;
  width: 45px;
`;

const HoverBarButtonLargeMenu = styled(HoverBarButtonLarge)`
  /* individual styles */
`;

const HoverBarButtonLargeSettings = styled(HoverBarButtonLarge)`
  /* individual styles */
`;

const HoverBarButtonSmallTheme = styled(HoverBarButtonSmall)`
  /* individual styles */
`;

const HoverBarButtonSmallMinimize = styled(HoverBarButtonSmall)`
  /* individual styles */
`;

interface MainButtonProps {
  isExpanded: boolean;
  toggleExpanded: (isExpanded: boolean) => void;
}

interface LargeButtonProps {
  isExpanded: boolean;
  viewportWidth?: number;
  buttonType: "menu" | "settings";
}

interface SmallButtonProps {
  isExpanded: boolean;
  viewportWidth?: number;
  buttonType: "minimize" | "theme";
}

export const MainButton: React.FC<MainButtonProps> = ({ isExpanded }) => (
  <HoverBarButtonMain
    onClick={() =>
      isExpanded
        ? toggleHoverBarExpandMinimize()
        : toggleHoverBarExpandMinimize()
    }
    initial={HoverBarButtonMainAnimationProps.initial}
    animate={HoverBarButtonMainAnimationProps.animate(isExpanded)}
    transition={HoverBarButtonMainAnimationProps.transition}
    $isExpanded={isExpanded}
    $backgroundColor="rgba(50, 50, 255, 0.9)"
  >
    <HoverBarButtonMainInnerLeft custom={{ isExpanded }}>
      <HoverBarButtonText>X</HoverBarButtonText>
    </HoverBarButtonMainInnerLeft>
    <HoverBarButtonMainInnerRight custom={{ isExpanded }}>
      <HoverBarButtonText>Make</HoverBarButtonText>
    </HoverBarButtonMainInnerRight>
  </HoverBarButtonMain>
);

export const LargeButton: React.FC<LargeButtonProps> = ({
  isExpanded,
  viewportWidth,
  buttonType,
}) => (
  <>
    {viewportWidth !== undefined && (
      <HoverBarButtonLarge
        onClick={buttonType === "menu" ? toggleMainMenu : toggleSettingsMenu}
        initial={HoverBarButtonLargeAnimationProps.initial(
          viewportWidth,
          buttonType,
        )}
        animate={HoverBarButtonLargeAnimationProps.animate(
          isExpanded,
          viewportWidth,
          buttonType === "menu" ? 0 : 1,
          buttonType,
        )}
        exit={HoverBarButtonLargeAnimationProps.exit}
        transition={HoverBarButtonLargeAnimationProps.transition}
        $isExpanded={isExpanded}
        $backgroundColor="rgba(50, 50, 50, 0.9)"
      >
        <HoverBarButtonText>
          {buttonType === "menu" ? "M" : "S"}
        </HoverBarButtonText>
      </HoverBarButtonLarge>
    )}
  </>
);

export const SmallButton: React.FC<SmallButtonProps> = ({
  isExpanded,
  viewportWidth,
  buttonType,
}) => (
  <>
    {viewportWidth !== undefined && (
      <HoverBarButtonSmall
        onClick={
          buttonType === "minimize" ? toggleHoverBarExpandMinimize : toggleTheme
        }
        initial={HoverBarButtonSmallAnimationProps.initial(
          viewportWidth,
          buttonType,
        )}
        animate={HoverBarButtonSmallAnimationProps.animate(
          isExpanded,
          viewportWidth,
          buttonType === "minimize" ? 0 : 1,
          buttonType,
        )}
        exit={HoverBarButtonSmallAnimationProps.exit}
        transition={HoverBarButtonSmallAnimationProps.transition}
        $isExpanded={isExpanded}
        $backgroundColor="rgba(50, 50, 50, 0.9)"
      >
        <HoverBarButtonText>
          {buttonType === "minimize" ? "m" : "T"}
        </HoverBarButtonText>
      </HoverBarButtonSmall>
    )}
  </>
);
