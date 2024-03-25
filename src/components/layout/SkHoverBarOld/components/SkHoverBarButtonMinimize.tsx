/* src/components/layout/SkHoverBar/components/SkHoverBarButtonMinimize.tsx */

/* --------- IMPORTS --------- */

// React & MobX
import React from "react";
import { observer } from "mobx-react-lite";

// Stores
import { visibilityStore } from "../../../../stores";

// Components
import SkButton from "../../../common/SkButton/SkButton";

/* --------- COMPONENT --------- */

const SkHoverBarButtonMinimize = observer(() => {
  const toggleMinimize = () => visibilityStore.toggleHoverBar();

  return (
    <SkButton
      icon="powerSettingsNew" // Icon for minimizing
      onClick={toggleMinimize}
    />
  );
});

/* --------- EXPORT --------- */

export default SkHoverBarButtonMinimize;
