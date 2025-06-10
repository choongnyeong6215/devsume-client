import { CardContextProvider, CardContextValue } from "@/context/cardContext";
import styled from "@emotion/styled";
import { ReactNode } from "react";

interface CardWrapperProps extends CardContextValue {
  children: ReactNode;
}

const Root = ({
  title,
  isEssential,
  isMultiple,
  helperMessage,
  children,
}: CardWrapperProps) => {
  return (
    <CardContextProvider
      value={{ title, isEssential, isMultiple, helperMessage }}
    >
      <Wrapper>{children}</Wrapper>
    </CardContextProvider>
  );
};

const Wrapper = styled.section`
  ${({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    border: `1px solid ${theme.color.border}`,
    borderRadius: theme.borderRadius.large,
    padding: "2rem",
  })}

  .div {
    margin: 1rem;
  }
`;

export default Root;
