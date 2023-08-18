import { Button, Tag } from '@/components/ui'
import { PricingSelect } from '@/components/ui/PricingDropdown/PricingSelect'
import {
  BathsIcon,
  BuildYearIcon,
  KebabIcon,
  PointIconFooter,
  SleepsIcon,
  SquareIcon,
  StarIcon,
} from '@/icons'
import { RoomsIcon } from '@/icons/RoomsIcon'
import { UnpublishedIcon } from '@/icons/UnpublishedIcon'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import styled from 'styled-components'

interface ObjectCardProps {
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
}

const currencyOptions = ['€', '$', '£', '₽']
const ObjectCard = ({
  className,
  title,
  location,
  id,
  cashBack,
  yieldCount,
  square,
  sleeps,
  rooms,
  baths,
  price,
  status,
  name,
  image,
  isBooked,
  isUnpublished,
  image1,
  image2,
  image3,
  year,
  agencyName,
  firstInstallment,
  firstInstallmentPercent,
  singleCost,
}: ObjectCardProps) => {
  const [openDropdown, setOpenDropdown] = useState(false)

  const handleOpenDropdown = useCallback(() => {
    setOpenDropdown(!openDropdown)
  }, [openDropdown])

  return (
    <StyledObjectCard className={className}>
      <div className="ObjectCard">
        {isUnpublished ? (
          <div className="ObjectCard__unpublishedContainer">
            <div className="ObjectCard__unpublished">
              <UnpublishedIcon />
              <p className="Font_20_120_700">
                Объект снят
                <br />
                с публикации
              </p>
              <p className="Font_12_16">И будет удалён 26.01.2023</p>
            </div>
            <Image alt="" src={image1} width={400} height={210} />
          </div>
        ) : (
          <div className="ObjectCard__mainImages">
            <div className="ObjectCard__mainImage">
              {isBooked && (
                <div className="ObjectCard__booked Font_14_16_600">
                  Забронирован
                </div>
              )}
              <Image
                src={image1}
                alt=""
                width={290}
                height={210}
                className="Image1"
              />
            </div>

            <div>
              <Image
                src={image2}
                alt=""
                width={100}
                height={100}
                className="Image2"
              />
              <Image
                src={image3}
                alt=""
                width={100}
                height={100}
                className="Image3"
              />
            </div>
          </div>
        )}

        <div className="ObjectCard__info">
          <div className="ObjectCard__head">
            <p className="Font_20_120 md:Font_16_150_500 ">{title}</p>
            <Button
              tertiary
              className="ObjectCard__button"
              onClick={handleOpenDropdown}
            >
              <KebabIcon className="ObjectCard__buttonIcon" />
            </Button>
            {openDropdown && <ObjectDropdown agencyName={agencyName} />}
          </div>

          <div className="ObjectCard__location Font_14_140 Color_text_grey">
            <PointIconFooter width={18} height={18} />
            <p>{location}</p>
          </div>
          <div className="ObjectCard__indicators Font_14_16">
            <Tag className="ObjectCard__indicatorButton">
              <StarIcon />
            </Tag>
            <Tag className="ObjectCard__indicatorButton Color_blue_primary">
              ID {id}
            </Tag>
            <Tag>Доходность {yieldCount}</Tag>
            <Tag>Кэшбек {cashBack}</Tag>
          </div>

          <div className="ObjectCard__objectInfo Font_16_140">
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
          <div className="ObjectCard__footer">
            <div className="Color_blue_primary Font_20_120_700">
              <PricingSelect
                options={currencyOptions}
                price={price}
                yieldCount={yieldCount}
                yieldCountPercent={yieldCount}
                firstInstallment={firstInstallment}
                firstInstallmentPercent={firstInstallmentPercent}
                singleCost={singleCost}
              />
            </div>
            <div>
              <Button
                tertiary
                className="ObjectCard__buttonMobile"
                onClick={handleOpenDropdown}
              >
                <KebabIcon className="ObjectCard__buttonIcon" />
              </Button>
              {openDropdown && <ObjectDropdown agencyName={agencyName} />}
            </div>
            <div className="ObjectCard__footerPerson">
              <div>
                <p className="Font_14_140">{name}</p>
                <p className="Font_12_16 Color_text_grey">{status}</p>
              </div>
              <Image alt="" src={image} width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
    </StyledObjectCard>
  )
}

const StyledObjectCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;

  .ObjectCard {
    display: flex;
  }

  .ObjectCard__unpublishedContainer {
    min-width: 400px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }

  .ObjectCard__unpublished {
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

  .ObjectCard__mainImages {
    display: flex;
    max-width: 400px;
    width: 100%;
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

  .ObjectCard__mainImage {
    position: relative;
  }

  .ObjectCard__booked {
    position: absolute;
    padding: 7px 10px;
    background: #4e6af3;
    border-radius: 10px;
    color: #fff;
    top: 10px;
    right: 10px;
  }

  .ObjectCard__info {
    margin-left: 20px;
    width: 100%;
  }

  .ObjectCard__head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .ObjectCard__button,
  .ObjectCard__buttonMobile {
    padding: 2px !important;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    flex-shrink: 0;

    :hover {
      background: #f1f7ff;
    }
  }

  .ObjectCard__location {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .ObjectCard__indicators,
  .ObjectCard__objectInfo {
    display: flex;
    align-items: center;
  }

  .ObjectCard__indicators {
    margin-top: 15px;
    div:not(:first-child) {
      margin-left: 10px;
    }
  }

  .ObjectCard__objectInfo {
    margin-top: 29px;

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

  .ObjectCard__indicatorButton {
    padding: 7px 10px;
    color: #4e6af3;
    svg {
      path {
        fill: #4e6af3;
      }
    }
  }

  .ObjectCard__footer {
    display: flex;
    justify-content: space-between;
    padding-top: 9px;
    margin-top: 10px;
    border-top: 1px solid #e1edfd;
  }

  .ObjectCard__footerPerson {
    display: flex;
    text-align: end;
    img {
      margin-left: 10px;
      border-radius: 50%;
    }
  }

  .ObjectCard__buttonMobile {
    display: none;
  }

  @media (max-width: 1024px) {
    .ObjectCard__mainImages,
    .ObjectCard__unpublishedContainer {
      min-width: 240px;
      max-width: 240px;

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

    .ObjectCard__location {
      margin-top: 8px;
    }

    .ObjectCard__indicators {
      margin-top: 10px;
    }

    .ObjectCard__objectInfo {
      margin-top: 14px;
    }

    .ObjectCard__unpublished {
      display: none;
    }

    .ObjectCard__unpublishedContainer {
      max-width: 240px;
    }

    .ObjectCard__booked {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
    .ObjectCard__mainImages,
    .ObjectCard__unpublishedContainer {
      min-width: 120px;
      max-width: 120px;

      img {
        height: 120px;
      }
    }

    .ObjectCard__info {
      margin-left: 15px;
    }

    .ObjectCard__location {
      margin-top: 5px;
    }

    .ObjectCard__indicators {
      display: none;
    }

    .ObjectCard__objectInfo {
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

    .ObjectCard__footerPerson {
      display: none;
    }

    .ObjectCard__button {
      display: none;
    }

    .ObjectCard__buttonMobile {
      display: flex;
    }
  }
`

const ObjectDropdown = ({ agencyName }: ObjectCardProps) => {
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
  top: 26px;
  background: #fff;
  padding: 10px 15px;
  box-shadow: 0 0 0 2px #e1edfd;
  border-radius: 10px;
  :hover {
    background: #f1f7ff;
  }
  a:hover {
    color: #4e6af3;
  }
`

export { ObjectCard }
