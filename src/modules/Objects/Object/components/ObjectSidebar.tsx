import { Button, Sticker } from "@/components/ui";
import { PointIconFooter, VerifiedIcon } from "@/icons";
import { StarIconFilled } from "@/icons/StarIconFilled";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  className?: string;
}

const ObjectSidebar = ({ className }: Props) => {

  return (
    <StyledSingleApplicationSideBar className={className}>
      <div className="SideBar">
        <div className="ContactInfo">
          <p className="ObjectSidebar__title Color_text_grey">ПРОДАВЕЦ</p>
          <Image
            src="/images/avatar.jpg"
            alt=""
            width={80}
            height={80}
            className="ContactInfo__Image"
          />
          <p className="ContactInfo__name Font_20_120">Светлана Гридасова</p>
          <p className="ContactInfo__status Font_14_140 Color_blue_primary">
            Агент — RealEstate
          </p>
          <div className="ContactInfo__location">
            <PointIconFooter width={18} />
            <p className="Color_text_grey">Кипр, Лимассол</p>
          </div>
          <div className="ContactInfo__experience Font_14_140">
            <p className="Color_text_grey">На сайте 6 лет</p>
            <p className="ContactInfo__dotDivider Color_text_disabled">•</p>
            <p className="Color_green">В сети</p>
          </div>
          <div className="ContactInfo__statusInfo">
            <VerifiedIcon className="ContactInfo__verifiedIcon" />
            <Sticker theme="black" className="ContactInfo__sticker">
              pro
            </Sticker>
            <div className="ContactInfo__rating">
              <StarIconFilled
                width={14}
                height={14}
                className="ContactInfo__ratingIcon"
              />
              <p className="Font_14_140">4.8</p>
            </div>
          </div>
          <Button
            className="ContactInfo__openContacts"
            // onClick={handleContactOpen}
          >
            Открыть контакты
          </Button>
          <p className="ContactInfo__disclaimer Color_text_grey">
            Открывая контакты, вы одновременно сможете видеть контактные данные
            друг друга
          </p>
        </div>

        <div className="ObjectSidebar__bottomWrapper">
          <div className="ObjectSidebar__bottomItem">
            <p>Задать вопрос в чате</p>
          </div>
          <div className="ObjectSidebar__bottomItem">
            <p>В избранное</p>
          </div>
          <div className="ObjectSidebar__bottomItem">
            <p>Бронировать</p>
          </div>
        </div>
      </div>
    </StyledSingleApplicationSideBar>
  );
};
const StyledSingleApplicationSideBar = styled.div`
  border-radius: 10px;
  position: relative;

  .SideBar {
    border-radius: 10px;
  }

  .ContactInfo {
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px 0 90px 0;
  }

  .ObjectSidebar__title {
    border-bottom: 1px solid #e1edfd;
    width: 295px;
    margin: 0 auto;
    margin-bottom: 30px;
    padding-bottom: 15px;
  }

  .ContactInfo__Image {
    border-radius: 50%;
  }

  .ContactInfo__name {
    margin-top: 10px;
  }

  .ContactInfo__status {
    margin-top: 5px;
  }

  .ContactInfo__location {
    display: flex;
    align-items: center;
    margin-top: 5px;

    svg {
      margin-right: 6px;
    }
  }

  .ContactInfo__experience {
    display: flex;
    align-items: center;
    margin-top: 5px;
  }

  .ContactInfo__dotDivider {
    margin-left: 10px;
    margin-right: 10px;
  }

  .ContactInfo__statusInfo {
    display: flex;
    align-items: center;
    margin-top: 8px;
    div {
      display: flex;
      align-items: center;
    }
  }

  .ContactInfo__sticker {
    margin-right: 10px;
  }

  .ContactInfo__verifiedIcon {
    margin-right: 10px;
  }

  .ContactInfo__rating {
    p {
      margin-left: 5px;
    }
  }

  .ContactInfo__ratingIcon {
    path {
      fill: #7786a5;
    }
  }

  .ContactInfo__openContacts {
    margin-top: 50px;
    padding: 10px 24px;
  }

  .ContactInfo__disclaimer {
    margin-top: 20px;
    max-width: 250px;
  }

  .ObjectSidebar__bottomWrapper {
    background: white;
    margin-top: 30px;
    border-radius: 10px;
  }

  .ObjectSidebar__bottomItem {
    padding: 20px 0;
    text-align: center;
    cursor: pointer;
  }

  .ObjectSidebar__bottomItem:hover {
    background: #E1EDFD;
    color: #4E6AF3;
  }

  @media (max-width: 576px) {
    .ContactInfo {
      padding-left: 20px;
      padding-right: 20px;
    }
    .ContactInfo__openContacts {
      margin-top: 30px;
      width: 100%;
    }
    .ContactInfo__Image {
      width: 64px;
      height: 64px;
    }
  }
`;

export { ObjectSidebar };
