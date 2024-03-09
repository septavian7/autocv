/* SkHoverWindow.tsx */

import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { observer } from "mobx-react-lite";
import { useThemeStore } from '../contexts/SkThemeStoreContexts';

interface SkHoverWindowProps {
  isVisible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2147483640;
  background: rgba(0, 0, 0, 0.25);
`;

const HoverWindow = styled.div(({ theme }) => ({
  background: theme.background,
  backdropFilter: 'blur(15px)',
  webkitBackdropFilter: 'blur(15px)',
  color: theme.text,
  padding: "20px",
  borderRadius: "25px",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  overflow: 'auto',
  // Updated sizes according to the requirements
  minWidth: "33.3vw",
  maxWidth: "66.7vw",
  minHeight: "25vw",
  maxHeight: "75vw",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  position: 'relative', // Ensure it's positioned relative to the container
}));

const SkHoverWindow: React.FC<SkHoverWindowProps> = observer(({ isVisible, onClose, children }) => {
  const themeStore = useThemeStore();

  return isVisible ? ReactDOM.createPortal(
    <Container onClick={onClose}> {/* Optionally, you can add an onClick event to the Container for closing the window when clicking outside */}
      <HoverWindow theme={themeStore.colors} onClick={e => e.stopPropagation()}> {/* Prevent closing when clicking inside the window */}
        {children}
        {/* Removal of the Close button here implies it's managed within the children */}
      </HoverWindow>
    </Container>,
    document.body
  ) : null;
});

export default SkHoverWindow;
