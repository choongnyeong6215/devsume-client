import styled from "@emotion/styled";
import Header from "@/components/Header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 75rem;
  margin: 0 auto;

  main {
    padding: 1rem;
  }
`;

export default Layout;
