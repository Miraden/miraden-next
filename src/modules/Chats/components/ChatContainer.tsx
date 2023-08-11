import { Button, MessageInput, Sticker } from '@/components/ui'
import { VerifiedIcon } from '@/icons'
import { StarIconFilled } from '@/icons/StarIconFilled'
import Image from 'next/image'
import styled from 'styled-components'
import cn from 'classnames'
import { useCallback, useEffect, useState } from 'react'
import useUpdater from '@/hooks/useUpdater'

interface Props {
  className?: string
  onTouchStart?: any
  onTouchEnd?: any
}

enum MessageDirection {
  In = 'in',
  Out = 'out',
}

let messages: Chat.Message[] = [
  {
    owner: {
      avatar: '/images/avatar1.png',
    },
    createdAt: new Date().toISOString(),
    isRead: false,
    direction: MessageDirection.Out,
    message:
      'Добрый день. Меня зовут Светлана, я агент по недвижимости из компании Real Home. Предлагаю на выбор несколько вариантов',
  },
]

const ChatContainer = ({ className, onTouchEnd, onTouchStart }: Props) => {
  const updater = useUpdater()

  const onNewMessage = useCallback(
    (msg: string) => {
      if (msg.length === 0) return
      messages.push({
        owner: { avatar: '/images/avatar1.png' },
        direction: MessageDirection.In,
        message: msg,
        createdAt: new Date().toISOString(),
        isRead: false,
      })
      updater()
    },
    [messages, updater]
  )

  return (
    <StyledChatContainer
      className={className}
      onTouchEnd={onTouchEnd}
      onTouchStart={onTouchStart}
    >
      <div className="Chat__all">
        <div className="Chat__allContainer">
          <Image
            alt=""
            src="/images/avatar1.png"
            width={52}
            height={52}
            className="ApplicationInfo__avatar"
          />
          <div className="Status">
            <div className="FullStatus">
              <p className="Font_20_120">Светлана Гридасова</p>
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
            <p className="Font_14_140 Color_blue_primary">Агент — RealEstate</p>
          </div>
        </div>

        <Button compact>Открыть контакты</Button>
      </div>

      <div className="ChatContainer">
        <p className="ChatContainer__date Font_14_140 Color_text_grey">
          22 марта
        </p>
        <div className="ChatContainer__messageContainer">
          {messages.map((msg, id) => (
            <div className="ChatContainer__message" key={id}>
              <Image
                alt=""
                src={msg.owner.avatar}
                width={40}
                height={40}
                className="ChatContainer__avatar"
              />
              <div
                className={cn('Font_16_150', {
                  ChatContainer__incomingMessage:
                    msg.direction === MessageDirection.In,
                  ChatContainer__outgoingMessage:
                    msg.direction === MessageDirection.Out,
                })}
              >
                {msg.message}
              </div>
            </div>
          ))}
        </div>

        <MessageInput
          onSubmit={onNewMessage}
          className="ChatContainer__messageInput"
        />
      </div>
    </StyledChatContainer>
  )
}

const StyledChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: #eef1f5;

  .Chat__all {
    display: flex;
    justify-content: space-between;

    padding-bottom: 20px;
    border-bottom: 1px solid #d4ddee;
  }

  .Chat__allContainer {
    display: flex;
    align-items: center;
  }

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
    gap: 10px;
  }

  .ChatContainer__message {
    display: flex;
    align-items: end;
  }

  .ChatContainer__incomingMessage,
  .ChatContainer__outgoingMessage {
    padding: 10px 20px;
    background: #fff;
    max-width: 570px;
    border-radius: 10px 10px 10px 0;
    margin-left: 10px;
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

  @media (max-width: 1200px) {
    .Chat__all {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      button {
        margin-top: 24px;
      }
    }
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
      padding-right: 15px;
      padding-left: 15px;
    }
  }
`

export { ChatContainer }
