import { useFormField } from "@/hooks/useFormField";
import styled from "@emotion/styled";
import { TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

const TextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const { id } = useFormField();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <StyledTextArea
      id={id}
      {...register(id)}
      {...props}
      maxLength={300}
      hasError={!!errors[id]}
    />
  );
};

const StyledTextArea = styled.textarea<{ hasError: boolean }>`
  ${({ theme, hasError }) => ({
    width: "100%",
    height: "250px",
    padding: "1rem",
    border: `1px solid ${hasError ? "red" : theme.color.border}`,
    borderRadius: theme.borderRadius.medium,
    resize: "none",

    "&::placeholder": {
      color: theme.color.border,
    },

    "&:focus": {
      border: "1px solid black",
      outline: "none",
    },
  })}
`;

export default TextArea;
