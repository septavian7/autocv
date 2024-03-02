/* components/SkButton/SkButton.tsx */

import React from "react";
// import "./SkButton.css"; // Ensure this path is correct
import { observer } from "mobx-react-lite";
import { useThemeStore } from '../../contexts/SkThemeStoreContexts'; // Global theme
import { useButtonTheme } from './SkButtonThemeContext'; // Adjust the import path as necessary
import styled from '@emotion/styled';

interface ButtonProps {
  label: string;
  onClick: () => void;
  primary?: boolean;
}

const SkButton: React.FC<ButtonProps> = observer(({ label, onClick, primary = false }) => {
  const { padding, height, margin, borderRadius, fontSize, transition } = useButtonTheme(); // Button-specific theme
  const themeStore = useThemeStore();
  const { colors } = themeStore;

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
    backgroundColor: primary ? colors.buttonBackground : colors.secondary, // Use buttonBackground for primary buttons
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
});

export default SkButton;
