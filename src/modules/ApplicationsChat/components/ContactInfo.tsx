import { Button, Sticker } from "@/components/ui";
import { PointIconFooter, VerifiedIcon } from "@/icons";
import { StarIconFilled } from "@/icons/StarIconFilled";
import cn from "classnames";
import Image from "next/image";
import { useCallback, useState } from "react";
import styled from "styled-components";

type Option = "contacts" | "requests" | "information";

const ContactInfo = () => {
  const [selected, setSelected] = useState<Option | null>(null);
  const [showFilter, setShowFilter] = useState(false);

  const [selectedContent, setSelectedContent] = useState("");

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
  }, []);

  return (
    <StyledContactInfo>
      <div className="Applications__headTabsContainer">
        <div className="Applications__headTabs">
          <Button
            className={cn("", {
              Applications__headTabButton: selected === "contacts",
            })}
            onClick={() => handleSelect("contacts")}
            active={selected === "contacts"}
            tertiary
          >
            Контакты
          </Button>
          <Button
            className={cn("", {
              Applications__headTabButton: selected === "requests",
            })}
            onClick={() => handleSelect("requests")}
            active={selected === "requests"}
            tertiary
          >
            Отзывы
          </Button>
          <Button
            className={cn("", {
              Applications__headTabButton: selected === "information",
            })}
            onClick={() => handleSelect("information")}
            active={selected === "information"}
            tertiary
          >
            Информация
          </Button>
        </div>
        <div className="Applications__headTabsBar" />
        <div className="ContactInfo">
          <Image
            src="/images/avatar.jpg"
            alt=""
            width={80}
            height={80}
            className="ContactInfo__Image"
          />
          <p className="ContactInfo__name Font_20_120">Анастасия Петрова</p>
          <p className="ContactInfo__status Font_14_140 Color_blue_primary">
            Агентство недвижимости — RealEstate
          </p>
          <div className="ContactInfo__location">
            <PointIconFooter width={18} height={18} />
            <p className="Color_text_grey">Кипр, Лимассол</p>
          </div>
          <div className="ContactInfo__experience Font_14_140">
            <p className="Color_text_grey">На сайте 6 лет</p>
            <p className="ContactInfo__dotDivider">•</p>
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
          <Button className="ContactInfo__openContacts">
            Открыть контакты
          </Button>
          <p className="ContactInfo__disclaimer">
            Открывая контакты, вы одновременно сможете видеть контактные данные
            друг друга
          </p>
        </div>
      </div>
    </StyledContactInfo>
  );
};

const StyledContactInfo = styled.div`
  background: #fff;
  padding: 20px 30px;
  border-radius: 10px;
  margin-top: 10px;
  max-width: 625px;

  .Applications__headTabsBar_whiteSpace {
    width: 100%;
    height: 10px;
    border-radius: 0 0 10px 10px;
    background: #fff;
  }

  .SingleApplicationSideBar {
    position: absolute;
    right: -420px;
    top: 94px;
  }

  .Application__headContainer {
    margin-top: 94px;
    padding: 20px 20px 0 20px;
    background: #fff;
    border-radius: 10px 10px 0 0;
  }

  .Application__head {
    display: flex;
    align-items: center;
    h1 {
      margin-left: 10px;
    }
  }

  .Applications__headTabs {
    display: flex;
    button {
      padding: 0;
    }
    button:not(:first-child) {
      margin-left: 30px;
    }
  }

  .Applications__headTabButton {
    position: relative;
    ::before {
      position: absolute;
      top: 35px;
      content: "";
      background: #4e6af3;
      width: 100%;
      height: 4px;
      border-radius: 10px;
    }
  }

  .Applications__headTabsBar {
    margin-top: 15px;
    width: 100%;
    background: #e1edfd;
    height: 4px;
    border-radius: 10px;
  }

  .ContactInfo {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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
    margin-right: 5px;
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
  }

  .ContactInfo__disclaimer {
    margin-top: 20px;
    max-width: 400px;
  }
`;

export { ContactInfo };
