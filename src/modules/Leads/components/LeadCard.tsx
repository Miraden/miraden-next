import styled from 'styled-components'
import { theme } from '../../../../styles/tokens'
import { Button, Sticker } from '@/components/ui'
import { BathsIcon, StarIcon } from '@/icons'
import { TagItem, Tags } from '@/components/ui/Tags'
import React from 'react'
import { BuildingIcon } from '@/icons/BuildingIcon'
import { AreaIcon } from '@/icons/AreaIcon'
import { PlanningIcon } from '@/icons/PlanningIcon'
import { BedIcon } from '@/icons/BedIcon'
import { EyeIcon } from '@/icons/EyeIcon'
import { LayersIcon } from '@/icons/LayersIcon'
import { CallIcon } from '@/icons/CallIcon'
import { LocationIcon } from '@/icons/LocationIcon'
import Link from 'next/link'
import {PricingSelect} from "@/components/ui/PricingDropdown/PricingSelect";
import cn from "classnames";
import {PinIcon} from "@/icons/PinIcon";

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
  status: string
  deadlineAt: string
  areas: {
    total: number
    living: number
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
  purchaseType: {}
  author: string
  isPinned: boolean
}

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

const LeadCard = (props: LeadProps) => {
  const price: string = props.budget.startFrom + " – " + props.budget.endTo

  return (
    <StyledLeads className={cn({isPinned: props.isPinned})}>
      {props.isPinned && <div className={"Leads__PinnedIcon"}><PinIcon filled={true}/></div>}
      <div className="Leads__info">
        <div className="Leads__info--left">
          {props.isTrue && <Sticker theme="black">True</Sticker>}
          <div className={"Leads__info--author Font_button_small"}>Заявка от {props.author}</div>
        </div>
        <div className="Leads__info--right">
          <p className="Font_14_140 Color_text_disabled Published">
            Создана {props.createdAt}
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
        <Tags>
          <TagItem leftIcon={<StarIcon />} />
        </Tags>
        <Tags>
          <TagItem className={"Leads__id"} label={"ID " + props.id.toString()} />
        </Tags>

        {props.readyDeal && (
          <Tags>
            <TagItem label={props.readyDeal} />
          </Tags>
        )}
        {props.type && (
          <Tags>
            <TagItem label={Object.values(props.type).at(0)} />
          </Tags>
        )}
        <Tags>
          <TagItem label={props.status} />
        </Tags>
        <Tags>
          <TagItem label={props.format} />
        </Tags>
        <Tags>
          <TagItem label={props.purpose} />
        </Tags>
      </div>
      <div className="Leads__props Font_Accent_16_S">
        <p>
          <BuildingIcon />
          <span>{props.deadlineAt}</span>
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
            <PricingSelect
              options={["€", "$", "£", "₽"]}
              price={price}
              yieldCount={8}
              yieldCountPercent={30}
              firstInstallment={"30"}
              firstInstallmentPercent={"30"}
              singleCost={"30"}
            />
          </div>
        </div>
        <div className="Leads__footer-right">
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
          <Button className={'Leads__button_action'}>Предложить</Button>
        </div>
      </div>
    </StyledLeads>
  )
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

  .Leads__info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
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
    align-items: center;
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
    margin-bottom: 26px;
    flex-wrap: wrap;

    .Tags {
      border-radius: 5px;
    }
  }

  .Leads__props {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 10px;

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
    border-top: 1px solid ${theme.colors.stroke.divider};

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
    .Leads__tags {
      display: none;
    }

    .Leads__footer-right {
      display: none;
    }
  }
`

export { LeadCard }
