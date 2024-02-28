/* components/SKHoverWindow/SkHoverWindow.tsx */

import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from "mobx-react-lite"; // Import observer
import { useThemeStore } from '../../contexts/SkThemeContexts';
import './SkHoverWindow.css';
import SkButton from '../SkButton/SkButton';

interface SkHoverWindowProps {
  isVisible: boolean;
  onClose: () => void;
}

const SkHoverWindow: React.FC<SkHoverWindowProps> = observer(({ isVisible, onClose }) => {
  const themeStore = useThemeStore(); // Access the theme store for global theme
  const { colors } = themeStore; // Destructure for easier access

  // Adjust styles to respond to theme changes
  const hoverWindowStyle: React.CSSProperties = {
    background: colors.background, // Use background color from themeStore
    padding: "20px", // Static style
    borderRadius: "8px", // Static style
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)", // Static style
    overflow: 'auto',
    color: colors.text, // Use text color from themeStore
    width: "80%", // Static style
    height: "60%", // Static style
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
});

export default SkHoverWindow;