/* src/components/common/SkButton/SkButton.tsx */

// Imports
import React from "react";
import { StyledButton } from "../../../styles/SkButtonStyles";
import { observer } from "mobx-react-lite";
import { useTheme } from "../../../contexts/SkThemeContext";
import { ButtonProps } from "../../../types/components";
import SkIcon from "../SkIcon/SkIcon";

// Button component
const SkButton: React.FC<ButtonProps> = observer(
  ({ label, onClick, primary = false, icon }) => {
    const themeStyles = useTheme();

    const iconWithStyles = icon ? (
      <SkIcon iconName={icon} hasLabel={!!label} />
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
