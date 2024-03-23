/* src/components/layout/FramerMotionTest/animations/HoverBarButtonAnimations.tsx */

import React from "react";

export const HoverBarButtonAnimations = {
  /* Main Button */
  hoverBarButtonMain: {
    initial: false,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "100px" : "60px",
      transform: isExpanded
        ? "translateX(calc(0% + -50px))"
        : "translateX(calc(0% + -10px))",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },

  /* Menu Button */
  HoverBarButtonMenu: {
    initial: false,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "60px" : "60px",
      transform: isExpanded ? "translateX(50px)" : "translateX(60px)",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },

  /* Settings Button */
  HoverBarButtonSettings: {
    initial: {
      width: "60px",
      transform: "translate(115px)",
      opacity: 1,
    },
    animate: (isExpanded: boolean, viewportWidth: number) => ({
      width: isExpanded ? "60px" : "60px",
      transform: isExpanded ? "translateX(115px)" : "translateX(60px)",
      opacity: viewportWidth >= 550 ? 1 : 0,
    }),
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: "easeInOut" },
  },

  /* Minimize Button */
  HoverBarButtonMinimize: {
    initial: false,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "40px" : "40px",
      transform: isExpanded ? "translateX(10px)" : "translateX(100px)",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
