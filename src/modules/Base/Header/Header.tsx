import styled from 'styled-components'
import { HeaderDesktop, HeaderMobile } from './components'
import cn from 'classnames'
import { useAppContext } from '@/infrastructure/nextjs/useAppContext'

interface HeaderProps {
  /** @deprecated */
  isAuthorized: boolean
  className?: string
  /** @deprecated */
  isReady: boolean
}

const Header = ({ isAuthorized, className, isReady }: HeaderProps) => {
  const app = useAppContext()
  return (
    <StyledHeader
      className={cn('Header__main', className, { isReady: isReady })}
    >
      <div className="Header__topBlock" />
      <div className="Header">
        <HeaderDesktop
          className="Header__desktop"
        />
        <HeaderMobile
          className="Header__mobile"
          isAuthorized={app.isUserAuth}
        />
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 200;
  display: flex;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
  max-width: calc(1880px + 2 * 20px);
  margin: 0 auto;
  width: 100%;

  .Header__topBlock {
    z-index: 200;
    position: relative;
    background: #eef1f5;
    width: 100%;
    height: 10px;
    top: 0;
  }

  .Header {
    position: relative;
    display: flex;
    top: 0;
    z-index: 200;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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

      &__topBlock {
        height: 0;
      }
    }

    .Header__mobile {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }
`

export { Header }
