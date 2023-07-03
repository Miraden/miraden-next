import { Sticker } from "@/components/ui";
import { TelegramIcon, VerifiedIcon, WhatsappIcon } from "@/icons";
import { FacebookFullIcon } from "@/icons/FacebookFullIcon";
import { InstagramFullIcon } from "@/icons/InstagramFullIcon";
import { StarIconFilled } from "@/icons/StarIconFilled";
import { ViberIcon } from "@/icons/ViberIcon";
import Image from "next/image";
import styled from "styled-components";
import { OpenContactsAccordion } from "./OpenContactsAccordion";

const OpenContacts = () => {
  return (
    <StyledOpenContacts>
      <div className="Contacts__head">
        <p className="Contacts__user Color_text_grey Font_14_140">
          Пользователь
        </p>
        <Image
          src="/images/avatar.jpg"
          alt=""
          width={48}
          height={48}
          className="Contacts__Image"
        />
        <div className="Contacts__headInfo">
          <div className="Contacts__headName">
            <p className="Font_16_140">Анастасия Петрова</p>
            <p className="Contacts__online Font_14_140 Color_text_grey">
              В сети 5 ч. назад
            </p>
          </div>
          <div className="Contacts__statusInfo">
            <VerifiedIcon className="Contacts__verifiedIcon" />
            <Sticker theme="black" className="Contacts__sticker">
              pro
            </Sticker>
            <div className="Contacts__rating">
              <StarIconFilled
                width={14}
                height={14}
                className="Contacts__ratingIcon"
              />
              <p className="Font_14_140">4.8</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Contacts__fullInfo Font_14_140">
        <OpenContactsAccordion />
        <div className="Contacts__location">
          <div>
            <p>Локация</p>
          </div>
          <div className="Contacts__locationInfo">
            <p>Кипр, Ларнака</p>
          </div>
        </div>
        <div className="Contacts__location">
          <div>
            <p>Телефон</p>
          </div>
          <div>
            <p className="Contacts__locationInfo">+ 357 99 123 456</p>
          </div>
        </div>
        <div className="Contacts__location">
          <div>
            <p>Почта</p>
          </div>
          <div className="Contacts__locationInfo">
            <p>anastasiya.miraden@gmail.com</p>
          </div>
        </div>
        <div className="Contacts__location">
          <div>
            <p>Telegram</p>
          </div>
          <div className="Contacts__locationInfo">
            <TelegramIcon attr={{width: 20, height: 20}} />

            <p>@anastasia_real_estate</p>
          </div>
        </div>
        <div className="Contacts__location">
          <div>
            <p>WhatsApp</p>
          </div>
          <div className="Contacts__locationInfo">
            <WhatsappIcon width={20} height={20} />
            <p>+7 (989) 91-90-90</p>
          </div>
        </div>
        <div className="Contacts__location">
          <div>
            <p>Viber</p>
          </div>
          <div className="Contacts__locationInfo">
            <ViberIcon />
            <p>+7 (989) 91-90-90</p>
          </div>
        </div>
        <div className="Contacts__location">
          <div>
            <p>Facebook</p>
          </div>
          <div className="Contacts__locationInfo">
            <FacebookFullIcon />
            <p>@anastasia_real_estate</p>
          </div>
        </div>
        <div className="Contacts__location">
          <div>
            <p>Instagram</p>
          </div>
          <div className="Contacts__locationInfo">
            <InstagramFullIcon />
            <p>@real_estate</p>
          </div>
        </div>
        <div className="Contacts__location">
          <div>
            <p>На сайте</p>
          </div>
          <div className="Contacts__locationInfo">
            <p>5 лет 4 месяца</p>
          </div>
        </div>
        <div className="Contacts__location">
          <div>
            <p>Языки</p>
          </div>
          <div className="Contacts__locationInfo">
            <p>Русский / Английский / Испанский</p>
          </div>
        </div>
        <div className="Contacts__location">
          <div>
            <p>О себе</p>
          </div>
          <div className="Contacts__locationInfo">
            <p>
              Более 15 лет успешной работы на Кипре, все операции
              с недвижимостью. Подбор объектов, проверка надёжности продавца,
              проверка целевого назначения
            </p>
          </div>
        </div>
      </div>
    </StyledOpenContacts>
  );
};

const StyledOpenContacts = styled.div`
  & {
    padding: 0;
  }

  .Contacts__head {
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    align-items: flex-start;
    padding-top: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #e1edfd;
  }

  .Contacts__user {
    margin-top: 4px;
    min-width: 150px;
    margin-right: -10px;
  }

  .Contacts__Image {
    border-radius: 50%;
  }

  .Contacts__headInfo {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .Contacts__headName {
    margin-left: 15px;
  }

  .Contacts__statusInfo {
    display: flex;
    align-items: center;
    margin-left: 16px;
    margin-top: 4px;
    div {
      display: flex;
      align-items: center;
    }
  }

  .Contacts__sticker {
    margin-right: 5px;
  }

  .Contacts__verifiedIcon {
    margin-right: 10px;
  }

  .Contacts__rating {
    p {
      margin-left: 5px;
    }
  }

  .Contacts__ratingIcon {
    path {
      fill: #7786a5;
    }
  }

  .Contacts__location {
    display: flex;
    padding-top: 15px;
    padding-bottom: 14px;
    border-bottom: 1px solid #e1edfd;
    padding-right: 30px;
    padding-left: 30px;

    div {
      display: flex;
      align-items: center;
    }

    div:first-child {
      min-width: 150px;
      color: #7786a5;
    }
  }

  .Contacts__location:last-child {
    border-bottom: none;
    align-items: start;
  }

  .Contacts__locationInfo {
    display: flex;
    /* margin-left: 30px; */

    p:not(:first-child) {
      margin-left: 10px;
    }
  }

  @media (max-width: 660px) {
    .Contacts__headInfo {
      flex-direction: column;
    }
  }

  @media (max-width: 576px) {
    padding-bottom: 80px;

    .Contacts__head {
      padding-right: 20px;
      padding-left: 20px;
    }

    .Contacts__user {
      display: none;
    }

    .Contacts__location {
      flex-direction: column;
      padding-left: 20px;
      padding-right: 20px;
    }

    .Contacts__locationInfo {
      margin-left: 0;
      margin-top: 4px;
    }
  }
`;

export { OpenContacts };
