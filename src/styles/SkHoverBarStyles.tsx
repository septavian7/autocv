/* src/styles/SkHoverBarStyles.tsx */

import React from 'react';
import styled from '@emotion/styled';

/* export const IconWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding-top: 2px;
`; */

export const SkHoverBarContainer = styled.div`
  position: fixed;
  top: 5px;
  left: 1%;
  right: 1%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2147483650;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 15px; /* Rounded edges */
  background: ${({ theme }) => theme.hoverBarBackground};
  color: ${({ theme }) => theme.hoverBarTextColor};
  box-shadow: ${({ theme }) => theme.hoverBarBoxShadow};
`;

export const LeftAligned = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
  & > span {
    margin-left: 8px;
  }
`;

export const RightAligned = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
  gap: 0px;
`;
