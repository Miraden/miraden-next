import { Sticker, ToggleButton } from '@/components/ui'
import { PricingSelect } from '@/components/ui/PricingDropdown/PricingSelect'
import { BuildYearIcon, ListIcon, PointIconFooter, SquareIcon } from '@/icons'
import { CashIcon } from '@/icons/CashIcon'
import { CreditCardIcon } from '@/icons/CreditCardIcon'
import { EyeIcon } from '@/icons/EyeIcon'
import { LikeIcon } from '@/icons/LikeIcon'
import { LivingSquareIcon } from '@/icons/LivingSquareIcon'
import { PurposeCheckIcon } from '@/icons/PurposeCheckIcon'
import { RoomsIcon } from '@/icons/RoomsIcon'
import { useCallback, useState } from 'react'
import styled from 'styled-components'
import { CustomerState } from '@/modules/Leads/components/LeadCard'
import { theme } from '../../../../../styles/tokens'
import { ApartmentIcon } from '@/icons/ApartmentIcon'
import TimerIcon from '@/icons/TimerIcon'

interface Location {
  id: number
  city: string
  country: string
}

interface EstateType {
  type: string
  name: string
}

interface Areas {
  value: number
  unit: string
}

interface LeadEntryStruct {
  className?: string
  someContent?: string
  id: number
  isTrue: boolean
  createdAt: string
  title: string
  description: string
  location: Location
  type: EstateType
  status: string
  deadlineAt: string
  areas: {
    total: Areas
    living: Areas
  }
  rooms: {
    total: number
    beds: number
    bathroom: number
  }
  purpose: string
  readyDeal?: string
  format: string
  rentPeriod: string
  budget: {
    currency: string
    startFrom: string
    endTo: string
  }
  purchaseType: string
  author: string
  isPinned: boolean
  responseState?: CustomerState
  isHidden?: boolean
}

const currencyOptions = ['€', '$', '£', '₽']

let yieldCount = 8
let firstInstallment = '30'

let firstInstallmentPercent = '30'

let singleCost = '30'

const SingleApplication = (props: LeadEntryStruct) => {
  const price: string = props.budget.startFrom + ' – ' + props.budget.endTo

  const [openDropdown, setOpenDropdown] = useState(false)

  const handleOpenDropdown = useCallback(() => {
    setOpenDropdown(!openDropdown)
  }, [openDropdown])

  const [openText, setOpenText] = useState(false)

  const handleOpenText = useCallback(() => {
    setOpenText(!openText)
  }, [openText])

  return (
    <StyledSingleApplication className={props.className}>
      <div className="SingleApplication__head">
        <div className="SingleApplication__headToggle">
          {props.isHidden !== undefined && <ToggleButton
            state={!props.isHidden}
            className="SingleApplication__headToggleButton"
          />}
          {props.isTrue && <Sticker theme="black">TRUE</Sticker>}
          <p className="Font_14_140">Заявка № {props.id}</p>
        </div>
        <div className="SingleApplication__headDropdown">
          <p className="Lead__createdAt Font_body_alt">
            <span>Создана</span> {props.createdAt}
          </p>
        </div>
      </div>
      <div className="SingleApplication__pricing">
        <div className="SingleApplication__pricingSelect Font_24_120">
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
        <div className="SingleApplication__pricingInfo">
          <div>
            <ListIcon attr={{ className: 'ListIcon' }} />
            <p className="Color_blue_primary Font_16_140">1 268</p>
          </div>
          <div>
            <EyeIcon />
            <p className="Color_blue_primary Font_16_140">264</p>
          </div>
          <Sticker theme="blue" className="SingleApplication__pricingSticker">
            Новых откликов 5
          </Sticker>
        </div>
      </div>
      <div className="SingleApplication__pricingSelectMobile Font_24_120">
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
      <div className="SingleApplication__structureInfo">

        <div className="SingleApplication__structureInfoContent">
          <div className="SingleApplication__structureInfoContent__head">
            <BuildYearIcon width={18} height={18} />
            <div className={"Font_headline_4"}>{formatDeadlineDate(props.deadlineAt)}</div>
          </div>
          <div className="Font_16_150 Color_text_grey SingleApplication__structureInfoContent__label">
            Год постройки
          </div>
        </div>

        <div className="SingleApplication__structureInfoContent">
          <div className="SingleApplication__structureInfoContent__head">
            <SquareIcon width={18} height={18} />
            <div className="Font_headline_4">{props.areas.total.value} {props.areas.total.unit}</div>
          </div>
          <div className="Font_16_150 Color_text_grey SingleApplication__structureInfoContent__label">Общая площадь</div>
        </div>

        <div className="SingleApplication__structureInfoContent">
          <div className="SingleApplication__structureInfoContent__head">
            <LivingSquareIcon width={18} height={18} />
            <div className="Font_headline_4">{props.areas.living.value} {props.areas.living.unit}</div>
          </div>
          <div className="Font_16_150 Color_text_grey SingleApplication__structureInfoContent__label">Жилая площадь</div>
        </div>

        <div className="SingleApplication__structureInfoContent">
          <div className="SingleApplication__structureInfoContent__head">
            <RoomsIcon width={18} height={18} />
            <div className="Font_headline_4">{props.rooms.total}</div>
          </div>
          <div className="Font_16_150 Color_text_grey SingleApplication__structureInfoContent__label">Комнат</div>
        </div>
        <div className="SingleApplication__structureInfoContent">
          <div className="SingleApplication__structureInfoContent__head">
            <RoomsIcon width={18} height={18} />
            <p className="Font_headline_4">{props.rooms.beds}</p>
          </div>
          <div className="Font_16_150 Color_text_grey SingleApplication__structureInfoContent__label">Спален</div>
        </div>
        <div className="SingleApplication__structureInfoContent">
          <div className="SingleApplication__structureInfoContent__head">
            <RoomsIcon width={18} height={18} />
            <div className="Font_headline_4">{props.rooms.bathroom}</div>
          </div>
          <div className="Font_16_150 Color_text_grey SingleApplication__structureInfoContent__label">Санузлов</div>
        </div>
      </div>
      <div className="Divider"></div>
      <div className="SingleApplication__fullInfo Font_16_24">
        <div className="SingleApplication__location">
          <div>
            <PointIconFooter width={18} height={18} />
            <p>Локация</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>{props.location.country}</p>
            <p>{props.location.city}</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <CashIcon width={18} height={18} />
            <p>Формат сделки</p>
          </div>
          <div>
            <p className="SingleApplication__locationInfo">{props.format}</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <ApartmentIcon />
            <p>Тип</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>{Object.keys(props.type)[0]}</p>
            <p>{Object.values(props.type)[0]}</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <BuildYearIcon width={18} height={18} />
            <p>Состояние</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>{props.status}</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <SquareIcon width={18} height={18} />
            <p>Площадь</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>
              Общая — {props.areas.total.value} {props.areas.total.unit}
            </p>
            <p>
              Жилая — {props.areas.living.value} {props.areas.living.unit}
            </p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <RoomsIcon width={18} height={18} />
            <p>Комнаты</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>Всего — {props.rooms.total}</p>
            <p>Спальни — {props.rooms.beds}</p>
            <p>Санузлы — {props.rooms.bathroom}</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <PurposeCheckIcon width={18} height={18} />
            <p>Цель покупки</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>{props.purpose}</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <TimerIcon />
            <p>Срочность</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>{props.readyDeal}</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <CreditCardIcon attr={{ width: 18, height: 18 }} />
            <p>Способ покупки</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>{props.purchaseType}</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <LikeIcon width={18} height={18} />
            <p>Пожелания</p>
          </div>
          <div className="SingleApplication__locationInfoText">
            <div className="SingleApplication__locationInfo" dangerouslySetInnerHTML={{__html: props.description}}></div>
          </div>
        </div>
      </div>
    </StyledSingleApplication>
  )
}

const StyledSingleApplication = styled.div`
  background: #ffffff;
  border-radius: 10px;
  margin-top: 20px;
  padding: 0 20px 20px;

  .SingleApplication__pricingSelectMobile {
    display: none;
  }

  .SingleApplication__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e1edfd;
    padding: 11px 20px;
  }

  .SingleApplication__headToggle {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .SingleApplication__headToggleButton {
    line-height: 1;

    input:checked + .ToggleButton__slider {
      background-color: #0ab258;
    }
  }

  .SingleApplication__headSticker {
    margin-left: 10px;
    margin-right: 10px;
  }

  .SingleApplication__headDropdown {
    display: flex;
    align-items: center;
    position: relative;

    button {
      flex-shrink: 0;
      margin-left: 20px;
    }
  }

  .SingleApplication__pricing {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e1edfd;
    padding: 20px 20px 19px 16px;
  }

  .SingleApplication__pricingInfo {
    display: flex;

    div {
      display: flex;
      align-items: center;

      svg {
        margin-right: 8px;
      }
    }

    div:not(:first-child) {
      margin-left: 20px;
    }
  }

  .ListIcon {
    width: 18px;
    height: 18px;

    path {
      fill: #7786a5;
    }
  }

  .SingleApplication__pricingSticker {
    div {
      padding: 4px 13px;
    }
  }

  .ObjectCard__button {
    padding: 2px !important;
    width: 28px;
    height: 28px;
    border-radius: 50%;

    :hover {
      background: #f1f7ff;
    }
  }

  .SingleApplication__structureInfo {
    display: flex;
    align-items: center;
    padding: 20px 20px 18px;
    margin-bottom: 3px;
    justify-content: space-between;
  }

  .Divider {
    background: #e1edfd;
    height: 4px;
    border-radius: 4px;
  }

  .SingleApplication__structureInfoContent {
    display: flex;
    flex-direction: column;

    &__head {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    &__label {
      margin-top: 4px;
    }

    svg {

    }
  }

  .SingleApplication__fullInfo {
    display: flex;
    flex-direction: column;

    svg path {
      fill: ${theme.colors.text.grey};
    }
  }

  .SingleApplication__location {
    display: flex;
    padding: 20px 20px 19px;
    border-bottom: 1px solid #e1edfd;

    div {
      display: flex;
      align-items: center;

      svg {
        margin-right: 15px;
      }
    }

    div:first-child {
      min-width: 280px;
      color: #7786a5;
    }
  }

  .SingleApplication__locationInfoText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    button {
      align-self: flex-start;
      margin-top: 20px;
    }
  }

  .SingleApplication__location:last-child {
    border-bottom: none;
    align-items: start;
  }

  .SingleApplication__locationInfo {
    display: flex;

    p:not(:first-child) {
      margin-left: 10px;
      border-left: 2px solid #c7d2e9;
      padding-left: 10px;
    }
  }

  .Lead__createdAt {
    color: ${theme.colors.text.grey};
  }

  @media (max-width: 767px) {
    padding-left: 0;
    padding-right: 0;

    .SingleApplication__location {
      flex-direction: column;
      padding: 16px 20px;
    }

    .SingleApplication__locationInfo {
      margin-left: 33px;
      margin-top: 4px;
      flex-wrap: wrap;

      p:not(:last-child) {
        margin-left: 0;
        margin-right: 9px;
        border-right: 2px solid #c7d2e9;
        border-left: none !important;
        padding-right: 9px;
      }

      p:not(:first-child) {
        margin-left: 0;
        border-left: none !important;
        padding-right: 9px;
        padding-left: 0;
      }
    }

    .SingleApplication__structureInfo {
      display: none;
    }

    .SingleApplication__pricing {
      .SingleApplication__pricingSelect {
        display: none;
        outline: none;

        &:focus {
          outline: none;
        }
      }
    }

    .SingleApplication__head {
      padding-left: 20px;
      padding-right: 20px;
    }

    .SingleApplication__pricing {
      padding-left: 20px;
      padding-right: 20px;
    }

    .SingleApplication__pricingSelectMobile {
      padding-left: 20px;
      display: block;
      padding-top: 16px;
      padding-bottom: 20px;
      border-bottom: 3px solid #e1edfd;
    }

    .SingleApplication__headDropdown {
      p {
        span {
          display: none !important;
        }
      }
    }

    .SingleApplication__locationInfoText {
      button {
        margin-left: 32px;
      }
    }
  }
`

function formatDeadlineDate(val: string): string {
  const date = new Date(val)

  return date.getFullYear().toString()
}

export { SingleApplication }
