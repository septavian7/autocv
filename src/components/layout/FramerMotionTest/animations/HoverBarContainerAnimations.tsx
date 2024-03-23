/* src/components/layout/FramerMotionTest/animations/HoverBarAnimations.tsx */

import React from "react";

export const hoverBarAnimations = {
  /* Hoverbar Container */
  initial: false,
  animate: (isExpanded: boolean) => ({
    width: isExpanded ? "calc(100% - 0px)" : "calc(100% + 0px)",
  }),
  transition: { duration: 0.8, ease: "easeInOut" },

  /* Inner Container Right */
  innerContainerRight: {
    initial: false,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "calc(50% + 1px)" : "calc(0.1% + 60px)",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },

  /* Button Container Center Right */
  buttonContainerCenterRight: {
    initial: false,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "calc(75% + 0px)" : "calc(99.9% + 0px)",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },

  /* Button Container Right */
  buttonContainerRight: {
    initial: false,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "calc(25% + 0px)" : "calc(0.1% + 0px)",
      transform: isExpanded ? "translateX(0px)" : "translateX(0px)",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
