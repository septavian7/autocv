/* src/components/layout/SkHoverBarNew/animations/HoverBarAnimationProps.tsx */

import { Transition, Variant } from "framer-motion";

export type HoverBarAnimationProps = {
  initial?: boolean | Variant;
  animate?: Variant;
  transition?: Transition;
  exit?: Variant;
  $isExpanded?: boolean;
  $viewportWidth?: number;
};
