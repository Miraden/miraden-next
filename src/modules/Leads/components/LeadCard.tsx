import styled from 'styled-components'
import { theme } from '../../../../styles/tokens'
import { Button, Sticker } from '@/components/ui'
import { BathsIcon, StarIcon } from '@/icons'
import { TagItem, Tags } from '@/components/ui/Tags'
import React, { useEffect, useState } from 'react'
import { BuildingIcon } from '@/icons/BuildingIcon'
import { AreaIcon } from '@/icons/AreaIcon'
import { PlanningIcon } from '@/icons/PlanningIcon'
import { BedIcon } from '@/icons/BedIcon'
import { EyeIcon } from '@/icons/EyeIcon'
import { LayersIcon } from '@/icons/LayersIcon'
import { CallIcon } from '@/icons/CallIcon'
import { LocationIcon } from '@/icons/LocationIcon'
import Link from 'next/link'
import { PricingSelect } from '@/components/ui/PricingDropdown/PricingSelect'
import cn from 'classnames'
import { PinIcon } from '@/icons/PinIcon'
import { WindowSize } from '@/hooks/useWindowSize'
import { Security } from '@/infrastructure/Security/JWT/JWTManager'

// @deprecated
export enum CustomerState {
  NEWBIE = 'NEWBIE',
  CANDIDATE = 'CANDIDATE',
  EXECUTANT = 'EXECUTANT',
  REJECTED = 'REJECTED',
}

interface LeadProps {
  id: number
  className?: string
  href?: string
  isTrue: boolean
  createdAt: string
  title: string
  location: string
  isPublished: boolean
  type?: string
  status?: string
  deadlineAt?: string
  buildYear?: string
  areas: {
    total?: number
    living?: number
  }
  rooms: {
    total?: number
    beds?: number
    bathroom?: number
  }
  purpose?: string
  readyDeal?: string
  format?: string
  rentPeriod: string
  budget: {
    currency: string
    startFrom: string
    endTo: string
  }
  purchaseType: {}
  author: string
  isPinned: boolean
  responseState?: CustomerState
  windowSize: WindowSize
  owner: number
}

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

const LeadCard = (props: LeadProps) => {
  const price: string = props.budget.startFrom + ' – ' + props.budget.endTo
  const shortPrice: string = props.budget.endTo + ' ' + props.budget.currency

  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [cardWidth, setCardWidth] = useState<number>(0)
  const [iamOwner, setIamOwner] = useState<boolean>(false)
  const [iamId, setIamId] = useState<number>(0)

  useEffect(() => {
    const token = String(localStorage.getItem('token'))
    const iam = Security.parseJWT(token)
    setIamOwner(iam.id === props.owner)
    setIamId(iam.id)
  }, [props.owner])

  useEffect(() => {
    const list = document.getElementsByClassName('LeadsList')[0]
    const itemWidth = list.getBoundingClientRect().width
    setCardWidth(itemWidth)
    setIsMobile(cardWidth <= parseInt(mobile))
  }, [cardWidth, props.windowSize])

  return (
    <StyledLeads className={cn({ isPinned: props.isPinned }, props.className)}>
      {props.isPinned && (
        <div className={'Leads__PinnedIcon'}>
          <PinIcon filled={true} />
        </div>
      )}
      <div className="Leads__info">
        <div className="Leads__info--left">
          {props.isTrue && <Sticker theme="black">True</Sticker>}
          <div className={'Leads__info--author Font_button_small'}>
            {isMobile ? 'От ' : 'Заявка от '}
            {props.author}
          </div>
        </div>
        <div className="Leads__info--right">
          <p className="Font_14_140 Published">
            {!isMobile && 'Создана'} {props.createdAt}
          </p>
        </div>
      </div>
      <div className="Leads__head">
        <h5 className={'Font_headline_5'}>
          <Link href={'/lead/' + props.id.toString()}>{props.title}</Link>
        </h5>
      </div>
      <div className="Leads__location Font_body_alt">
        <LocationIcon />
        <p>{props.location}</p>
      </div>
      <div className="Leads__tags Font_button_small">
        <div className="Leads__tags-left">
          <Tags>
            <TagItem
              className={'Leads__tags-favorite'}
              leftIcon={<StarIcon />}
            />
          </Tags>
          <Tags>
            <TagItem
              className={'Leads__id'}
              label={'ID ' + props.id.toString()}
            />
          </Tags>
          {props.type && !isMobile && (
            <Tags>
              <TagItem label={Object.values(props.type).at(0)} />
            </Tags>
          )}
          {props.status && !isMobile && (
            <Tags>
              <TagItem label={props.status} />
            </Tags>
          )}

          {props.format && !isMobile && (
            <Tags>
              <TagItem label={props.format} />
            </Tags>
          )}
          {props.purpose && !isMobile && (
            <Tags>
              <TagItem label={props.purpose} />
            </Tags>
          )}
        </div>
        <div className="Leads__tags-right">{isMobile && <LeadStats />}</div>
      </div>
      <div className="Leads__props Font_Accent_16_S">
        <p>
          <BuildingIcon />
          <span>
            {props.deadlineAt
              ? formatDeadlineDate(props.deadlineAt)
              : props.buildYear}
          </span>
        </p>
        <p>
          <AreaIcon />
          <span>
            {props.areas.total} м <sup>2</sup>
          </span>
        </p>
        <p>
          <PlanningIcon />
          <span>{props.areas.living}</span>
        </p>
        <p>
          <BedIcon />
          <span>{props.rooms.beds}</span>
        </p>
        <p>
          <BathsIcon />
          <span>{props.rooms.bathroom}</span>
        </p>
      </div>

      <div className="Leads__footer">
        <div className="Leads__footer-left">
          <div className="Leads__price_range Font_Accent_20_B">
            {!isMobile && (
              <PricingSelect
                options={['€', '$', '£', '₽']}
                price={price}
                yieldCount={8}
                yieldCountPercent={30}
                firstInstallment={'30'}
                firstInstallmentPercent={'30'}
                singleCost={'30'}
              />
            )}
            {isMobile && price + ' ' + props.budget.currency}
          </div>
        </div>
        <div className="Leads__footer-right">
          {!isMobile && <LeadStats />}
          {!iamOwner && (
            <>
              {props.responseState === undefined && (
                <Button
                  href={'/lead/' + props.id.toString() + '/chat/' + iamId}
                  className={'Leads__button_action'}
                >
                  Предложить
                </Button>
              )}
              {props.responseState === CustomerState.CANDIDATE && (
                <Button
                  href={'/lead/' + props.id.toString() + '/chat/' + iamId}
                  secondary
                  className={'Leads__button_action'}
                >
                  Написать в чат
                </Button>
              )}
              {props.responseState === CustomerState.NEWBIE && (
                <Button
                  href={'/lead/' + props.id.toString() + '/chat/' + iamId}
                  secondary
                  className={'Leads__button_action'}
                >
                  Написать в чат
                </Button>
              )}
              {props.responseState === CustomerState.EXECUTANT && (
                <Button
                  href={'/lead/' + props.id.toString() + '/chat/' + iamId}
                  secondary
                  className={'Leads__button_action Leads__customer-executant'}
                >
                  Написать в чат
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </StyledLeads>
  )
}

function isPriceOverflow(treshold: number = 20): boolean {
  const list = document.getElementsByClassName('LeadsList')[0]
  const cardFooter = list.getElementsByClassName('Leads__footer')[0]
  const cardPrice = list.getElementsByClassName('Leads__footer-left')[0]
  const cardFooterRight = list.getElementsByClassName('Leads__footer-right')[0]

  const footerWidth = cardFooter.getBoundingClientRect().width
  const priceWidth = cardPrice.getBoundingClientRect().width
  const rightWidth = cardFooterRight.getBoundingClientRect().width

  console.log(cardPrice)

  return footerWidth <= priceWidth + rightWidth + treshold
}

const LeadStats = (): JSX.Element => {
  return (
    <div className="Lead__stats Font_Accent_16_S">
      <div className={'Lead__stats-item'}>
        <EyeIcon />
        <span>29</span>
      </div>
      <div className={'Lead__stats-item'}>
        <LayersIcon />
        <span>9</span>
      </div>
      <div className={'Lead__stats-item'}>
        <CallIcon />
        <span>10</span>
      </div>
    </div>
  )
}

function formatDeadlineDate(val: string): string {
  const date = new Date(val)

  return date.getFullYear().toString()
}

const StyledLeads = styled.div`
  background: #fff;
  border-radius: ${theme.border.radius};
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px;
  position: relative;

  .Leads__PinnedIcon {
    position: absolute;
    left: -6px;
    top: -8px;
  }

  &:hover {
    outline: 2px solid ${theme.colors.stroke.lightGrey};

    h5 {
      color: ${theme.colors.main};
    }
  }

  .Leads__customer-executant {
    color: ${theme.colors.text.success};
    background: ${theme.colors.background.green};
  }

  .Leads__info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    .Published {
      color: ${theme.colors.text.grey};
    }
  }

  .Leads__info--left {
    display: flex;
    align-items: center;
    line-height: 1;
    gap: 10px;
    color: ${theme.colors.text.grey};
  }

  .Leads__head {
    margin-bottom: 10px;
  }

  .Leads__location {
    display: flex;
    flex-direction: row;
    align-items: start;
    flex-grow: 1;
    color: ${theme.colors.text.grey};
    margin-bottom: 15px;

    svg {
      margin-right: 5px;

      path {
        fill: ${theme.colors.text.grey};
      }
    }
  }

  .Leads__tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-x: auto;

    .Tags {
      border-radius: 5px;
    }

    &-left {
      display: flex;
      gap: 10px;
    }

    &-right {
      display: flex;
    }

    &-favorite {
      svg path {
        fill: ${theme.colors.main};
      }
    }
  }

  .Leads__props {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 26px;

    p {
      display: flex;
      align-items: center;
      line-height: 1;
      margin: 0;

      svg {
        margin-right: 8px;
      }

      path {
        fill: ${theme.colors.text.grey};
      }

      sup {
        margin-left: -3px;
        font-size: 10px;
      }
    }
  }

  .Leads__footer {
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    border-top: 1px solid ${theme.colors.stroke.divider};
    gap: 10px;

    &-right {
      display: flex;
      align-items: center;
      gap: 40px;
    }
  }

  .Lead__stats {
    display: flex;
    align-items: center;
    gap: 20px;
    color: ${theme.colors.main};

    &-item {
      display: flex;
      align-items: center;

      svg {
        margin-right: 8px;

        path {
          fill: ${theme.colors.text.grey};
        }
      }
    }
  }

  .Leads__button_action {
    padding: 10px 20px;
  }

  .Leads__price_range {
    color: ${theme.colors.main};
  }

  .Leads__id {
    color: ${theme.colors.main};
  }

  @media (max-width: ${mobile}) {
  }
`

export { LeadCard }
