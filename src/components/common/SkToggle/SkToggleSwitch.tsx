/* src/components/common/SkToggle/SkToggleSwitch.tsx */

import React from "react";
import Switch from "@mui/material/Switch";
import { SwitchProps } from "@mui/material/Switch";

// Basic functional component that accepts SwitchProps
const SkToggleSwitch: React.FC<SwitchProps> = (props) => {
  return <Switch {...props} />;
};

export default SkToggleSwitch;
