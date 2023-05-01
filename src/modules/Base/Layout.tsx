import { ReactNode } from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledHomePage>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
  background: #eef1f5;
`;
