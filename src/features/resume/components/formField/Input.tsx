import { InputHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { useFormField } from "@/hooks/useFormField";
import { useFormContext } from "react-hook-form";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { id } = useFormField();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <StyledInput id={id} hasError={!!errors[id]} {...register(id)} {...props} />
  );
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
