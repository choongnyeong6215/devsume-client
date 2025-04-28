import { ReactNode } from "react";
import styled from "@emotion/styled";

interface ToolTipContainerProps {
  children: ReactNode;
}

const ToolTipContainer = ({ children }: ToolTipContainerProps) => {
  return <StyledToolTipContainer>{children}</StyledToolTipContainer>;
};

const StyledToolTipContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`;

export default ToolTipContainer;
