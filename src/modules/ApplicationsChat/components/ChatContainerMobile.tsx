import { Button, MessageInput, Sticker } from "@/components/ui";
import { VerifiedIcon } from "@/icons";
import { StarIconFilled } from "@/icons/StarIconFilled";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  className?: string;
  onTouchStart?: any;
  onTouchEnd?: any;
}

const ChatContainerMobile = ({
  className,
  onTouchEnd,
  onTouchStart,
}: Props) => {
  return (
    <StyledChatContainerMobile
      className={className}
      onTouchEnd={onTouchEnd}
      onTouchStart={onTouchStart}
    >
      <div className="ChatContainerMobile__swiper">
        <div className="ChatContainerMobile__brow"></div>
      </div>
      <div className="ContactInfo">
        <Image
          src="/images/avatar.jpg"
          alt=""
          width={40}
          height={40}
          className="ContactInfo__Image"
        />
        <div className="ContactInfo__nameContainer">
          <p className="ContactInfo__name Font_16_140">Анастасия Петрова</p>
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
        </div>

        <p className="ContactInfo__status Font_14_140 Color_blue_primary">
          Агентство недвижимости — RealEstate
        </p>

        <Button className="ContactInfo__openContacts">Открыть контакты</Button>
      </div>
      <div className="ChatContainerMobile">
        <p className="ChatContainerMobile__date Font_14_140 Color_text_grey">
          22 марта
        </p>
        <div className="ChatContainerMobile__messageContainer">
          <div className="ChatContainerMobile__message">
            <Image
              alt=""
              src="/images/avatar.jpg"
              width={40}
              height={40}
              className="ChatContainerMobile__avatar"
            />
            <div>
              <div className="ChatContainerMobile__incomingMessage Font_16_150">
                <p>
                  Добрый день. Меня зовут Светлана, я агент по недвижимости
                  из компании Real Home. Предлагаю на выбор несколько вариантов{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="ChatContainerMobile__message">
            <div className="ChatContainerMobile__outgoing">
              <Image
                alt=""
                src="/images/avatar.jpg"
                width={40}
                height={40}
                className="ChatContainerMobile__avatar"
              />
              <div>
                <div className="ChatContainerMobile__outgoingMessage Font_16_150">
                  <p>Добрый день, спасибо, отличные варианты</p>
                </div>
                <div className="ChatContainerMobile__outgoingMessage Font_16_150">
                  <p>
                    В течение двух дней постараюсь ответить и задать вопросы
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MessageInput className="ChatContainerMobile__messageInput" />
      </div>
    </StyledChatContainerMobile>
  );
};

const StyledChatContainerMobile = styled.div`
  width: 100%;
  max-width: 1225px;
  display: flex;
  flex-direction: column;

  .ChatContainerMobile__swiper {
    height: 34px;
    background: transparent;
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  .ChatContainerMobile__brow {
    background: #2a344a;
    border-radius: 100px;
    width: 134px;
    height: 5px;
    margin: 0 auto;
    margin-top: 21px;
  }

  .ChatContainerMobile {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: #eef1f5;
  }

  .ChatContainerMobile__date {
    text-align: center;
  }

  .ChatContainerMobile__avatar {
    border-radius: 50%;
  }

  .ChatContainerMobile__messageContainer {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
  }

  .ChatContainerMobile__message {
    display: flex;
    align-items: end;
  }

  .ChatContainerMobile__incomingMessage,
  .ChatContainerMobile__outgoingMessage {
    padding: 10px 20px;
    background: #fff;
    max-width: 570px;
    border-radius: 10px 10px 10px 0;
    margin-left: 10px;
  }

  .ChatContainerMobile__outgoing {
    margin-top: 10px;
    display: flex;
    align-items: end;
    .ChatContainerMobile__outgoingMessage:not(:last-child) {
      margin-bottom: 4px;
      border-radius: 10px;
    }
  }

  .ChatContainerMobile__outgoingMessage {
    background: #cfe2fc;
  }

  .ChatContainerMobile__messageInput {
    /* position: absolute; */
    margin-top: 20px;
    bottom: 0;
  }

  .ContactInfo {
    margin-top: 50px;
    display: flex;
    background: #2a344a;
    align-items: center;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
  }

  .ContactInfo__Image {
    border-radius: 50%;
  }

  .ContactInfo__nameContainer {
    display: flex;
    align-items: center;
  }

  .ContactInfo__name {
    margin-top: 10px;
    color: #fff;
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
    padding: 10px 24px;
  }

  .ContactInfo__disclaimer {
    margin-top: 20px;
    max-width: 400px;
  }
`;

export { ChatContainerMobile };
