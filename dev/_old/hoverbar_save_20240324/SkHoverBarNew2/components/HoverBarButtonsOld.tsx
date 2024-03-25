/* src/components/layout/SkHoverBarNew2/components/HoverBarButtons.tsx */

import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  toggleHoverBarExpandMinimize,
  toggleMakeMenu,
  toggleMainMenu,
  toggleSettingsMenu,
  toggleTheme,
} from "../utils/HoverBarUtils";

const HoverBarButton = styled(motion.button)<{
  $isExpanded: boolean;
  $backgroundColor: string;
}>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: white;
  border: none;
  border-radius: 18px;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: fixed;
  margin: 5px;
  z-index: 900;
`;

const HoverBarButtonText = styled(motion.span)``;

const HoverBarButtonMain = styled(HoverBarButton)`
  display: flex;
  cursor: pointer;
  margin-left: 0px;
  height: 100%;
`;

const HoverBarButtonMainInnerLeft = styled(motion.div)`
  justify-content: center;
  align-items: center;
  font-size: 40px;
  initial: false,
  animate: (custom) => ({
    width: custom.isExpanded ? "40%" : "100%",
  }),
  transition: { duration: 0.5, ease: "easeInOut" },
`;

const HoverBarButtonMainInnerRight = styled(motion.div)`
  justify-content: right;
  align-items: center;
  font-size: 18px;
  initial: false,
  animate: (custom) => ({
    opacity: custom.isExpanded ? 1 : 0,
    width: custom.isExpanded ? "60%" : "0%",
    transform: custom.isExpanded ? "translateX(0)" : "translateX(20px)",
  }),
  transition: { duration: 0.5, ease: "easeInOut" },
`;

const HoverBarButtonLarge = styled(HoverBarButton)`
  cursor: pointer;
  font-size: 40px;
  width: 70px;
  height: 100%;
`;

const HoverBarButtonSmall = styled(HoverBarButton)`
  cursor: pointer;
  border-radius: 12px;
  margin-right: 5px;
  z-index: 1000;
  font-size: 24px;
  height: 66.7%;
  width: 45px;
`;

const HoverBarButtonLargeMenu = styled(HoverBarButtonLarge)`
  /* individual styles */
`;

const HoverBarButtonLargeSettings = styled(HoverBarButtonLarge)`
  /* individual styles */
`;

const HoverBarButtonSmallSettings = styled(HoverBarButtonSmall)`
  /* individual styles */
`;

const HoverBarButtonSmallTheme = styled(HoverBarButtonSmall)`
  /* individual styles */
`;

const HoverBarButtonSmallMinimize = styled(HoverBarButtonSmall)`
  /* individual styles */
`;
