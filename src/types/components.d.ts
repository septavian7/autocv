/* src/types/components.d.ts */

import { IconName } from "../components/common/SkIcon/SkIcon";
import { MotionProps } from "framer-motion";

export interface ButtonProps extends MotionProps {
  label?: string;
  onClick: () => void;
  primary?: boolean;
  icon?: IconName | null;
  imgSrc?: string;
  imgAlt?: string;
  imgStyle?: React.CSSProperties;
}
