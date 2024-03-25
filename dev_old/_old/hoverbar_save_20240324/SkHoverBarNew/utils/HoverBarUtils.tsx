/* src/components/layout/SkHoverBarNew/utils/HoverBarUtils.tsx */

export const toggleExpanded = (
  isExpanded: boolean,
  setIsExpanded: (isExpanded: boolean) => void,
) => {
  setIsExpanded(!isExpanded);
};
