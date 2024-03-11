/* src/styles/SkButtonStyles.tsx */

import React from 'react';
import styled from '@emotion/styled';

interface IconWrapperProps {
  hasLabel: boolean; // Explicitly declaring the custom prop
}

// You might extend this interface if you plan to accept more props for various styles
interface StyledButtonProps {
  // Theme-dependent props
  backgroundColor: string;
  color: string;
  hoverBackgroundColor: string;
  hoverTextColor: string;
}

// Default structural styles
export const StyledButton = styled.button<StyledButtonProps>(({ backgroundColor, color, hoverBackgroundColor, hoverTextColor }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 15px',
  height: '40px',
  margin: '0 6px',
  borderRadius: '4px',
  fontSize: '13px',
  backgroundColor,
  color,
  border: 'none',
  cursor: 'pointer',
  textTransform: 'none',
  transition: 'box-shadow 0.2s, background-color 0.2s',
  '&:hover': {
    backgroundColor: hoverBackgroundColor,
    color: hoverTextColor,
  },
  '& > span + span': {
    marginLeft: '8px',
  },
}));

export const IconWrapper = styled.div<IconWrapperProps>(({ hasLabel }) => ({
  fontSize: '25px',
  marginLeft: hasLabel ? '8px' : '0',
  // Add more styles as needed
}));

export const getIconStyle = (hasLabel: boolean) => ({
  fontSize: '25px',
  marginLeft: hasLabel ? '8px' : '0',
});
