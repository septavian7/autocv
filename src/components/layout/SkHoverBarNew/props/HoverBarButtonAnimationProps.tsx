/* src/components/layout/SkHoverBarNew/HoverBarButtonAnimationProps.tsx */

import { HoverBarButtonAnimations } from "../animations/HoverBarButtonAnimations";

export const HoverBarButtonMainAnimationProps = {
  initial: HoverBarButtonAnimations.hoverBarButtonMain.initial,
  animate: (isExpanded: boolean) =>
    HoverBarButtonAnimations.hoverBarButtonMain.animate(isExpanded),
  transition: HoverBarButtonAnimations.hoverBarButtonMain.transition,
};

export const HoverBarButtonMenuAnimationProps = {
  initial: HoverBarButtonAnimations.HoverBarButtonMenu.initial,
  animate: (isExpanded: boolean) =>
    HoverBarButtonAnimations.HoverBarButtonMenu.animate(isExpanded),
  transition: HoverBarButtonAnimations.HoverBarButtonMenu.transition,
};

export const HoverBarButtonMinimizeAnimationProps = {
  initial: HoverBarButtonAnimations.HoverBarButtonMinimize.initial,
  animate: (isExpanded: boolean) =>
    HoverBarButtonAnimations.HoverBarButtonMinimize.animate(isExpanded),
  transition: HoverBarButtonAnimations.HoverBarButtonMinimize.transition,
};
