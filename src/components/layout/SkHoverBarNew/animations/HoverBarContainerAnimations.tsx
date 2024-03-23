/* src/components/layout/FramerMotionTest/animations/HoverBarContainerAnimations.tsx */

import React from "react";

export const HoverBarContainerAnimations = {
  /* HoverBar Container */
  initial: false,
  animate: (isExpanded: boolean) => ({
    width: isExpanded ? "calc(100% - 0px)" : "calc(100% + 0px)",
  }),
  transition: { duration: 0.8, ease: "easeInOut" },

  /* Inner Container Right */
  HoverBarInnerContainerRight: {
    initial: false,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "calc(50% + 1px)" : "calc(0.1% + 60px)",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },

  /* Button Container Center-Right */
  HoverBarButtonContainerCenterRight: {
    initial: false,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "calc(75% + 0px)" : "calc(99.9% + 0px)",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },

  /* Button Container Right */
  HoverBarButtonContainerRight: {
    initial: false,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "calc(25% + 0px)" : "calc(0.1% + 0px)",
      transform: isExpanded ? "translateX(0px)" : "translateX(0px)",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
