import { InputHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { useFormField } from "@/hooks/useFormField";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { id, errorMessage } = useFormField();

  return <StyledInput id={id} hasError={!!errorMessage} {...props} />;
};

const StyledInput = styled.input<{ hasError: boolean }>`
  ${({ theme, hasError }) => ({
    width: "100%",
    height: "2.5rem",
    padding: "1rem 1.25rem",
    border: `1px solid ${hasError ? "red" : theme.color.border}`,
    borderRadius: theme.borderRadius.medium,
    fontSize: "1rem",

    "&::placeholder": {
      color: theme.color.border,
    },

    "&:focus": {
      border: `1px solid ${hasError ? "red" : "black"}`,
      outline: "none",
    },
  })}
`;

export default Input;
