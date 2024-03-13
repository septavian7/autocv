/* src/components/common/SkMenuList/SkMenuItem.tsx */

import React from "react";
import styled from "@emotion/styled";
import SkMenuItemIcon from "./SkMenuItemIcon";
import { IconName } from "../SkIcon/SkIcon";

interface MenuItemProps {
  iconName?: IconName;
  label: string;
  onClick?: () => void;
  iconColor?: string;
  iconFontSize?: "inherit" | "default" | "small" | "large";
  children?: React.ReactNode;
}

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Label = styled.span`
  margin-left: 10px;
`;

const MenuItem: React.FC<MenuItemProps> = ({
  iconName,
  label,
  onClick,
  iconColor,
  iconFontSize,
  children,
}) => {
  return (
    <MenuItemContainer onClick={onClick}>
      {iconName && (
        <SkMenuItemIcon
          iconName={iconName}
          color={iconColor}
          fontSize={iconFontSize}
        />
      )}
      <Label>{label}</Label>
      {children}
    </MenuItemContainer>
  );
};

export default MenuItem;
