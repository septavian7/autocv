/* src/contexts/SkUserContext.tsx */

// Imports
import React, { createContext, useContext } from "react";
import { userStore } from "../stores/SkUserStore";

// Context Creation
const SkUserStoreContext = createContext(userStore);

// Context Provider
export const SkUserStoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SkUserStoreContext.Provider value={userStore}>
      {children}
    </SkUserStoreContext.Provider>
  );
};

// Hook
export const useSkUserStore = () => useContext(SkUserStoreContext);
