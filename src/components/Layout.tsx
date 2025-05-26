import { ReactNode } from "react";
import styled from "@emotion/styled";
import Header from "@/components/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
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
