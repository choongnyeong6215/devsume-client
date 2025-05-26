import styled from "@emotion/styled";
import { FileUser } from "lucide-react";

const Header = () => {
  {
    /* route 적용하기 */
  }
  return (
    <StyledHeader>
      <nav>
        <div className="logo">
          <a>
            <FileUser />
          </a>
        </div>
        <div className="menu">
          <a>작성 목록</a>
          <a>임시 목록</a>
        </div>
      </nav>
      <div className="border-line" />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: white;

  nav {
    display: flex;
    align-items: center;
    height: 60px;
  }

  .logo {
    padding-right: 5rem;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  .menu {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  a {
    color: black;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: #3182f6;
    }
  }

  .border-line {
    background-color: #f1f4f6;
    width: 100%;
    height: 2px;
  }
`;

export default Header;
