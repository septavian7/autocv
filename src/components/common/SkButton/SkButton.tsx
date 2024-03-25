/* src/components/common/SkButton/SkButton.tsx */

/* --------- IMPORTS --------- */

import React from "react";
import { observer } from "mobx-react-lite";
import { useTheme } from "@emotion/react";
import { StyledButton } from "../../../styles/SkButtonStyles";
import { ButtonProps } from "../../../types/components";
import SkIcon from "../SkIcon/SkIcon";

/* --------- COMPONENT DEFINITION --------- */

const SkButton: React.FC<ButtonProps> = observer(
  ({ label, onClick, primary = false, icon, imgSrc, imgAlt, imgStyle }) => {
    const themeStyles = useTheme();

    const iconWithStyles = icon ? (
      <SkIcon iconName={icon} hasLabel={!!label} />
    ) : null;

    const imgWithStyles = imgSrc ? (
      <img
        src={imgSrc}
        alt={imgAlt || "Button image"}
        style={{
          ...imgStyle,
          alignSelf: "center", // Ensure the image is centered vertically
        }}
      />
    ) : null;

    return (
      <StyledButton
        background={
          primary
            ? themeStyles.buttonPrimaryBackground
            : themeStyles.buttonSecondaryBackground
        }
        color={
          primary
            ? themeStyles.buttonPrimaryTextColor
            : themeStyles.buttonSecondaryTextColor
        }
        hoverBackgroundColor={
          primary
            ? themeStyles.hoverPrimaryBackground
            : themeStyles.hoverSecondaryBackground
        }
        hoverTextColor={themeStyles.hoverTextColor}
        onClick={onClick}
      >
        {/* The 'imgWithStyles' is rendered here, applying any custom styles passed via 'imgStyle' */}
        {imgWithStyles}
        {/* Label is conditionally rendered */}
        {label && <span>{label}</span>}
        {/* 'iconWithStyles' is rendered if an icon is provided */}
        {iconWithStyles}
      </StyledButton>
    );
  },
);

/* --------- EXPORT --------- */

export default SkButton;
