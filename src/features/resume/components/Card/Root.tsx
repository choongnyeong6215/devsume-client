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
    width: "700px",
    minHeight: "150px",
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    padding: "2rem",
    marginBottom: "2rem",
    border: `1px solid ${theme.color.border}`,
    borderRadius: theme.borderRadius.large,
  })}

  .div {
    margin: 1rem;
  }
`;

export default Root;
