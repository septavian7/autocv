/* components/common/SkMenuList/SkMenuItemIcon.tsx */

import React from "react";
import styled from "@emotion/styled";
import SkIcon, { IconName } from "../SkIcon/SkIcon"; // Adjust the import path as needed

interface SkMenuItemIconProps {
  iconName: IconName;
  color?: string;
  fontSize?: "inherit" | "default" | "small" | "large";
}

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;

  // If using a library like MUI, you might set the size here
  svg {
    font-size: 20px; // Example size, adjust as needed
  }
`;

const SkMenuItemIcon: React.FC<SkMenuItemIconProps> = ({
  iconName,
  fontSize,
  color,
}) => {
  return (
    <IconContainer>
      <SkIcon iconName={iconName} fontSize={fontSize} color={color} />
    </IconContainer>
  );
};

export default SkMenuItemIcon;
