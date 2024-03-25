/* src/components/layout/SkHoverBarNew2/components/HoverBarButtons.tsx */

import React from "react";
import { UseHoverBarState } from "../state/HoverBarState";

// This component will be a button that, when clicked, toggles the expand/minimize state.
const HoverBarButtonTest: React.FC = () => {
  const { toggleExpanded } = UseHoverBarState();

  return <button onClick={toggleExpanded}>Toggle Expand/Minimize</button>;
};

export default HoverBarButtonTest;
