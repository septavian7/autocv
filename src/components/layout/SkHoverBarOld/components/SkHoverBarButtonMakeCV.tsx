/* src/components/layout/SkHoverBar/components/SkHoverBarButtonMakeCV.tsx */

// React and MobX
import React from "react";
import { observer } from "mobx-react-lite";

// Hooks
import { useTheme } from "@emotion/react";

// Stores
import { visibilityStore } from "../../../../stores";

// Components
import SkButton from "../../../common/SkButton/SkButton";
import { SkMakeCV } from "../../../features/SkMakeCV/SkMakeCV";

const SkHoverBarButtonMakeCV = observer(() => {
  const toggleMakeCV = () => visibilityStore.toggleMakeCVVisible();

  return (
    <>
      <SkButton
        label="Make" // You can keep or remove the label as per your design
        onClick={toggleMakeCV}
        primary={true}
        imgSrc="/assets/icons/ram314_blue_circle.png"
        imgAlt="Make CV"
        imgStyle={{
          width: "36px", // Set your desired width
          height: "36px", // Set your desired height
          padding: "0px",
          marginLeft: "0px",
          marginRight: "10px", // Centers the image horizontally if button is flex/display block
          display: "block", // Use block to center using margin or align items in flex container
        }}
      />
      {visibilityStore.isMakeCVVisible && (
        <SkMakeCV
          isVisible={visibilityStore.isMakeCVVisible}
          onClose={toggleMakeCV}
        />
      )}
    </>
  );
});

export default SkHoverBarButtonMakeCV;
