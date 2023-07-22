import { Button } from '@/components/ui'
import { Applications, HomeIcon, KebabIcon, ListIcon, PlusIcon } from '@/icons'
import cn from 'classnames'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import LeadFooterIcon from '@/icons/LeadFooterIcon'
import { PageIcon } from '@/icons/PageIcon'
import { theme } from '../../../styles/tokens'
import { DocumentIcon } from '@/icons/DocumentIcon'

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

const ApplicationsFooter = () => {
  const router = useRouter()
  const currentUrl = router.pathname
  return (
    <StyledApplicationsFooter>
      <div className="Application__Footer">
        <div className="PlusIconContainer">
          <Button href={'/lead/add'}>
            <PlusIcon />
          </Button>
          <LeadFooterIcon className={'LeadFooterIcon'} />
        </div>

        <div className="Application__FooterButtons">
          <div className="Application__FooterButtons--left">
            <Button
              href={'/leads'}
              tertiary
              className={cn('FooterButton Font_fields_title', {
                Active: currentUrl === '/leads',
              })}
            >
              <ListIcon />
              Лента
            </Button>

            <Button
              tertiary
              className={cn('FooterButton Font_fields_title', {
                Active: currentUrl === '/leads/my',
              })}
              href={'/leads/my'}
            >
              {currentUrl === '/leads/my' && (
                <DocumentIcon className={'Active'} filled={true} />
              )}
              {currentUrl !== '/leads/my' && <DocumentIcon filled={false} />}
              Мои заявки
            </Button>
          </div>
          <div className="Application__FooterButtons--right">
            <Button
              href={'/objects/my'}
              tertiary
              className={cn('FooterButton Font_fields_title', {
                Active: currentUrl === '/objects/my',
              })}
            >
              {currentUrl === '/objects/my' && (
                <HomeIcon attr={{ width: 18, height: 18 }} filled={true} />
              )}
              {currentUrl !== '/objects/my' && (
                <HomeIcon attr={{ width: 18, height: 18 }} filled={false} />
              )}
              Объекты
            </Button>

            <Button tertiary className="FooterButton Font_12_16">
              <PageIcon attr={{ viewBox: '3 8 18 18' }} />
              Ещё
            </Button>
          </div>
        </div>
      </div>
    </StyledApplicationsFooter>
  )
}

const StyledApplicationsFooter = styled.div`
  .Application__Footer {
    display: none;
    border-top: 3px solid #eef1f5;
    position: fixed;
    width: 100%;
    bottom: 0;
    background: #fff;
    border-radius: 10px;
    left: 0;
  }

  .Active {
    color: ${theme.colors.main};

    path {
      fill: ${theme.colors.main} !important;
    }
  }

  .Application__FooterButtons {
    display: flex;
    justify-content: center;
    gap: 172px;
    position: relative;
    z-index: 1;
    padding-top: 5px;
    padding-bottom: 5px;

    &--left,
    &--right {
      display: flex;
      align-items: center;
      width: 50%;
      justify-content: flex-end;
      gap: 64px;
    }

    &--right {
      justify-content: flex-start;
    }
  }

  .LeadFooterIcon {
    position: absolute;
    top: 0;
    left: -28px;
  }

  .PlusIconContainer {
    padding: 2px;
    background: #eef1f5;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -24px;

    a {
      background: #4e6af3;
      width: 44px;
      height: 44px;
      padding: 0;
      border-radius: 50%;
      position: relative;
      z-index: 1;

      svg path {
        fill: #fff;
      }
    }
  }

  .FooterButton {
    padding: 5px 0 3px 0;
    max-width: 74px;
    width: 100%;
    background: transparent;

    :hover {
      svg {
        path {
          fill: #4e6af3;
        }
      }
    }

    span {
      display: flex;
      flex-direction: column;
      align-items: center;

      svg {
        margin-bottom: 2px;

        path {
          fill: #7786a5;
        }
      }
    }
  }

  .KebabIcon {
    transform: rotate(90deg);
  }

  @media (max-width: ${tablet}) {
    .Application__Footer {
      display: block;
    }
  }

  @media (max-width: ${mobile}) {
    .Application__FooterButtons {
      display: flex;
      justify-content: center;
      gap: 64px;

      &--left,
      &--right {
        gap: 5px;
      }
    }
  }
`

export { ApplicationsFooter }
