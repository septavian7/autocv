/* src/components/layout/SkHoverBarNew/HoverBarButtons.tsx */

import React from "react";
import { ToggleButton, ToggleButtonText } from "./HoverBarButtonMain";
import { MenuButton, MenuButtonText } from "./HoverBarButtonMenu";
import { ToggleButtonSm, ToggleButtonSmText } from "./HoverBarButtonMinimize";
import { HoverBarButtonSettingsAnimated } from "./HoverBarButtonSettingsAnimated";
import {
  toggleButtonAnimationProps,
  menuButtonAnimationProps,
  toggleButtonSmAnimationProps,
} from "../props/HoverBarButtonAnimationProps";

interface HoverBarButtonsProps {
  isExpanded: boolean;
  viewportWidth: number;
  toggleExpanded: () => void;
}

interface HoverBarButtonSmProps {
  isExpanded: boolean;
  toggleExpanded: () => void;
}

export const HoverBarButtons: React.FC<HoverBarButtonsProps> = ({
  isExpanded,
  viewportWidth,
  toggleExpanded,
}) => {
  return (
    <>
      <ToggleButton
        onClick={toggleExpanded}
        {...toggleButtonAnimationProps}
        animate={toggleButtonAnimationProps.animate(isExpanded)}
        $isExpanded={isExpanded}
      >
        <ToggleButtonText>X</ToggleButtonText>
      </ToggleButton>
      <MenuButton
        onClick={toggleExpanded}
        {...menuButtonAnimationProps}
        animate={menuButtonAnimationProps.animate(isExpanded)}
        $isExpanded={isExpanded}
      >
        <MenuButtonText>M</MenuButtonText>
      </MenuButton>
      <HoverBarButtonSettingsAnimated
        isExpanded={isExpanded}
        viewportWidth={viewportWidth}
        toggleExpanded={toggleExpanded}
      />
    </>
  );
};

export const HoverBarButtonSm: React.FC<HoverBarButtonSmProps> = ({
  isExpanded,
  toggleExpanded,
}) => {
  return (
    <ToggleButtonSm
      onClick={toggleExpanded}
      {...toggleButtonSmAnimationProps}
      animate={toggleButtonSmAnimationProps.animate(isExpanded)}
      $isExpanded={isExpanded}
    >
      <ToggleButtonSmText>X</ToggleButtonSmText>
    </ToggleButtonSm>
  );
};
