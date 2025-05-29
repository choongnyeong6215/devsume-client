import styled from "@emotion/styled";
import { useFormField } from "@/hooks/useFormField";

const ErrorMessage = () => {
  const { errorMessage } = useFormField();

  return errorMessage ? (
    <StyledErrorMessage>{errorMessage} </StyledErrorMessage>
  ) : null;
};

const StyledErrorMessage = styled.p`
  color: red;
`;

export default ErrorMessage;
