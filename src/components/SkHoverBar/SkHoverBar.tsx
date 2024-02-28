/* components/SkHoverBar/SkHoverBar.tsx */

import React, { useState } from 'react';
import './SkHoverBar.css';
import { observer } from "mobx-react-lite";
import { useThemeStore } from '../../contexts/SkThemeContexts';
import SkHoverWindow from '../SkHoverWindow/SkHoverWindow';
import SkButton from '../SkButton/SkButton';
import SettingsContent from '../../domains/SkSettingsUser/SkSettingsUser'; // Adjust import path as needed

const SkHoverBar: React.FC = observer(() => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false); // State to control settings visibility
  const themeStore = useThemeStore(); // Access the theme store

  // Remove inline styles for background and color, as they are now handled by CSS classes
  const hoverBarClassName = `SkHoverBar ${themeStore.theme}`; // Dynamically set class based on theme

  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);
  const toggleSettings = () => setIsSettingsVisible(!isSettingsVisible); // Toggle settings visibility

  // Dedicated handler for toggling settings visibility
  const handleSettingsToggle = () => {
    console.log("Toggling settings visibility");
    toggleSettings(); // Call the toggle function
  };

  return (
    <div className={hoverBarClassName}> {/* Apply dynamic class name */}
      <SkButton label="Open Modal" onClick={handleOpenModal} primary={true} />
      <SkButton label="Settings" onClick={handleSettingsToggle} /> {/* Use the dedicated handler */}
      {isSettingsVisible && (
        <SkHoverWindow isVisible={isSettingsVisible} onClose={toggleSettings}>
          <SettingsContent onClose={toggleSettings} />
        </SkHoverWindow>
      )}
      <SkHoverWindow isVisible={isModalVisible} onClose={handleCloseModal}>
        {/* Other content for the modal window */}
      </SkHoverWindow>
    </div>
  );
});

export default SkHoverBar;