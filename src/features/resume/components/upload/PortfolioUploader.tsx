import styled from "@emotion/styled";
import { Trash2 } from "lucide-react";

interface PortfolioUploaderProps {
  fileName: string;
  onRemovePdf: () => void;
}

const PortfolioUploader = ({
  fileName,
  onRemovePdf,
}: PortfolioUploaderProps) => {
  return (
    <StyledPortfolioUploader>
      <div className="file-name">
        <p>파일명</p>
        <p>{fileName}</p>
      </div>
      <Trash2 onClick={onRemovePdf} />
    </StyledPortfolioUploader>
  );
};

const StyledPortfolioUploader = styled.div`
  ${({ theme }) => ({
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem 1.5rem",
    border: `1px solid ${theme.color.border}`,
    borderRadius: theme.borderRadius.medium,
  })}

  .file-name {
    display: flex;
    gap: 1rem;

    p:first-of-type {
      font-weight: bold;
    }
  }

  svg {
    cursor: pointer;
  }
`;

export default PortfolioUploader;
