import styled from "styled-components";
import { HeaderDesktop, HeaderMobile } from "./components";

interface HeaderProps {
  isAuthorized?: boolean;
  className?: string;
}

const Header = ({ isAuthorized, className }: HeaderProps) => {
  return (
    <StyledHeader className={className}>
      <div className="Header__topBlock" />
      <div className="Header_overlay" />
      <div className="Header">
        {isAuthorized ? (
          <>
            <HeaderDesktop className="Header__desktop" isAuthorized />
            <HeaderMobile className="Header__mobile" isAuthorized />
          </>
        ) : (
          <>
            <HeaderDesktop className="Header__desktop" />
            <HeaderMobile className="Header__mobile" />
          </>
        )}
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: sticky;
  top: 10px;
  z-index: 200;
  display: flex;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;

  .Header__topBlock {
    z-index: 200;
    position: fixed;
    background: #eef1f5;
    width: 100%;
    height: 10px;
  }

  .Header_overlay {
    display: none;
  }

  @media (max-width: 1024px) {
    .Header_overlay {
      display: block;
      width: 100%;
      background: #fff;
      height: 300px;
      position: absolute;
      top: 0;
      left: 0;
      height: 60px;
      z-index: -1;
    }
  }

  .Header {
    position: sticky;
    display: flex;
    top: 10px;
    z-index: 200;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1880px;
    padding: 12px 20px;
    border-radius: 0 0 10px 10px;
    color: white;
    background-color: #2a344a;
  }

  .Header__mobile {
    display: none;
  }

  @media (max-width: 1023px) {
    padding-left: 0;
    padding-right: 0;
    top: 0;
    .Header {
      padding: 8px 20px 12px 20px;
      top: 0;
    }

    .Header__mobile {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }
`;

export { Header };
