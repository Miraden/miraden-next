import React from "react";
import styled from "styled-components";
import {theme} from "../../../styles/tokens";
import {Button, Sticker} from "@/components/ui";
import {LocationIcon} from "@/icons/LocationIcon";
import {VerifiedIcon} from "@/icons";
import {StarIconFilled} from "@/icons/StarIconFilled";

const LeadOwnerCard = (): JSX.Element => {
  return <StyledCard className={"SingleApplicationSideBar"}>
    <div className={"SideBar"}>
      <div className="SideBar__head Font_Accent_12_caps">Заявка от</div>
      <div className="LeadOwner Font_body_alt">
        <div className="LeadOwner--photo"><img src="/user_06.jpg" alt=""/></div>
        <div className="LeadOwner--name Font_headline_5">Светлана Гридасова</div>
        <div className="LeadOwner--status">Агент — RealEstate</div>
        <div className="LeadOwner--location"><LocationIcon/> Кипр, Лимассол</div>
        <div className="LeadOwner--account_status"><span>На сайте 6 лет</span> <span className={"LeadOwner--accountDivider"}></span> <span className={"LeadOwner--online"}>В сети</span></div>
        <div className="LeadOwner--info">
          <VerifiedIcon className={"LeadOwner--verified"}/>
          <Sticker theme="black" className="LeadOwner--sticker">pro</Sticker>
          <div className="LeadOwner--rating">
            <StarIconFilled
              width={14}
              height={14}
              className="LeadOwner--ratingIcon"
            />
            <p className="Font_14_140">1.4</p>
          </div>
        </div>
      </div>
      <div className="LeadSidebar--response"><Button>Предложить</Button></div>
      <div className="LeadSidebar--description Font_body_alt">
        <p>Сделайте предложение — это бесплатно. Если пользователь решит обменяться контактами, тогда с вас будет списано:</p>
      </div>
      <div className="LeadSidebar--price Font_Accent_16_S">10 €</div>
    </div>

    <div className="SideBar__section">
      <Button tertiary>Задать вопрос в чате</Button>
      <Button tertiary>В избранное</Button>
    </div>
  </StyledCard>
}

const StyledCard = styled.div`
  .SideBar {
    height: fit-content;
    padding: 30px;
    background: #fff;
    border-radius: ${theme.border.radius};
    text-align: center;
  }

  .SideBar__section {
    margin-top: 10px;
    background: #fff;
    border-radius: ${theme.border.radius};
    text-align: center;

    button {
      padding: 22px 0;
      width: 100%;
      border-radius: 0;
      border-bottom: 1px solid ${theme.colors.stroke.divider};

      &:first-of-type {
        border-top-left-radius: ${theme.border.radius};
        border-top-right-radius: ${theme.border.radius};
      }

      &:last-of-type {
        border-bottom-left-radius: ${theme.border.radius};
        border-bottom-right-radius: ${theme.border.radius};
        border-bottom: none;
      }
    }
  }

  .SideBar__head {
    padding-bottom: 15px;
    color: ${theme.colors.text.grey};
    border-bottom: 1px solid ${theme.colors.stroke.divider};
  }

  .LeadOwner {
    margin-top: 30px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    &--account_status {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: ${theme.colors.text.grey};
    }

    &--accountDivider {
      width: 3px;
      height: 3px;
      border-radius: 100%;
      display: inline-block;
      background: ${theme.colors.text.grey};
    }

    &--photo {
      img {
        width: 80px;
        height: 80px;
        margin: 0 auto;
        border-radius: 100%;
      }
    }

    &--name {
      margin-top: 10px;
    }

    &--location {
      color: ${theme.colors.text.grey};
      display: flex;
      align-items: center;
      justify-content: center;

      svg path {
        fill: ${theme.colors.text.grey};
      }
    }

    &--account_status {
    }

    &--info {
      gap: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 6px;
    }

    &--verified {

    }

    &--rating {
      display: flex;
      align-items: center;

      svg {
        margin-right: 5px;

        path {
          fill: ${theme.colors.text.grey};
        }
      }
    }
  }

  .LeadSidebar {
    &--response {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &--description {
      color: ${theme.colors.text.grey};
    }

    &--price {
      color: ${theme.colors.main};
      margin-top: 5px;
    }
  }
`

export default LeadOwnerCard
