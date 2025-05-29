import styled from "@emotion/styled";
import { useFormField } from "@/hooks/useFormField";

const Description = () => {
  const { description } = useFormField();

  return description ? (
    <StyledDescription>{description}</StyledDescription>
  ) : null;
};

const StyledDescription = styled.div`
  color: "#858e96";
`;

export default Description;
