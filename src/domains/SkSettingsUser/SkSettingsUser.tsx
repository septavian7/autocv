// domains/SkSettingsUser/SkSettingsUser.tsx

import React from 'react';
import { observer } from "mobx-react-lite";
import { useThemeStore } from '../../contexts/SkThemeContexts';
import SkButton from '../../components/SkButton/SkButton';

const SettingsContent: React.FC<{ onClose: () => void }> = observer(({ onClose }) => {
  const themeStore = useThemeStore();

  const toggleTheme = () => {
    themeStore.toggleTheme();
  };

  return (
    <div>
      <h2>Settings</h2>
      <SkButton label={`Switch to ${themeStore.theme === 'light' ? 'Dark' : 'Light'} Theme`} onClick={toggleTheme} />
      <SkButton label="Close" onClick={onClose} />
    </div>
  );
});

export default SettingsContent;
