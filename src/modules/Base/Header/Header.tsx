import styled from 'styled-components'
import { HeaderDesktop, HeaderMobile } from './components'
import cn from 'classnames'

interface HeaderProps {
  isAuthorized: boolean
  className?: string
  isReady: boolean
}

const Header = ({ isAuthorized, className, isReady }: HeaderProps) => {
  return (
    <StyledHeader className={cn("Header__main", className, {isReady: isReady})}>
      <div className="Header__topBlock" />
      <div className="Header">
        <HeaderDesktop className="Header__desktop" isAuthorized={isAuthorized} />
        <HeaderMobile className="Header__mobile" isAuthorized={isAuthorized} />
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
    top: 0;
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

  @media (max-width: 1023px) {
    padding-left: 0;
    padding-right: 0;
    top: 0;
    .Header {
      padding: 8px 20px 12px 20px;
      top: 0;
      border-radius: 0 0 10px 10px;
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
