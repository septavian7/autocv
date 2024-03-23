/* src/components/layout/SkHoverBarNew/HoverBarState.tsx */

import { useState, useEffect } from "react";
import { visibilityStore } from "../../../stores/SkVisibilityStore";
import { toggleExpanded } from "./HoverBarUtils";

export const useHoverBarState = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { viewportWidth } = visibilityStore;

  useEffect(() => {
    // Initialize the event listener when the component mounts
    window.addEventListener("resize", visibilityStore.handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      visibilityStore.dispose();
    };
  }, []);

  return {
    isExpanded,
    viewportWidth,
    toggleExpanded: () => toggleExpanded(isExpanded, setIsExpanded),
  };
};
