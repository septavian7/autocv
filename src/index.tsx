/* index.tsx */

import React from "react";
import { createRoot } from "react-dom/client";
import SkHoverBar from "./components/SkHoverBar/SkHoverBar";

// Create a new div element that will act as the root for your React app
const rootElement = document.createElement("div");
rootElement.id = "my-extension-root";
document.body.appendChild(rootElement);

// Use createRoot to render your React app into the new element
const root = createRoot(document.getElementById("my-extension-root")!);
root.render(
  <React.StrictMode>
    <SkHoverBar /> // Updated component name
  </React.StrictMode>,
);