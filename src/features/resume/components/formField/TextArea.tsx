import { useFormField } from "@/hooks/useFormField";
import styled from "@emotion/styled";
import { TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

const TextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const { id } = useFormField();
  const { register } = useFormContext();

  return (
    <StyledTextArea id={id} {...register(id)} {...props} maxLength={300} />
  );
};

const StyledTextArea = styled.textarea`
  ${({ theme }) => ({
    width: "100%",
    height: "250px",
    padding: "1rem",
    border: `1px solid ${theme.color.border}`,
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
