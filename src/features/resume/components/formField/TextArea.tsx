import { useFormField } from "@/hooks/useFormField";
import styled from "@emotion/styled";
import { TextareaHTMLAttributes } from "react";

const TextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const { id } = useFormField();

  return <StyledTextArea id={id} {...props} />;
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
