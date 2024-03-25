/* HoverBarContainers.tsx */

import styled from "@emotion/styled";
import { motion, HTMLMotionProps } from "framer-motion";

interface MotionDivProps extends HTMLMotionProps<"div"> {
  isExpanded?: boolean;
}

type AnimationProps = {
  initial: boolean;
  animate: (isExpanded: boolean) => { width: string; transform?: string };
  transition: { duration: number; ease: string };
};

export const HoverBarContainerAnimations: {
  [key: string]: AnimationProps;
} = {
  /* HoverBar Container */
  HoverBarOuterOuterContainer: {
    initial: true,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "100%" : "100%",
      transform: isExpanded ? "translateX(0px)" : "translateX(0px)",
    }),
    transition: { duration: 0.8, ease: "easeInOut" },
  },

  /* HoverBar Container */
  HoverBarOuterContainer: {
    initial: true,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "100%" : "100%",
      transform: isExpanded ? "translateX(0px)" : "translateX(0px)",
    }),
    transition: { duration: 0.8, ease: "easeInOut" },
  },

  /* Inner Container Right */
  HoverBarInnerContainerRight: {
    initial: true,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "calc(50% + 1px)" : "calc(0.1% + 60px)",
      transform: isExpanded ? "translateX(0px)" : "translateX(0px)",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },

  /* Button Container Center-Right */
  HoverBarButtonContainerCenterRight: {
    initial: true,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "calc(75% + 0px)" : "calc(99.9% + 0px)",
      transform: isExpanded ? "translateX(0px)" : "translateX(0px)",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },

  /* Button Container Right */
  HoverBarButtonContainerFarRight: {
    initial: true,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "calc(25% + 0px)" : "calc(0.1% + 0px)",
      transform: isExpanded ? "translateX(0px)" : "translateX(0px)",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const getAnimatedComponent = <
  P extends object,
  isExpandedRequired extends boolean,
>(
  baseStyles: string,
  animationProps: AnimationProps,
  isExpandedRequiredParam: isExpandedRequired,
) => styled(motion.div)<
  P &
    MotionDivProps &
    (isExpandedRequired extends true
      ? { isExpanded?: boolean; children?: React.ReactNode }
      : { children?: React.ReactNode })
>`
  ${baseStyles};
  width: ${(props) =>
    animationProps.initial
      ? animationProps.initial
      : animationProps.animate(
          isExpandedRequiredParam === true && props.isExpanded !== undefined
            ? props.isExpanded
            : false,
        ).width};
  transform: ${(props) =>
    animationProps.animate(
      isExpandedRequiredParam === true && props.isExpanded !== undefined
        ? props.isExpanded
        : false,
    ).transform || "none"};
  transition: ${animationProps.transition.duration}s ease-in-out;
`;

interface HoverBarOuterOuterContainerProps {}

export const HoverBarOuterOuterContainer = getAnimatedComponent<
  HoverBarOuterOuterContainerProps,
  false
>(
  `
    position: fixed;
    bottom: 100px;
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
     overflow: visible;
    width: 100%;
    height: 60px;
     background-color: rgba(0, 0, 0, 0.1);
    `,
  HoverBarContainerAnimations.HoverBarOuterOuterContainer,
  false, // isExpanded prop is not required
);

interface HoverBarOuterContainerProps
  extends Partial<{ isExpanded: boolean }> {}

export const HoverBarOuterContainer = getAnimatedComponent<
  HoverBarOuterContainerProps,
  true
>(
  `
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 0, 0, 0.5);
  `,
  HoverBarContainerAnimations.HoverBarOuterContainer,
  true, // isExpanded prop is required
);

interface HoverBarInnerContainerRightProps
  extends Partial<{ isExpanded: boolean }> {}

export const HoverBarInnerContainerRight = getAnimatedComponent<
  HoverBarInnerContainerRightProps,
  true
>(
  `
  display: flex;
  width: 50%;
  align-items: center;
  height: 100%;
  background-color: rgba(0, 255, 0, .5);
  `,
  HoverBarContainerAnimations.HoverBarInnerContainerRight,
  true, // isExpanded prop is required
);

interface HoverBarButtonContainerCenterRightProps
  extends Partial<{ isExpanded: boolean }> {}

export const HoverBarButtonContainerCenterRight = getAnimatedComponent<
  HoverBarButtonContainerCenterRightProps,
  true
>(
  `
  height: 100%;
   background-color: rgba(0, 200, 200, 0.3);
  align-items: center;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 50%;
/*   overflow: hidden; */
  `,
  HoverBarContainerAnimations.HoverBarButtonContainerCenterRight,
  true, // isExpanded prop is required
);

interface HoverBarButtonContainerFarRightProps
  extends Partial<{ isExpanded: boolean }> {}

export const HoverBarButtonContainerFarRight = getAnimatedComponent<
  HoverBarButtonContainerFarRightProps,
  true
>(
  `
  height: 100%;
   background-color: rgba(200, 200, 0, 0.3);
  align-items: center;
  justify-content: right;
  position: relative;
  display: flex;
  width: 50%;
  `,
  HoverBarContainerAnimations.HoverBarButtonContainerFarRight,
  true, // isExpanded prop is required
);

const HoverBarContainers = {
  HoverBarOuterOuterContainer,
  HoverBarOuterContainer,
  HoverBarInnerContainerRight,
  HoverBarButtonContainerCenterRight,
  HoverBarButtonContainerFarRight,
};

export default HoverBarContainers;
