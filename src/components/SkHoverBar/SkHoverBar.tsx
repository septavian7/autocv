/* components/SkHoverBar/SkHoverBar.tsx */

import React, { useState } from 'react';
import './SkHoverBar.css';
// Import both useTheme and useHoverBarTheme
import { useTheme } from '../../contexts/SkThemeContexts'; // Adjust the import path as necessary
import { useHoverBarTheme } from './SkHoverBarThemeContext'; // Adjust the import path as necessary
import SkHoverWindow from '../SkHoverWindow/SkHoverWindow';
import SkButton from '../SkButton/SkButton';

const SkHoverBar: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // Use both theme hooks
  const { colors } = useTheme(); // Global theme
  const { background, boxShadow, textColor } = useHoverBarTheme(); // Component-specific theme

  // Example of using both themes
  // Here, we prioritize component-specific theme for styling,
  // but you could use the global theme for other properties or fallbacks
  const hoverBarStyle = {
    background: background, // From component-specific theme
    boxShadow: boxShadow, // From component-specific theme
    color: textColor, // From component-specific theme
    // You could use something from the global theme here if needed
  };

  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);

  return (
    <div className="SkHoverBar" style={hoverBarStyle}>
      <SkButton label="Open Modal" onClick={handleOpenModal} primary={true} />
      <SkHoverWindow isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default SkHoverBar;