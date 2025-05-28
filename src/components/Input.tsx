import { InputHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { InputType } from "@/types/input";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  id: string; // RHF field name (단일) or useFieldArray field id (다중)
  label: string;
  description?: string;
  placeholder?: string;
  errorMessage?: string;
}

const Input = ({
  id,
  label,
  description,
  placeholder,
  errorMessage,
  ...props
}: InputProps) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      {description && <div className="description">{description}</div>}
      <StyledInput
        id={id}
        placeholder={placeholder}
        hasError={!!errorMessage}
        {...props}
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  label {
    font-size: 1rem;
  }

  .description {
    color: #858e96;
  }

  .error-message {
    color: red;
  }
`;

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
      border: "1px solid black",
      outline: "none",
    },
  })}
`;

export default Input;
