/* src/components/common/SkIcon/SkIcon.tsx */

/* --------- IMPORTS --------- */

// React
import React from "react";

// Styled Components
import {
  SmallIcon,
  LargeIcon,
  IconWrapper,
} from "../../../styles/SkIconStyles";

// MUI Icons
// Main Icons
import MotionPhotosAutoIcon from "@mui/icons-material/MotionPhotosAuto";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SettingsIcon from "@mui/icons-material/Settings";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import Contrast from "@mui/icons-material/Contrast";

// Visibility Toggle Icons
import BedtimeIcon from "@mui/icons-material/Bedtime";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PowerSettingsNew from "@mui/icons-material/PowerSettingsNew";

// Profile/Account Icons
import AccountCircle from "@mui/icons-material/AccountCircle";

// Custom SVG Icons
import IconRamStencilCircleWhite from "./IconRamStencilCircleWhite";

/* --------- ICON MAPPING --------- */

export const iconComponents = {
  // Main
  motionPhotosAuto: MotionPhotosAutoIcon,
  autoAwesome: AutoAwesomeIcon,
  settings: SettingsIcon,
  spaceDashboard: SpaceDashboardIcon,
  contrast: Contrast,

  // Toggle Visibility
  bedtime: BedtimeIcon,
  visibility: VisibilityIcon,
  visibilityoff: VisibilityOffIcon,
  powerSettingsNew: PowerSettingsNew,

  // Profile/Account
  accountCircle: AccountCircle,

  // Custom Icons
  ramStencilCircleWhite: IconRamStencilCircleWhite,
};

/* --------- COMPONENT DEFINITION --------- */

interface SkIconProps {
  iconName: keyof typeof iconComponents;
  fontSize?: "inherit" | "default" | "small" | "large";
  color?: string;
  style?: React.CSSProperties;
  hasLabel?: boolean;
}

const SkIcon: React.FC<SkIconProps> = ({
  iconName,
  fontSize = "default",
  color = "inherit",
  style,
  hasLabel = false,
}) => {
  const IconComponent = iconComponents[iconName];
  let StyledIcon = (
    <IconComponent style={{ fontSize: "inherit", color, ...style }} />
  );

  if (fontSize === "small") {
    StyledIcon = <SmallIcon>{StyledIcon}</SmallIcon>;
  } else if (fontSize === "large") {
    StyledIcon = <LargeIcon>{StyledIcon}</LargeIcon>;
  }

  return <IconWrapper hasLabel={hasLabel}>{StyledIcon}</IconWrapper>;
};

/* --------- EXPORTS --------- */

export type IconName = keyof typeof iconComponents;
export default SkIcon;
