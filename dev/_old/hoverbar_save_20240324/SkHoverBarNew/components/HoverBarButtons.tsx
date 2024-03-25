/* src/components/layout/SkHoverBarNew/components/HoverBarButtons.tsx */

import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  HoverBarButtonMain,
  HoverBarButtonMainText,
} from "./HoverBarButtonMain";
import {
  HoverBarButtonMenu,
  HoverBarButtonMenuText,
} from "./HoverBarButtonMenu";
import {
  HoverBarButtonMinimize,
  HoverBarButtonMinimizeText,
} from "./HoverBarButtonMinimize";
import {
  HoverBarButtonSettings,
  HoverBarButtonSettingsText,
} from "./HoverBarButtonSettings";
import { HoverBarButtonAnimations } from "../animations/HoverBarButtonAnimations";
import {
  HoverBarButtonMainAnimationProps,
  HoverBarButtonMenuAnimationProps,
  HoverBarButtonMinimizeAnimationProps,
} from "../props/HoverBarAnimationProps";

interface HoverBarButtonsProps {
  isExpanded: boolean;
  viewportWidth?: number;
  toggleExpanded: () => void;
  isMobile?: boolean;
}

export const HoverBarButtons: React.FC<HoverBarButtonsProps> = ({
  isExpanded,
  viewportWidth,
  toggleExpanded,
  isMobile = false,
}) => {
  if (isMobile) {
    return (
      <HoverBarButtonMinimize
        onClick={toggleExpanded}
        {...HoverBarButtonMinimizeAnimationProps}
        animate={HoverBarButtonMinimizeAnimationProps.animate(isExpanded)}
        $isExpanded={isExpanded}
      >
        <HoverBarButtonMinimizeText>X</HoverBarButtonMinimizeText>
      </HoverBarButtonMinimize>
    );
  }

  return (
    <>
      <HoverBarButtonMain
        onClick={toggleExpanded}
        {...HoverBarButtonMainAnimationProps}
        animate={HoverBarButtonMainAnimationProps.animate(isExpanded)}
        $isExpanded={isExpanded}
      >
        <HoverBarButtonMainText>X</HoverBarButtonMainText>
      </HoverBarButtonMain>
      <HoverBarButtonMenu
        onClick={toggleExpanded}
        {...HoverBarButtonMenuAnimationProps}
        animate={HoverBarButtonMenuAnimationProps.animate(isExpanded)}
        $isExpanded={isExpanded}
      >
        <HoverBarButtonMenuText>M</HoverBarButtonMenuText>
      </HoverBarButtonMenu>
      {viewportWidth !== undefined && (
        <AnimatePresence mode="wait">
          <HoverBarButtonSettings
            key="settingsButton"
            initial={HoverBarButtonAnimations.HoverBarButtonSettings.initial}
            animate={HoverBarButtonAnimations.HoverBarButtonSettings.animate(
              isExpanded,
              viewportWidth,
            )}
            exit={HoverBarButtonAnimations.HoverBarButtonSettings.exit}
            onClick={toggleExpanded}
            transition={
              HoverBarButtonAnimations.HoverBarButtonSettings.transition
            }
            $isExpanded={isExpanded}
            $viewportWidth={viewportWidth}
          >
            <HoverBarButtonSettingsText>S</HoverBarButtonSettingsText>
          </HoverBarButtonSettings>
        </AnimatePresence>
      )}
    </>
  );
};
