import { MessageInput } from "@/components/ui";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  className?: string;
  onTouchStart?: any;
  onTouchEnd?: any;
}

const ChatContainer = ({ className, onTouchEnd, onTouchStart }: Props) => {
  return (
    <StyledChatContainer
      className={className}
      onTouchEnd={onTouchEnd}
      onTouchStart={onTouchStart}
    >
      <div className="ChatContainer">
        <p className="ChatContainer__date Font_14_140 Color_text_grey">
          22 марта
        </p>
        <div className="ChatContainer__messageContainer">
          <div className="ChatContainer__message">
            <Image
              alt=""
              src="/images/avatar.jpg"
              width={40}
              height={40}
              className="ChatContainer__avatar"
            />
            <div>
              <div className="ChatContainer__incomingMessage Font_16_150">
                <p>
                  Добрый день. Меня зовут Светлана, я агент по недвижимости
                  из компании Real Home. Предлагаю на выбор несколько вариантов{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="ChatContainer__message">
            <div className="ChatContainer__outgoing">
              <Image
                alt=""
                src="/images/avatar.jpg"
                width={40}
                height={40}
                className="ChatContainer__avatar"
              />
              <div>
                <div className="ChatContainer__outgoingMessage Font_16_150">
                  <p>Добрый день, спасибо, отличные варианты</p>
                  {/* <span className="Time Font_12_16 Color_text_grey">12:56</span> */}
                </div>
                <div className="ChatContainer__outgoingMessage Font_16_150">
                  <p>
                    В течение двух дней постараюсь ответить и задать вопросы
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MessageInput className="ChatContainer__messageInput" />
      </div>
    </StyledChatContainer>
  );
};

const StyledChatContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1225px;
  margin-left: 30px;
  background: #eef1f5;

  .ChatContainer {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: #eef1f5;
  }

  .ChatContainer__date {
    text-align: center;
  }

  .ChatContainer__avatar {
    border-radius: 50%;
  }

  .ChatContainer__messageContainer {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
  }

  .ChatContainer__message {
    display: flex;
    align-items: end;
  }

  .ChatContainer__incomingMessage,
  .ChatContainer__outgoingMessage {
    position: relative;
    padding: 10px 20px;
    background: #fff;
    max-width: 570px;
    border-radius: 10px 10px 10px 0;
    margin-left: 10px;
  }

  .Time {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }

  .ChatContainer__outgoing {
    margin-top: 10px;
    display: flex;
    align-items: end;
    .ChatContainer__outgoingMessage:not(:last-child) {
      margin-bottom: 4px;
      border-radius: 10px;
    }
  }

  .ChatContainer__outgoingMessage {
    background: #cfe2fc;
  }

  .ChatContainer__messageInput {
    margin-top: 20px;
    bottom: 0;
  }

  @media (max-width: 1024px) {
    margin-left: 0;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (max-width: 576px) {
    padding-left: 0;
    padding-right: 0;

    .ChatContainer__avatar {
      display: none;
    }

    .ChatContainer__incomingMessage,
    .ChatContainer__outgoingMessage {
      margin-left: 0;
    }

    .ChatContainer__messageContainer {
      padding-right: 10px;
      padding-left: 10px;
    }
  }
`;

export { ChatContainer };
