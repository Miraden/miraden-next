import styled from "styled-components";
import { HeaderDesktop, HeaderMobile } from "./components";

interface HeaderProps {
  isAuthorized?: boolean;
}

const Header = ({ isAuthorized }: HeaderProps) => {
  return (
    <StyledHeader>
      <div className="Header__topBlock" />
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
    border-radius: 10px;
    color: white;
    background-color: #2a344a;
  }

  .Header__mobile {
    display: none;
  }

  @media (max-width: 1024px) {
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
