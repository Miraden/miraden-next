import { VerifiedIcon } from '@/icons'
import styled from 'styled-components'
import { theme } from '../../../../styles/tokens'
import { Sticker } from '@/components/ui'
import { StarIconFilled } from '@/icons/StarIconFilled'
import React from 'react'

interface Props {
  lead: Leads.LeadEntryType
  owner?: User.PublicProfile
}

const LeadInfo = (props: Props): JSX.Element => {
  return (
    <StyledInfo className="SingleApplication__fullInfo Font_16_24">
      <div className="LeadSection">
        <div>
          <p>Пользователь</p>
        </div>
        <div className={'LeadSectionInfo'}>
          {props.owner && RenderUserProfile(props.owner)}
        </div>
      </div>
      <div className="LeadSection">
        <div>
          <p>Бюджет</p>
        </div>
        <div className="LeadSectionInfo">
          <p>
            {props.lead.budgetFrom} - {props.lead.budgetTo}
          </p>
        </div>
      </div>
      <div className="LeadSection">
        <div>
          <p>Локация</p>
        </div>
        <div className="LeadSectionInfo">
          <p>{props.lead.countryName}</p>
          <p>{props.lead.cityName}</p>
        </div>
      </div>
      <div className="LeadSection">
        <div>
          <p>Формат сделки</p>
        </div>
        <div>
          <p className="LeadSectionInfo">{props.lead.format}</p>
        </div>
      </div>
      <div className="LeadSection">
        <div>
          <p>Тип</p>
        </div>
        <div className="LeadSectionInfo">
          <p>{Object.keys(props.lead.type)[0]}</p>
          <p>{Object.values(props.lead.type)[0]}</p>
        </div>
      </div>
      <div className="LeadSection">
        <div>
          <p>Состояние</p>
        </div>
        <div className="LeadSectionInfo">
          <p>{props.lead.status}</p>
        </div>
      </div>
      <div className="LeadSection">
        <div>
          <p>Площадь</p>
        </div>
        <div className="LeadSectionInfo">
          <p>Общая — {props.lead.totalArea}</p>
          <p>Жилая — {props.lead.livingArea}</p>
        </div>
      </div>
      <div className="LeadSection">
        <div>
          <p>Комнаты</p>
        </div>
        <div className="LeadSectionInfo">
          <p>Всего — {props.lead.rooms}</p>
          <p>Спальни — {props.lead.beds}</p>
          <p>Санузлы — {props.lead.bathrooms}</p>
        </div>
      </div>
      <div className="LeadSection">
        <div>
          <p>Цель покупки</p>
        </div>
        <div className="LeadSectionInfo">
          <p>{props.lead.purpose}</p>
        </div>
      </div>
      <div className="LeadSection">
        <div>
          <p>Срочность</p>
        </div>
        <div className="LeadSectionInfo">
          <p>{props.lead.readyDeal}</p>
        </div>
      </div>
      <div className="LeadSection">
        <div>
          <p>Способ покупки</p>
        </div>
        <div className="LeadSectionInfo">
          <p>{props.lead.purchaseType}</p>
        </div>
      </div>
      <div className="LeadSection">
        <div>
          <p>Пожелания</p>
        </div>
        <div className="LeadSectionInfoText">
          <div
            className="LeadSectionInfo"
            dangerouslySetInnerHTML={{ __html: props.lead.description }}
          ></div>
        </div>
      </div>
    </StyledInfo>
  )
}

const RenderUserProfile = (user: User.PublicProfile): JSX.Element => {
  return (
    <div className="LeadOwner Font_body_alt">
      <div className="LeadOwner--photo">
        <img src={user.photo} alt="" />
      </div>
      <div className="LeadOwner--user">
        <div className="LeadOwner--name Font_Accent_16_S">
          {user.name} {user.surname}
        </div>
        <div className="LeadOwner--info">
          <VerifiedIcon className={'LeadOwner--verified'} />
          {user.isPro && (
            <Sticker theme="black" className="LeadOwner--sticker">
              pro
            </Sticker>
          )}
          <div className="LeadOwner--rating">
            <StarIconFilled
              width={14}
              height={14}
              className="LeadOwner--ratingIcon"
            />
            <p className="Font_14_140">{user.rating}</p>
          </div>
        </div>
        <div className="LeadOwner--onlineStatus">online</div>
      </div>
    </div>
  )
}

const StyledInfo = styled.div`
  .LeadSection {
    display: flex;
    padding: 20px 20px 19px;
    border-bottom: 1px solid #e1edfd;

    div {
      display: flex;
      align-items: center;
    }

    & > div:first-child {
      min-width: 150px;
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

  .LeadSectionInfo {
    display: flex;

    & > p:not(:first-child) {
      margin-left: 10px;
      border-left: 2px solid #c7d2e9;
      padding-left: 10px;
    }
  }

  .Lead__createdAt {
    color: ${theme.colors.text.grey};
  }

  .LeadSection .LeadOwner {
    flex-direction: row;
    min-width: auto;
    padding: 0;
    margin: 0;
    gap: 15px;

    &--name {
      margin: 0;
      color: ${({ theme }) => theme.colors.black};
    }

    &--info {
      margin: 0;
    }

    &--onlineStatus {
      width: 100%;
    }

    &--user {
      flex-wrap: wrap;
    }

    div&--photo:first-child {
      width: 48px;
      min-width: 48px;
      height: 48px;

      img {
        width: 48px;
        height: 48px;
      }
    }
  }
`

export default LeadInfo
