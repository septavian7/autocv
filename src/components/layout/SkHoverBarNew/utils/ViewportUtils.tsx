/* src/components/layout/SkHoverBarNew/ViewportUtils.tsx */

import { visibilityStore } from "../../../../stores/SkVisibilityStore";

export const useViewportWidth = () => {
  return visibilityStore.viewportWidth;
};
