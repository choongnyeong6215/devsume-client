import styled from "@emotion/styled";
import { useFormField } from "@/hooks/useFormField";
import { useFormContext } from "react-hook-form";

const ErrorMessage = () => {
  const { id } = useFormField();
  const {
    formState: { errors },
  } = useFormContext();

  return errors[id] ? (
    <StyledErrorMessage>{errors[id]?.message?.toString()}</StyledErrorMessage>
  ) : null;
};

const StyledErrorMessage = styled.p`
  color: red;
  font-size: 0.75rem;
`;

export default ErrorMessage;
