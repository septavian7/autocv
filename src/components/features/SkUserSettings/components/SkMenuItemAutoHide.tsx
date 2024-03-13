/* src/components/features/SkUserSettings/Components/SkMenuItemAutoHide.tsx */

import React from "react";
import SkMenuItem from "../../../common/SkMenuList/SkMenuItem"; // Ensure this path is correct

const SkMenuItemAutoHide: React.FC = () => {
  return (
    <SkMenuItem
      label="Auto-Hide Hover Bar"
      iconName="visibility" // Assuming 'visibility' is the correct iconName
    />
  );
};

export default SkMenuItemAutoHide;
