/* components/SkButton/SkButton.tsx */

import React from "react";
import "./SkButton.css"; // Ensure this path is correct
import { useTheme } from '../../contexts/SkThemeContexts'; // Global theme
import { useButtonTheme } from './SkButtonThemeContext'; // Adjust the import path as necessary

interface ButtonProps {
  label: string;
  onClick: () => void;
  primary?: boolean;
}

const SkButton: React.FC<ButtonProps> = ({ label, onClick, primary = false }) => {
  const { colors } = useTheme(); // Global theme colors
  const { padding, height, margin, borderRadius, fontSize, transition } = useButtonTheme(); // Button-specific theme

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: padding,
    height: height,
    margin: margin,
    borderRadius: borderRadius, // This will apply the rounded edges
    fontSize: fontSize,
    transition: transition,
    backgroundColor: primary ? colors.primary : colors.secondary,
    color: colors.buttonText,
    border: 'none',
    cursor: 'pointer',
    textTransform: 'none',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default SkButton;
