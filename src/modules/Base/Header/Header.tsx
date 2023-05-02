import styled from "styled-components";
import { HeaderDesktop, HeaderMobile } from "./components";

const Header = () => {
  return (
    <StyledHeader>
      <div className="Header__topBlock" />
      <div className="Header">
        <HeaderDesktop className="Header__desktop" />
        <HeaderMobile className="Header__mobile" />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;

  .Header__topBlock {
    z-index: 200;
    position: fixed;
    background: #eef1f5;
    width: 100%;
    height: 20px;
  }

  .Header {
    position: fixed;
    display: flex;
    top: 20px;
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
    .Header {
      padding: 61px 20px 12px 20px;
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
