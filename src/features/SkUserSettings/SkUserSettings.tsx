/* SkUserSettings.tsx */

import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import { useSkUserStore } from '../../contexts/SkUserStoreContexts'; // Adjust the import path as needed
import SkHoverWindow from '../../templates/SkHoverWindow'; // Adjust the import path as needed
import SkButton from '../../components/SkButton/SkButton';
import EmailInput from './components/EmailInput';
import OutputFormatCheckboxes from './components/OutputFormatCheckboxes';
import AiModelRadios from './components/AiModelRadios';

interface SkUserSettingsProps {
  isVisible: boolean;
  onClose: () => void;
}

const SkUserSettings: React.FC<SkUserSettingsProps> = observer(({ isVisible, onClose }) => {
  const [showSavedMessage, setShowSavedMessage] = useState(false);
  const userStore = useSkUserStore(); // Assuming this hook provides access to your UserStore
  
  const handleSave = () => {
    // Logic to save settings
    console.log("Saving user settings...");
    
    // Show the "Settings Saved" message
    setShowSavedMessage(true);
    setTimeout(() => setShowSavedMessage(false), 3000); // Hide after 3 seconds
  };

  return isVisible ? (
    <SkHoverWindow isVisible={isVisible} onClose={onClose}>
      <h2>Settings</h2>
      <form>
        <EmailInput />
        <br />
        <OutputFormatCheckboxes />
        <AiModelRadios />
      </form>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', position: 'relative' }}>
        <SkButton label="Close" onClick={onClose} />
        <div style={{ width: '10px' }}></div>
        <SkButton label="Save" onClick={handleSave} primary />
        {showSavedMessage && (
          <span style={{
            position: 'absolute',
            top: '100%', // Position it right below the buttons
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'gray',
            marginTop: '10px', // Add a little space between the buttons and the message
            whiteSpace: 'nowrap', // Prevent the text from wrapping
          }}>
            Settings Saved
          </span>
        )}
      </div>
      <br />
    </SkHoverWindow>
  ) : null;
});

export { SkUserSettings };