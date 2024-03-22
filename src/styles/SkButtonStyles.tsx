/* src/styles/SkButtonStyles.tsx */

import styled from "@emotion/styled";

// Button Props
interface StyledButtonProps {
  background: string; // Changed from backgroundColor to background
  color: string;
  hoverBackgroundColor: string;
  hoverTextColor: string;
}

// Styled Button
export const StyledButton = styled.button<StyledButtonProps>(
  ({ background, color, hoverBackgroundColor, hoverTextColor }) => ({
    // Display
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    // Box Model
    padding: "0 10px",
    height: "44px",
    margin: "0 6px",
    borderRadius: "10px",

    // Text
    fontSize: "16px",
    color,
    textTransform: "none",

    // Background
    background,

    // Borders
    border: "none",

    // Other
    cursor: "pointer",

    // Transitions
    transition: "box-shadow 0.2s, background-color 0.2s",

    // Pseudo-classes
    "&:hover": {
      backgroundColor: hoverBackgroundColor,
      color: hoverTextColor,
    },

    // Child Selectors
    "& > span + span": {
      marginLeft: "8px",
    },
  }),
);

// Icon Wrapper Props
interface IconWrapperProps {
  hasLabel: boolean;
}

// Icon Wrapper
export const IconWrapper = styled.div<IconWrapperProps>(({ hasLabel }) => ({
  fontSize: "25px",
  marginLeft: hasLabel ? "8px" : "0",
}));

// Icon Style Function
export const getIconStyle = (hasLabel: boolean) => ({
  fontSize: "25px",
  marginLeft: hasLabel ? "8px" : "0",
});
