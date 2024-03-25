/* src/components/layout/SkHoverBarNew/utilsViewportUtils.tsx */

import { visibilityStore } from "../../../../stores/SkVisibilityStore";

export const useViewportWidth = () => {
  return visibilityStore.viewportWidth;
};
