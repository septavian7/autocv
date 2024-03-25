/* src/components/common/SkMenuList/SkMenuItem.tsx */

/* --------- IMPORTS --------- */

import React from "react";
import styled from "@emotion/styled";

// Components
import SkMenuItemIcon from "./SkMenuItemIcon";

// Types
import { IconName } from "../SkIcon/SkIcon";

/* --------- STYLED COMPONENTS --------- */

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  justify-content: space-between;
  padding: 14px;
  border-bottom: 1px solid #2c2c2e;
  height: 26px;
`;

const Label = styled.span`
  margin-left: 10px;
`;

/* --------- PROPS INTERFACE --------- */

interface MenuItemProps {
  iconName?: IconName;
  label: string;
  onClick?: () => void;
  iconColor?: string;
  iconFontSize?: "inherit" | "default" | "small" | "large";
  children?: React.ReactNode;
}

/* --------- COMPONENT DEFINITION --------- */

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

/* --------- EXPORT --------- */

export default MenuItem;
