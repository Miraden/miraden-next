import { Button, Sticker, Tag } from '@/components/ui'
import {
  BathsIcon,
  BuildYearIcon,
  Kebab24Icon,
  KebabIcon,
  ListIcon,
  PointIconFooter,
  SleepsIcon,
  SquareIcon,
} from '@/icons'
import { EyeIcon } from '@/icons/EyeIcon'
import { MessageIcon } from '@/icons/MessageIcon'
import { RoomsIcon } from '@/icons/RoomsIcon'
import { useCallback, useState } from 'react'
import styled from 'styled-components'

interface ObjectCardLargeProps {
  className?: string
  title?: string
  location?: string
  id?: string
  cashBack?: number
  yieldCount?: number
  square?: string
  rooms?: number
  baths?: number
  sleeps?: number
  price?: string
  status?: string
  name?: string
  image?: any
  isBooked?: boolean
  isUnpublished?: boolean
  year?: string
  image1?: any
  image2?: any
  image3?: any
  agencyName?: string
  firstInstallment?: string
  firstInstallmentPercent?: string
  yieldCountPercent?: number
  singleCost?: string
  purpose?: string
  type?: string
  condition?: string
  deal?: string
  isPublished?: boolean
  isTrue?: boolean
  publishedAt?: string
  requestsCount?: any
  watched?: number
  list?: number
  messagesCount?: any
  href?: string
}

const currencyOptions = ['€', '$', '£', '₽']
const ObjectCardLarge = ({
  className,
  title,
  location,
  id,
  square,
  sleeps,
  rooms,
  baths,
  price,
  status,
  year,
  singleCost,
  agencyName,
  yieldCount,
  yieldCountPercent,
  firstInstallment,
  firstInstallmentPercent,
  purpose,
  type,
  condition,
  deal,
  isPublished,
  isTrue,
  publishedAt,
  requestsCount,
  watched,
  list,
  messagesCount,
  href,
}: ObjectCardLargeProps) => {
  const [openDropdown, setOpenDropdown] = useState(false)

  const handleOpenDropdown = useCallback(
    (event: any) => {
      event.preventDefault()
      setOpenDropdown(!openDropdown)
    },
    [openDropdown]
  )

  const mobilePublished = publishedAt?.split('Создана')

  return (
    <StyledObjectCardLarge className={className} href={href}>
      <div className="ObjectCardLarge__container">
        <div className="ObjectCardLarge">
          <div className="ObjectCardLarge__info">
            <div className="ObjectCardLarge__infoContainer">
              <div className="ObjectCardLarge__stickers">
                {isTrue && <Sticker theme="black">true</Sticker>}
                {isPublished && <Sticker theme="green">Опубликована</Sticker>}
              </div>
              <div className="ObjectCardLarge__kebabButton">
                <p className="Font_14_140 Color_text_disabled Published">
                  {publishedAt}
                </p>
                <p className="Font_14_140 Color_text_disabled PublishedMobile">
                  {mobilePublished}
                </p>
                <Button
                  tertiary
                  className="ObjectCardLarge__button"
                  onClick={handleOpenDropdown}
                >
                  <Kebab24Icon className="ObjectCardLarge__buttonIcon" />
                </Button>
              </div>
            </div>

            <div className="ObjectCardLarge__head">
              <p className="Font_20_120 md:Font_16_150_500 ObjectCardLarge__Title">
                {title}
              </p>
              {openDropdown && <ObjectDropdown agencyName={agencyName} />}
            </div>
            <div className="ObjectCardLarge__location Font_14_140 Color_text_grey">
              <PointIconFooter width={18} height={18} />
              <p>{location}</p>
            </div>
            <div className="ObjectCardLarge__indicators Font_14_16">
              <Tag className="ObjectCardLarge__indicatorButton Color_blue_primary">
                ID {id}
              </Tag>
              <Tag>{deal}</Tag>
              <Tag>{type}</Tag>
              <Tag>{condition}</Tag>
              <Tag>{purpose}</Tag>
            </div>
            <div className="ObjectCardLarge__objectInfo Font_16_140">
              <p>
                <BuildYearIcon width={18} height={18} />
                <span> {year}</span>
              </p>
              <p>
                <SquareIcon width={18} height={18} />
                <span>{square}</span>
              </p>
              <p>
                <RoomsIcon width={18} height={18} />
                <span>{rooms}</span>
              </p>
              <p className="Sleeps">
                <SleepsIcon width={18} height={18} />
                <span>{sleeps}</span>
              </p>
              <p className="Baths">
                <BathsIcon width={18} height={18} />
                <span>{baths}</span>
              </p>
            </div>
            <div className="ObjectCardLarge__footer">
              <div className="Color_blue_primary Font_20_120_700">
                {price} €
              </div>
              <div className="ObjectCardLarge__footerInfo ">
                <div>
                  <ListIcon attr={{ className: 'ListItemIcon' }} />{' '}
                  <p className="Font_16_140 Color_blue_primary">{list}</p>
                </div>
                <div>
                  <EyeIcon />
                  <p className="Font_16_140 Color_blue_primary">{watched}</p>
                </div>
                {messagesCount > 1 ? (
                  <div>
                    <MessageIcon className="MessageIcon" />{' '}
                    <p className="Font_16_140 Color_blue_primary">
                      {messagesCount}
                    </p>
                  </div>
                ) : (
                  <>
                    {requestsCount > 1 ? (
                      <Sticker theme="blue" className="RequestsSticker">
                        Новых откликов {requestsCount}
                      </Sticker>
                    ) : (
                      <Sticker theme="grey" className="RequestsSticker">
                        Нет откликов
                      </Sticker>
                    )}
                  </>
                )}
              </div>
              <Button
                tertiary
                className="ObjectCardLarge__buttonMobile"
                onClick={handleOpenDropdown}
              >
                <KebabIcon className="ObjectCardLarge__buttonIcon" />
              </Button>
              {/* {openDropdown && <ObjectDropdown agencyName={agencyName} />} */}
            </div>
          </div>
        </div>
      </div>
    </StyledObjectCardLarge>
  )
}

const StyledObjectCardLarge = styled.a`
  .ObjectCardLarge__container {
    background: #fff;
    border-radius: 10px;
    /* padding: 20px; */
    transition: 0.15s ease;
    :hover {
      box-shadow: 0 0 0 2px inset #c7d2e9;

      .ObjectCardLarge__Title {
        color: #4e6af3;
      }
    }
  }

  .PublishedMobile {
    display: none;
  }

  .ObjectCardLarge {
    display: flex;
  }

  .ObjectCardLarge__unpublishedContainer {
    min-width: 400px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }

  .ObjectCardLarge__unpublished {
    position: absolute;
    backdrop-filter: blur(16px);
    width: 100%;
    height: 100%;
    background: rgba(60, 75, 97, 0.6);
    color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    p {
      margin-top: 10px;
    }
  }

  .ObjectCardLarge__mainImages {
    display: flex;
    min-width: 400px;
    img {
      border-radius: 10px;
      object-fit: cover;
    }
    .Image2 {
      margin-left: 10px;
    }
    .Image3 {
      margin-left: 10px;
      margin-top: 10px;
    }
  }

  .ObjectCardLarge__mainImage {
    position: relative;
  }

  .ObjectCardLarge__booked {
    position: absolute;
    padding: 7px 10px;
    background: #4e6af3;
    border-radius: 10px;
    color: #fff;
    top: 10px;
    right: 10px;
  }

  .ObjectCardLarge__info {
    width: 100%;
  }

  .ObjectCardLarge__infoContainer {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0 20px;
  }

  .ObjectCardLarge__stickers {
    display: flex;

    div:not(:first-child) {
      margin-left: 10px;
    }
  }

  .ObjectCardLarge__kebabButton {
    display: flex;

    button {
      margin-left: 10px;
    }
  }

  .ObjectCardLarge__head {
    width: 100%;
    margin-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .ObjectCardLarge__button,
  .ObjectCardLarge__buttonMobile {
    padding: 2px;
    width: 28px;
    height: 28px;
    border-radius: 50%;

    :hover {
      background: #f1f7ff;
    }
  }

  .ObjectCardLarge__location {
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding-right: 20px;
    padding-left: 20px;
  }

  .ObjectCardLarge__indicators,
  .ObjectCardLarge__objectInfo {
    display: flex;
    align-items: center;
  }

  .ObjectCardLarge__indicators {
    margin-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
    overflow: auto;
    white-space: nowrap;
    ::-webkit-scrollbar {
      display: none;
    }
    div:not(:first-child) {
      margin-left: 10px;
    }
  }

  .ObjectCardLarge__objectInfo {
    margin-top: 34px;
    padding-left: 20px;
    padding-right: 20px;
    p {
      display: flex;
      align-items: center;
      span {
        margin-left: 8px;
      }
    }
    p:not(:first-child) {
      margin-left: 20px;
    }
  }

  .ObjectCardLarge__indicatorButton {
    padding: 7px 10px;
    color: #4e6af3;
    background: #f1f7ff;
    svg {
      path {
        fill: #4e6af3;
      }
    }
  }

  .ObjectCardLarge__footer {
    display: flex;
    justify-content: space-between;
    padding-top: 9px;
    margin-top: 10px;
    border-top: 1px solid #e1edfd;
    padding: 0 20px 20px 20px;
    padding-top: 15px;
  }
  .ObjectCardLarge__footerInfo {
    display: flex;
    align-items: center;

    div {
      display: flex;
      align-items: center;

      p {
        margin-left: 8px;
      }
    }

    div:not(:first-child) {
      margin-left: 20px;
    }
  }

  .ListItemIcon,
  .MessageIcon {
    path {
      fill: #7786a5;
    }
  }

  .RequestsSticker {
    .Sticker__blue {
      padding: 4px 10px;
    }
  }

  .ObjectCardLarge__footerPerson {
    display: flex;
    text-align: end;
    img {
      margin-left: 10px;
      border-radius: 50%;
    }
  }

  .ObjectCardLarge__buttonMobile {
    display: none;
  }

  @media (max-width: 1024px) {
    .ObjectCardLarge__mainImages,
    .ObjectCardLarge__unpublishedContainer {
      min-width: 240px;

      img {
        width: unset;
        height: unset;
        object-fit: cover;
        border-radius: 10px;
      }
    }
    .Image2,
    .Image3 {
      display: none;
    }

    .ObjectCardLarge__location {
      margin-top: 8px;
    }

    .ObjectCardLarge__indicators {
      margin-top: 10px;
    }

    .ObjectCardLarge__objectInfo {
      margin-top: 14px;
    }

    .ObjectCardLarge__unpublished {
      display: none;
    }

    .ObjectCardLarge__unpublishedContainer {
      max-width: 240px;
    }

    .ObjectCardLarge__booked {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .ObjectCardLarge__mainImages,
    .ObjectCardLarge__unpublishedContainer {
      min-width: 120px;
      img {
        height: 120px;
      }
    }

    .ObjectCardLarge__info {
      margin-left: 0;
    }

    .ObjectCardLarge__location {
      margin-top: 5px;
    }

    .ObjectCardLarge__indicators {
      display: none;
    }

    .ObjectCardLarge__objectInfo {
      margin-top: 10px;
      svg {
        width: 14px;
        height: 14px;
      }
      p:not(:first-child) {
        margin-left: 16px;
      }

      .Sleeps,
      .Baths {
        display: none;
      }
    }

    .ObjectCardLarge__footerPerson {
      display: none;
    }

    .ObjectCardLarge__button {
      display: none;
    }

    .ObjectCardLarge__buttonMobile {
      display: flex;
    }

    .ObjectCardLarge__footerInfo {
      display: none;
    }
  }

  @media (max-width: 576px) {
    .Published {
      display: none;
    }

    .PublishedMobile {
      display: flex;
    }

    .ObjectCardLarge__indicators {
      margin-top: 15px;

      div {
        font-size: 12px;
      }

      div:not(:first-child) {
        margin-left: 10px;
      }
    }
  }
`

const ObjectDropdown = ({ agencyName }: ObjectCardLargeProps) => {
  return (
    <StyledObjectDropdown>
      <div>
        <a href="" className="Font_12_16">
          {agencyName ? agencyName : 'Another link?'}
        </a>
      </div>
    </StyledObjectDropdown>
  )
}

const StyledObjectDropdown = styled.div`
  position: absolute;
  right: 0;
  top: -7px;
  background: #fff;
  padding: 10px 15px;
  box-shadow: 0 0 0 2px #e1edfd;
  border-radius: 10px;

  a:hover {
    color: #4e6af3;
  }

  @media (max-width: 768px) {
    top: 130px;
  }
`

export { ObjectCardLarge }
