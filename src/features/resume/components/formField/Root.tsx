import { FormFieldContextValue } from "@/context/formFieldContext";
import { ReactNode } from "react";
import styled from "@emotion/styled";
import { FormFieldContextProvider } from "@/context/formFieldContext";

interface FieldWrapperProps extends FormFieldContextValue {
  children: ReactNode;
}

const Root = ({
  id,
  description,
  errorMessage,
  children,
}: FieldWrapperProps) => {
  return (
    <FormFieldContextProvider value={{ id, description, errorMessage }}>
      <Wrapper>{children}</Wrapper>
    </FormFieldContextProvider>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
`;

export default Root;
