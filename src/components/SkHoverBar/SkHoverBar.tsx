/* components/SkHoverBar/SkHoverBar.tsx */

import React, { useState } from 'react';
import './SkHoverBar.css';
import { observer } from "mobx-react-lite";
import { useThemeStore } from '../../contexts/SkThemeContexts';
import SkHoverWindow from '../SkHoverWindow/SkHoverWindow';
import SkButton from '../SkButton/SkButton';

const SkHoverBar: React.FC = observer(() => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const themeStore = useThemeStore(); // Access the theme store
  const { colors } = themeStore; // Destructure for easier access to theme and colors

  // Adjust hoverBarStyle to conditionally set the background based on the theme
  const hoverBarStyle = {
    background: colors.hoverBarBackground, // Use SkHoverBar-specific background
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    color: colors.buttonText,
  };

  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);

  return (
    <div className="SkHoverBar" style={hoverBarStyle}>
      <SkButton label="Open Modal" onClick={handleOpenModal} primary={true} />
      <SkHoverWindow isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
});

export default SkHoverBar;