/* src/styles/SkIconStyles.tsx */

import styled from "@emotion/styled";

export const SmallIcon = styled.span`
  font-size: 20px;
`;

export const LargeIcon = styled.span`
  font-size: 32px;
`;

interface IconWrapperProps {
  hasLabel: boolean;
}

export const IconWrapper = styled.div<IconWrapperProps>(({ hasLabel }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "32px",
  marginLeft: hasLabel ? "8px" : "0",
}));
