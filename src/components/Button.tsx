import { ButtonSchema, Radius } from "@/types/theme";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { darken } from "polished";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  schema: ButtonSchema;
  radiusSize: Radius;
  children: ReactNode;
}

const Button = ({ schema, radiusSize, children, ...props }: ButtonProps) => {
  return (
    <StyledButton schema={schema} radiusSize={radiusSize} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  schema: ButtonSchema;
  radiusSize: Radius;
}>`
  ${({ theme, schema, radiusSize }) => ({
    color: theme.button[schema].color,
    backgroundColor: theme.button[schema].background,
    padding: theme.button[schema].padding,
    border: theme.button[schema].border,
    borderRadius: theme.borderRadius[radiusSize],
    height: "2rem",
    cursor: "pointer",
    width: "100%",

    "&:hover": {
      backgroundColor: darken(0.05, theme.button[schema].background),
    },
  })}
`;

export default Button;
