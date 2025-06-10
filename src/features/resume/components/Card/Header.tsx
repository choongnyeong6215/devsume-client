import { useCard } from "@/hooks/useCard";
import styled from "@emotion/styled";
import { Plus } from "lucide-react";

const Header = () => {
  const { title, isEssential, isMultiple, helperMessage } = useCard();

  return (
    <StyledHeader>
      <div>
        <h2>{title}</h2>
        {isEssential && <p className="essential-message">필수</p>}
        {helperMessage && <p className="helper-message">{helperMessage}</p>}
      </div>
      {isMultiple && <Plus />}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 5px solid #f1f4f6;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;

    p {
      font-size: 0.75rem;
      padding: 0.5rem 1rem;
      border-radius: 0.75rem;
    }

    .essential-message {
      color: #fa5252;
      background-color: #fff5f5;
    }

    .helper-message {
      color: #868e96;
      background-color: #f8f9fa;
    }
  }
`;

export default Header;
