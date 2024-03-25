// src/components/common/SkIcon/IconRamStencilCircleWhite.tsx

import React from "react";
import { css } from "@emotion/react";
import RamStencilSvg from "../../../assets/icons/ram_0314_blue-stencil-w.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const RamStencilIcon: React.FC<IconProps> = ({
  color = "#000", // Default color set to black, replace with desired default color
  width = "24px", // Default width, adjust as needed
  height = "24px", // Default height, adjust as needed
  ...rest
}) => {
  // Apply custom styles via Emotion's css prop
  const svgStyle = css`
    fill: ${color};
    width: ${width};
    height: ${height};
    // Additional styles to ensure the SVG scales and displays correctly
    display: "block";
    user-select: "none";
  `;

  // Spread the rest of the props along with the custom style
  return <RamStencilSvg {...rest} css={svgStyle} />;
};

export default RamStencilIcon;
