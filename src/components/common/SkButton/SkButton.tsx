/* SkButton.tsx */

import React, { cloneElement } from 'react'; // Import React and cloneElement
import styled from '@emotion/styled'; // Import styled from Emotion
import { observer } from "mobx-react-lite"; // Import observer from mobx-react-lite
import { useButtonTheme } from './SkButtonThemeContext'; // Import useButtonTheme from SkButtonThemeContext
import { useThemeStore } from '../../../contexts/SkThemeContext'; // Import useThemeStore from SkThemeStoreContexts

// Define the ButtonProps interface
interface ButtonProps {
  label?: string;
  onClick: () => void;
  primary?: boolean;
  icon?: JSX.Element;
}

// Define the type for styled component props, which now includes ButtonProps for clarity
interface StyledButtonProps extends ButtonProps {
  padding: string;
  height: string;
  margin: string;
  borderRadius: string;
  fontSize: string;
  backgroundColor: string;
  color: string;
  hoverBackgroundColor: string;
  hoverTextColor: string;
}

// Styled component for SkButton
const StyledButton = styled.button<StyledButtonProps>(props => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: props.padding,
  height: props.height,
  margin: props.margin,
  borderRadius: props.borderRadius,
  fontSize: props.fontSize,
  backgroundColor: props.backgroundColor,
  color: props.color,
  border: 'none',
  cursor: 'pointer',
  textTransform: 'none',
  transition: 'box-shadow 0.2s, background-color 0.2s',
  '&:hover': {
    backgroundColor: props.hoverBackgroundColor,
    color: props.hoverTextColor,
  },
  '& > span + span': {
    marginLeft: '8px',
  }
}));

// SkButton functional component
const SkButton: React.FC<ButtonProps> = observer(({ label, onClick, primary = false, icon }) => {
  const { padding, height, margin, borderRadius, fontSize, iconSize } = useButtonTheme();
  const { colors } = useThemeStore();

  const iconWithAdjustedStyle = icon ? cloneElement(icon, {
    style: { fontSize: iconSize, ...icon.props.style, marginLeft: label ? '8px' : '0' },
  }) : null;

  // Preparing props for StyledButton based on theme and context
  const buttonProps = {
    padding,
    height,
    margin,
    borderRadius,
    fontSize,
    backgroundColor: primary ? colors.buttonPrimaryBackgroundColor : colors.buttonSecondaryBackgroundColor,
    color: primary ? colors.buttonPrimaryTextColor : colors.buttonSecondaryTextColor,
    hoverBackgroundColor: primary ? colors.hoverPrimaryBackgroundColor : colors.hoverSecondaryBackgroundColor,
    hoverTextColor: colors.hoverTextColor,
  };

  // Return the StyledButton with the prepared props
  return (
    <StyledButton
      {...buttonProps} // Spread the prepared props
      onClick={onClick}
      primary={primary} // This could be part of buttonProps but left here for clarity
    >
      {label && <span>{label}</span>}
      {iconWithAdjustedStyle}
    </StyledButton>
  );
});

// Export the SkButton component
export default SkButton;
