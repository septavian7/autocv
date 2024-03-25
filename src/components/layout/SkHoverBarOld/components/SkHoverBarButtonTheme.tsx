/* src/components/layout/SkHoverBar/components/SkHoverBarButtonTheme.tsx */

/* --------- IMPORTS --------- */

// React Core & Hooks
import React from "react";
import { useTheme } from "@emotion/react";

// MobX
import { observer } from "mobx-react-lite";

// Stores
import { themeStore } from "../../../../stores";

// Components
import SkButton from "../../../common/SkButton/SkButton";

/* --------- COMPONENT --------- */

const SkHoverBarButtonTheme = observer(() => {
  // Action to toggle the theme
  const toggleTheme = () => themeStore.toggleTheme();

  return (
    <SkButton
      icon="contrast" // Icon for toggling the theme
      onClick={toggleTheme}
    />
  );
});

/* --------- EXPORT --------- */

export default SkHoverBarButtonTheme;
