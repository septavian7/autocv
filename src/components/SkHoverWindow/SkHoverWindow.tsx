/* components/SKHoverWindow/SkHoverWindow.tsx */

import React from 'react';
import ReactDOM from 'react-dom';
import { useTheme } from '../../contexts/SkThemeContexts';
import { useHoverWindowTheme } from './SkHoverWindowThemeContext';
import './SkHoverWindow.css';
import SkButton from '../SkButton/SkButton';

interface SkHoverWindowProps {
  isVisible: boolean;
  onClose: () => void;
}

const SkHoverWindow: React.FC<SkHoverWindowProps> = ({ isVisible, onClose }) => {
  // Global theme, kept for potential future use
  const { colors } = useTheme();
  // Component-specific theme
  const { background, padding, borderRadius, boxShadow, textColor, container } = useHoverWindowTheme();

  const hoverWindowStyle: React.CSSProperties = {
    background: background, // Now using background from component-specific theme
    padding: padding, // Now using padding from component-specific theme
    borderRadius: borderRadius, // Now using borderRadius from component-specific theme
    boxShadow: boxShadow, // Now using boxShadow from component-specific theme
    overflow: 'auto',
    color: textColor, // Now using textColor from component-specific theme
    width: container.width, // Adjusted to use width from component-specific theme
    height: container.height, // Adjusted to use height from component-specific theme
  };

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2147483647,
  };

  return isVisible ? ReactDOM.createPortal(
    <div style={containerStyle}>
      <div className="SkHoverWindow" style={hoverWindowStyle}>
        <SkButton label="Close" onClick={onClose} primary={true} />
      </div>
    </div>,
    document.body
  ) : null;
};

export default SkHoverWindow;
