/* src/components/layout/SkHoverBarNew/HoverBarButtonAnimationProps.tsx */

import { hoverbarButtonAnimations } from "./animations/HoverBarButtonAnimations";

export const toggleButtonAnimationProps = {
  initial: hoverbarButtonAnimations.toggleButton.initial,
  animate: (isExpanded: boolean) =>
    hoverbarButtonAnimations.toggleButton.animate(isExpanded),
  transition: hoverbarButtonAnimations.toggleButton.transition,
};

export const menuButtonAnimationProps = {
  initial: hoverbarButtonAnimations.menuButton.initial,
  animate: (isExpanded: boolean) =>
    hoverbarButtonAnimations.menuButton.animate(isExpanded),
  transition: hoverbarButtonAnimations.menuButton.transition,
};

export const toggleButtonSmAnimationProps = {
  initial: hoverbarButtonAnimations.toggleButtonSm.initial,
  animate: (isExpanded: boolean) =>
    hoverbarButtonAnimations.toggleButtonSm.animate(isExpanded),
  transition: hoverbarButtonAnimations.toggleButtonSm.transition,
};
