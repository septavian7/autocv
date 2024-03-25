// RamStencilIcon.tsx
import React from "react";
import styled from "@emotion/styled";

// Using `styled` to create a styled SVG component
const StyledSvg = styled.svg`
  width: 54px; // Adjust as needed
  height: 54px; // Adjust as needed
`;

const RamStencilIcon: React.FC = (props) => (
  <StyledSvg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 1024 1024"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M...1" /> {/* Placeholder for your first path */}
    <path d="M...2" /> {/* Placeholder for your second path */}
    <path d="M...3" /> {/* Placeholder for your third path */}
    <path d="M...4" /> {/* Placeholder for your fourth path */}
    {/* You can add more paths or other SVG elements here */}
  </StyledSvg>
);

export default RamStencilIcon;
