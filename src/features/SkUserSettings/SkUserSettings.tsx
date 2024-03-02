/*
---
filepath:       ./features/SkUserSettings/SkUserSettings.tsx
---

/* SkUserSettings.tsx */

import React from 'react';
import { observer } from "mobx-react-lite";
import { useThemeStore } from '../../contexts/SkThemeStoreContexts';
import SkButton from '../../components/SkButton/SkButton';
import EmailInput from './components/EmailInput';
import OutputFormatCheckboxes from './components/OutPutFormatCheckboxes';
import AiModelRadios from './components/AiModelRadios';

interface SkUserSettingsProps {
  onClose: () => void;
}

const SkUserSettings: React.FC<SkUserSettingsProps> = observer(({ onClose }) => {
  const themeStore = useThemeStore();

  const handleSave = () => {
    console.log("Saving user settings...");
  };

  // Use passed onClose prop for the Close button
  return (
    <div style={{ backgroundColor: themeStore.colors.background, color: themeStore.colors.text }}>
      <h2>User Settings</h2>
      <form>
        <EmailInput />
        <OutputFormatCheckboxes />
        <AiModelRadios />
        <div className="button-container" style={{ textAlign: 'center' }}>
          <SkButton label="Close" onClick={onClose} /> {/* Modified to use onClose */}
          <SkButton label="Save" onClick={handleSave} />
        </div>
      </form>
    </div>
  );
});

export { SkUserSettings };