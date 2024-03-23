/* src/components/layout/SkHoverBarNew/HoverBarUtils.tsx */

export const toggleExpanded = (
  isExpanded: boolean,
  setIsExpanded: (isExpanded: boolean) => void,
) => {
  setIsExpanded(!isExpanded);
};
