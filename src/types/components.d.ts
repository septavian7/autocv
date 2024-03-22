/* src/types/components.d.ts */

import { IconName } from "../components/common/SkIcon/SkIcon"; // Adjust the import path as necessary

export interface ButtonProps {
  label?: string;
  onClick: () => void;
  primary?: boolean;
  icon?: IconName | null;
  imgSrc?: string;
  imgAlt?: string;
  imgStyle?: React.CSSProperties;
}
