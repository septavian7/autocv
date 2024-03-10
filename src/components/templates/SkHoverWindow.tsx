/* src/components/templates/SkHoverWindow.tsx */

/* --------- IMPORT --------- */

import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from "mobx-react-lite";
import { useThemeStore } from '../../contexts/SkThemeContext';
import { Container, HoverWindow } from '../../styles/SkHoverWindowStyles';

/* --------- SETUP --------- */

interface SkHoverWindowProps {
  isVisible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const SkHoverWindow: React.FC<SkHoverWindowProps> = observer(({ isVisible, onClose, children }) => {
  const themeStore = useThemeStore();

  return isVisible ? ReactDOM.createPortal(
    <Container onClick={onClose}>
      <HoverWindow theme={themeStore.colors} onClick={e => e.stopPropagation()}>
        {children}
      </HoverWindow>
    </Container>,
    document.body
  ) : null;
});

export default SkHoverWindow;
