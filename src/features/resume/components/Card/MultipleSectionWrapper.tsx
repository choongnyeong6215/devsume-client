import { ReactNode } from "react";
import styled from "@emotion/styled";

interface MultipleSectionWrapperProps {
  children: ReactNode;
}

const MultipleSectionWrapper = ({ children }: MultipleSectionWrapperProps) => {
  return (
    <StyledMultipleSectionWrapper>{children}</StyledMultipleSectionWrapper>
  );
};

const StyledMultipleSectionWrapper = styled.div`
  ${({ theme }) => ({
    padding: "1rem 0",
    borderBottom: `3px dashed ${theme.color.background}`,
  })}
`;

export default MultipleSectionWrapper;
