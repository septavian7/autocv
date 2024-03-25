/* src/components/layout/FramerMotionTest/animations/HoverBarButtonAnimations.tsx */

export const HoverBarButtonAnimations = {
  /* Main Button */
  hoverBarButtonMain: {
    initial: false,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "100px" : "70px",
      transform: isExpanded
        ? "translateX(calc(0% + -50px))"
        : "translateX(calc(0% + -25px))",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },

  /* Large Buttons (Menu, Settings) */
  hoverBarButtonLarge: {
    initial: (viewportWidth: number, buttonType: string) => ({
      transform: "translateX(70px)",
      opacity: buttonType === "menu" ? 1 : viewportWidth >= 550 ? 1 : 0,
      display:
        buttonType === "menu" ? "flex" : viewportWidth >= 550 ? "flex" : "none",
    }),
    animate: (
      isExpanded: boolean,
      viewportWidth: number,
      index: number,
      buttonType: string,
    ) => ({
      transform: isExpanded
        ? `translateX(${50 + index * 75}px)`
        : `translateX(${70 + index * 105}px)`,
      opacity:
        isExpanded && (buttonType === "menu" || viewportWidth >= 550) ? 1 : 0,
      display:
        isExpanded && (buttonType === "menu" || viewportWidth >= 550)
          ? "flex"
          : "none",
    }),
    exit: { opacity: 0 },
    transition: { duration: 0.4, ease: "easeInOut" },
  },

  /* Small Buttons (Minimize, Theme) */
  hoverBarButtonSmall: {
    initial: (viewportWidth: number, buttonType: string) => ({
      transform: "translateX(60px)",
      opacity: buttonType === "minimize" ? 1 : viewportWidth >= 550 ? 1 : 0,
      display:
        buttonType === "minimize"
          ? "flex"
          : viewportWidth >= 550
            ? "flex"
            : "none",
    }),
    animate: (
      isExpanded: boolean,
      viewportWidth: number,
      index: number,
      buttonType: string,
    ) => ({
      transform: isExpanded
        ? `translateX(${index * 60}px)`
        : `translateX(${600 + index * 60}px)`,
      opacity:
        isExpanded && (buttonType === "minimize" || viewportWidth >= 550)
          ? 1
          : 0,
      display:
        isExpanded && (buttonType === "minimize" || viewportWidth >= 550)
          ? "flex"
          : "none",
    }),
    exit: { opacity: 0 },
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export const HoverBarButtonMainAnimationProps = {
  initial: HoverBarButtonAnimations.hoverBarButtonMain.initial,
  animate: (isExpanded: boolean) =>
    HoverBarButtonAnimations.hoverBarButtonMain.animate(isExpanded),
  transition: HoverBarButtonAnimations.hoverBarButtonMain.transition,
};

export const HoverBarButtonLargeAnimationProps = {
  initial: (viewportWidth: number, buttonType: string) =>
    HoverBarButtonAnimations.hoverBarButtonLarge.initial(
      viewportWidth,
      buttonType,
    ),
  animate: (
    isExpanded: boolean,
    viewportWidth: number,
    index: number,
    buttonType: string,
  ) =>
    HoverBarButtonAnimations.hoverBarButtonLarge.animate(
      isExpanded,
      viewportWidth,
      index,
      buttonType,
    ),
  exit: HoverBarButtonAnimations.hoverBarButtonLarge.exit,
  transition: HoverBarButtonAnimations.hoverBarButtonLarge.transition,
};

export const HoverBarButtonSmallAnimationProps = {
  initial: (viewportWidth: number, buttonType: string) =>
    HoverBarButtonAnimations.hoverBarButtonSmall.initial(
      viewportWidth,
      buttonType,
    ),

  animate: (
    isExpanded: boolean,
    viewportWidth: number,
    index: number,
    buttonType: string,
  ) =>
    HoverBarButtonAnimations.hoverBarButtonSmall.animate(
      isExpanded,
      viewportWidth,
      index,
      buttonType,
    ),
  exit: HoverBarButtonAnimations.hoverBarButtonSmall.exit,
  transition: HoverBarButtonAnimations.hoverBarButtonSmall.transition,
};
