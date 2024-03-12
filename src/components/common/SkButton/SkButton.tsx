/* src/components/common/SkButton/SkButton.tsx */

// Imports
import React from "react";
import { StyledButton, IconWrapper } from "../../../styles/SkButtonStyles";
import { observer } from "mobx-react-lite";
import { useTheme } from "../../../contexts/SkThemeContext";
import { ButtonProps } from "../../../types/components";

// Button component
const SkButton: React.FC<ButtonProps> = observer(
  ({ label, onClick, primary = false, icon }) => {
    const themeStyles = useTheme(); // Assuming this fetches theme-specific styles

    // Wrapping the icon with IconWrapper
    const iconWithStyles = icon ? (
      <IconWrapper hasLabel={!!label}>{React.cloneElement(icon)}</IconWrapper>
    ) : null;

    // Render button
    return (
      <StyledButton
        backgroundColor={
          primary
            ? themeStyles.buttonPrimaryBackgroundColor
            : themeStyles.buttonSecondaryBackgroundColor
        }
        color={
          primary
            ? themeStyles.buttonPrimaryTextColor
            : themeStyles.buttonSecondaryTextColor
        }
        hoverBackgroundColor={
          primary
            ? themeStyles.hoverPrimaryBackgroundColor
            : themeStyles.hoverSecondaryBackgroundColor
        }
        hoverTextColor={themeStyles.hoverTextColor}
        onClick={onClick}
      >
        {label && <span>{label}</span>}
        {iconWithStyles}
      </StyledButton>
    );
  },
);

//Export
export default SkButton;
