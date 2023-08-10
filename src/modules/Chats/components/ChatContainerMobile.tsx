import { Button, MessageInput, Sticker } from "@/components/ui";
import { ArrowAccordionIcon, VerifiedIcon } from "@/icons";
import { StarIconFilled } from "@/icons/StarIconFilled";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  className?: string;
  onClick?: any;
}

const ChatContainerMobile = ({ className, onClick }: Props) => {
  return (
    <StyledChatContainerMobile className={className}>
      <div className="Chat__all">
        <div className="Chat__allContainer">
          <button className="AllChats__backButton" onClick={onClick}>
            <ArrowAccordionIcon width={18} height={18} />
          </button>
          <Image
            alt=""
            src="/images/avatar.jpg"
            width={40}
            height={40}
            className="ApplicationInfo__avatar"
          />
          <div className="Status">
            <div className="FullStatus">
              <p className="Font_16_140">Светлана Гридасова</p>
              <div className="Application__infoStatus">
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
            <p className="Font_14_140 Color_text_disabled">
              Агент — RealEstate
            </p>
          </div>
        </div>

        <Button compact className="OpenContacts__button">
          Открыть контакты
        </Button>
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
  background: #eef1f5;
  height: 100%;
  position: absolute;
  z-index: 999;
  top: 0;
  .Chat__all {
    display: flex;
    justify-content: space-between;
    background: #2a344a;
    padding: 9px 20px 20px 12px;
    color: #fff;
    border-radius: 0 0 10px 10px;
    border-bottom: 1px solid #d4ddee;
    position: sticky;
    top: 0;
    z-index: 200;
  }

  .Chat__allContainer {
    display: flex;
    align-items: center;
  }

  .AllChats__backButton {
    border-radius: 50%;
    margin-right: 3px;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background: #3b4a69;
    }
    svg {
      margin-left: 2px;
      margin-bottom: 1px;
      transform: rotate(90deg);
      path {
        fill: #fff;
      }
    }
  }

  .ChatContainerMobile {
    position: relative;
    width: 100%;
    height: -webkit-fill-available;
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
    margin-top: 20px;
    position: sticky;
    bottom: 0;
  }

  .Status {
    margin-left: 15px;
  }

  .FullStatus {
    display: flex;
    align-items: center;
  }

  .Application__infoStatus {
    display: flex;
    margin-left: 15px;
  }

  .ContactInfo__rating {
    display: flex;
  }

  .OpenContacts__button {
    padding: 10px 24px;
  }

  .ApplicationInfo {
    display: flex;
  }

  @media (max-width: 1024px) {
    margin-left: 0;

    .ChatContainerMobile__messageContainer {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media (max-width: 768px) {
    .Chat__all {
      flex-direction: column;
      padding: 10px;
    }

    .OpenContacts__button {
      margin-top: 20px;
    }
  }

  @media (max-width: 576px) {
    padding-left: 0;
    padding-right: 0;

    .ChatContainerMobile__avatar {
      display: none;
    }

    .ChatContainerMobile__incomingMessage,
    .ChatContainerMobile__outgoingMessage {
      margin-left: 0;
    }

    .ChatContainerMobile__messageContainer {
      padding-right: 10px;
      padding-left: 10px;
    }
  }
`;

export { ChatContainerMobile };
