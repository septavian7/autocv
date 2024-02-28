/* index.tsx */

import React from "react";
import { createRoot } from "react-dom/client";
import SkHoverBar from "./components/SkHoverBar/SkHoverBar";
import { configure } from "mobx";

configure({
  enforceActions: "always", // or "observed"
});

const rootElement = document.createElement("div");
rootElement.id = "Sk0ne-root";
document.body.appendChild(rootElement);

const rootElementMounted = document.getElementById("Sk0ne-root");
if (rootElementMounted) {
  const root = createRoot(rootElementMounted);
  root.render(
    <React.StrictMode>
      <SkHoverBar />
    </React.StrictMode>,
  );
}