/* src/components/common/SkMenuList/SkMenuItem.tsx */

import React from 'react';
import styled from '@emotion/styled';
import SkMenuItemIcon from './SkMenuItemIcon';
import { IconName } from '../SkIcon/SkIcon';
import SkToggleSwitch from '../SkToggle/SkToggleSwitch';

interface MenuItemProps {
    iconName?: IconName;
    label: string;
    onClick?: () => void;
    iconColor?: string;
    iconFontSize?: 'inherit' | 'default' | 'small' | 'large';
    isChecked?: boolean; // Is toggle switched checked?
    onToggleChange?: (checked: boolean) => void; // Callback when toggle switch state changes
  }

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  // [To Do] Add styles for menu item container
`;

const Label = styled.span`
  // [To Do] Add styles for label
`;

const MenuItem: React.FC<MenuItemProps> = ({ 
    iconName, 
    label, 
    onClick, 
    iconColor, 
    iconFontSize, 
    isChecked, 
    onToggleChange 
  }) => {
    return (
      <MenuItemContainer onClick={onClick}>
        {iconName && <SkMenuItemIcon iconName={iconName} color={iconColor} fontSize={iconFontSize} />}
        <Label>{label}</Label>
        {typeof isChecked === 'boolean' && onToggleChange && (
          <SkToggleSwitch
            checked={isChecked}
            onChange={(e) => onToggleChange(e.target.checked)}
          />
        )}
      </MenuItemContainer>
    );
  };

export default MenuItem;