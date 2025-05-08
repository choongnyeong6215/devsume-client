import { TooltipSchmea } from "@/types/theme";
import styled from "@emotion/styled";
import { Asterisk } from "lucide-react";

interface ToolTipProps {
  message: string;
  schema: TooltipSchmea;
}

const ToolTip = ({ message, schema }: ToolTipProps) => {
  return (
    <StyledToolTip schema={schema}>
      {schema === "essential" && <Asterisk size={12} />}
      <span>{message}</span>
    </StyledToolTip>
  );
};

const StyledToolTip = styled.div<{ schema: TooltipSchmea }>`
  ${({ theme, schema }) => ({
    backgroundColor: theme.tooltip[schema].background,
    color: theme.tooltip[schema].color,
    padding: theme.tooltip[schema].padding,
    borderRadius: theme.borderRadius.small,
    fontSize: "0.75rem",
    height: "1.25rem",
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
  })}
`;

export default ToolTip;
