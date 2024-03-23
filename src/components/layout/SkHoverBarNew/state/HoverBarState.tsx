/* src/components/layout/SkHoverBarNew/state/HoverBarState.tsx */

import { useState, useEffect } from "react";
import { visibilityStore } from "../../../../stores/SkVisibilityStore";
import { toggleExpanded } from "../utils/HoverBarUtils";

export const UseHoverBarState = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { viewportWidth, handleResize } = visibilityStore;

  useEffect(() => {
    const attachResizeListener = () => {
      if (window.visualViewport) {
        window.visualViewport.addEventListener("resize", handleResize);
      } else {
        window.addEventListener("resize", handleResize);
      }
    };

    const detachResizeListener = () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
      } else {
        window.removeEventListener("resize", handleResize);
      }
    };

    attachResizeListener();

    return () => {
      detachResizeListener();
    };
  }, [handleResize]);

  return {
    isExpanded,
    viewportWidth,
    toggleExpanded: () => toggleExpanded(isExpanded, setIsExpanded),
    handleResize,
  };
};
