import { Button, Sticker } from '@/components/ui'
import {
  BathsIcon,
  BuildYearIcon,
  PointIconFooter,
  SleepsIcon,
  SquareIcon,
} from '@/icons'
import styled from 'styled-components'

interface Props {
  className?: string
  title: string
  location: string
  year: number
  square: number
  sleeps: number
  baths: number
  price: string
  application: any
  createdAt: string
  href: string
}

const ApplicationsCard = ({
  className,
  title,
  location,
  year,
  sleeps,
  square,
  baths,
  price,
  application,
  createdAt,
  href,
}: Props) => {
  return (
    <StyledApplicationsCard className={className} href={href}>
      <div>
        <div className="Card__head">
          <div className="Card__headContent">
            <Sticker theme="black">true</Sticker>
          </div>

          <p className="Color_text_disabled">{createdAt}</p>
        </div>
        <p className="Card__title Font_18_120">{title}</p>
        <div className="Card__location">
          <PointIconFooter />
          <p className="Color_text_grey">{location}</p>
        </div>
      </div>

      <div>
        <div className="Card__objectInfo Font_16_140">
          <div>
            <BuildYearIcon width={18} height={18} />
            <span>{year} г</span>
          </div>
          <div>
            <SquareIcon width={18} height={18} />
            <span>{square} м²</span>
          </div>
          <div>
            <SleepsIcon width={18} height={18} />
            <span>{sleeps}</span>
          </div>
          <div>
            <BathsIcon width={18} height={18} />
            <span>{baths}</span>
          </div>
        </div>
        <div className="Card__price">
          <p className="Color_blue_primary Font_16_120">{price}</p>
        </div>
      </div>
    </StyledApplicationsCard>
  )
}

const StyledApplicationsCard = styled.a`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  transition: 0.15s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 255px;
  :hover {
    box-shadow: 0 0 0 2px inset #d4ddee;
    cursor: pointer;
  }

  .Card__head {
    justify-content: space-between;
  }

  .Card__head,
  .Card__headContent {
    display: flex;
    align-items: center;
  }

  .Card__headDivider {
    margin-left: 10px;
    margin-right: 5px;
  }

  .Card__title {
    margin-top: 16px;
  }

  .Card__location {
    display: flex;
    align-items: center;
    margin-top: 10px;
    p {
      margin-left: 5px;
    }

    svg {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }
  }

  .Card__objectInfo {
    margin-top: 22px;
    display: flex;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      span {
        margin-left: 8px;
      }
    }
    div:not(:first-child) {
      margin-left: 20px;
    }
  }

  .Card__price {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 10px;
    padding-top: 9px;
    border-top: 1px solid #e1edfd;

    button {
      padding: 10px 20px;
    }
  }
`

export { ApplicationsCard }
