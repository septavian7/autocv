// src/types/svg.d.ts

declare module "*.svg" {
  import React = require("react");
  import { SerializedStyles } from "@emotion/react";

  export interface SVGComponentProps extends React.SVGProps<SVGSVGElement> {
    css?: SerializedStyles;
    color?: string; // Explicitly include 'color' if needed for clarity or custom handling
  }

  const ReactComponent: React.FC<SVGComponentProps>;
  export default ReactComponent;
}
