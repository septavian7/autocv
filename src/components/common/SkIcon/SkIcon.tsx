/* src/components/common/SkIcon/SkIcon.tsx */

/* --------- IMPORT --------- */
// Plugins/Tools
import React from "react";
import { SmallIcon, LargeIcon } from "../../../styles/SkIconStyles";

// Icons (Main)
import MotionPhotosAutoIcon from "@mui/icons-material/MotionPhotosAuto"; // AutoCV App Icon
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"; // Make CV
import SettingsIcon from "@mui/icons-material/Settings"; // Settings
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard"; // Tools Menu
import Contrast from "@mui/icons-material/Contrast"; // Color Theme (Light/Dark)

// Icons (Toggle Visibility)
import BedtimeIcon from "@mui/icons-material/Bedtime";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PowerSettingsNew from "@mui/icons-material/PowerSettingsNew";

// Icons (Profile/Account)
import AccountCircle from "@mui/icons-material/AccountCircle";

/* --- SETUP ICON IMPORTS --- */

export const iconComponents = {
  // Icons (Main)
  motionPhotosAuto: MotionPhotosAutoIcon, // AutoCV App Icon
  autoAwesome: AutoAwesomeIcon, // Make CV
  settings: SettingsIcon, // Settings
  spaceDashboard: SpaceDashboardIcon, // Tools Menu
  contrast: Contrast, // Color Theme (Light/Dark)

  // Icons (Toggle Visibility)
  bedtimeIcon: BedtimeIcon,
  visibility: VisibilityIcon,
  visibilityoff: VisibilityOffIcon,
  powerSettingsNew: PowerSettingsNew,

  // Icons (Profile/Account)
  accountCircle: AccountCircle,
};

/* --- SETUP ICON EXPORTS --- */

// Setup Props
interface SkIconProps {
  iconName: keyof typeof iconComponents;
  fontSize?: "inherit" | "default" | "small" | "large";
  color?: string;
  style?: React.CSSProperties;
}

// Setup SkIcon
const SkIcon: React.FC<SkIconProps> = ({
  iconName,
  fontSize = "default",
  color = "inherit",
  style,
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

  return StyledIcon;
};

/* --------- EXPORT --------- */

export type IconName = keyof typeof iconComponents;

export default SkIcon;
