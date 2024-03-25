// HoverBarContext.tsx

import React, { createContext, useContext, ReactNode } from "react";
import * as HoverBarUtils from "../utils/HoverBarUtils";

interface HoverBarContextType {
  toggleExpandMinimize: typeof HoverBarUtils.toggleHoverBarExpandMinimize;
  // Add other functions from HoverBarUtils here as needed
}

const HoverBarContext = createContext<HoverBarContextType | undefined>(
  undefined,
);

export const HoverBarProvider = ({ children }: { children: ReactNode }) => {
  const value = {
    toggleExpandMinimize: HoverBarUtils.toggleHoverBarExpandMinimize,
    // Initialize other imported functions here
  };

  return (
    <HoverBarContext.Provider value={value}>
      {children}
    </HoverBarContext.Provider>
  );
};

export const useHoverBar = () => {
  const context = useContext(HoverBarContext);
  if (context === undefined) {
    throw new Error("useHoverBar must be used within a HoverBarProvider");
  }
  return context;
};
