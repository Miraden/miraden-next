import { Button, MessageInput, Sticker } from '@/components/ui'
import { VerifiedIcon } from '@/icons'
import { StarIconFilled } from '@/icons/StarIconFilled'
import Image from 'next/image'
import styled from 'styled-components'
import cn from 'classnames'
import { useCallback, useState } from 'react'
import useUpdater from '@/hooks/useUpdater'
import { ArrowsIcon } from '@/icons/ArrowsIcon'
import { theme } from '../../../../styles/tokens'
import { useWindowSize, WindowSize } from '@/hooks/useWindowSize'

interface Props {
  className?: string
  onTouchStart?: any
  onTouchEnd?: any
  onStateChange?: () => void
  inMobileMode?: boolean
  messages: Chat.Message[]
  onSend?: (msg: string) => void
  myProfile?: Chat.UserProfile
  activeRoom: number
}

const mobile = theme.breakpoints.mobile.max
const tablet = theme.breakpoints.tablet.max

export enum MessageDirection {
  In = 'in',
  Out = 'out',
}

const ChatMessages = ({
  className,
  onTouchEnd,
  onTouchStart,
  onStateChange,
  inMobileMode,
  messages,
  onSend,
  myProfile,
  activeRoom,
}: Props) => {
  const [showOpenContacts, setShowContactsButton] = useState<boolean>(false)
  const updater = useUpdater()

  const onSendMessage = useCallback(
    (msg: string) => {
      if (onSend) onSend(msg)
      updater()
    },
    [onSend, updater]
  )

  useWindowSize((size: WindowSize) => {
    inMobileMode = size.width < tablet
  })

  return (
    <StyledChatContainer
      className={cn(className, 'ChatMessages')}
      onTouchEnd={onTouchEnd}
      onTouchStart={onTouchStart}
    >
      <div className="ChatMessages__header">
        <div className="ChatMessages__headerLeft">
          {inMobileMode && (
            <div
              className={'ChatMessages__stateChange'}
              onClick={e => {
                if (onStateChange) onStateChange()
              }}
            >
              <ArrowsIcon left />
            </div>
          )}
          {myProfile && RenderCompanionSection(myProfile)}
        </div>
        {showOpenContacts && (
          <div className="ChatMessages__headerRight">
            <Button compact>Открыть контакты</Button>
          </div>
        )}
      </div>

      <div className="ChatContainer">
        <div className="ChatMessages__inner">
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
                  className={cn('ChatContainerMessage Font_16_150', {
                    ChatContainer__incomingMessage:
                      msg.direction === MessageDirection.In,
                    ChatContainer__outgoingMessage:
                      msg.direction === MessageDirection.Out,
                  })}
                >
                  <div className="ChatContainer__message">{msg.message}</div>
                  <div className="ChatContainer__message_date_created Font_fields_description">
                    {formatDate(msg.createdAt)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <MessageInput
          onSubmit={onSendMessage}
          className="ChatContainer__messageInput"
        />
      </div>
    </StyledChatContainer>
  )
}

const RenderCompanionSection = (profile: Chat.UserProfile): JSX.Element => {
  return (
    <>
      <div className="ChatMessages__user">
        <Image
          alt=""
          src={'/u/users/' + profile.photo}
          width={52}
          height={52}
          className="ApplicationInfo__avatar"
        />
        <div className="Status">
          <div className="FullStatus">
            <p className="Font_20_120">
              {profile.name} {profile.surname}
            </p>
            <div className="Application__infoStatus">
              <VerifiedIcon className="ContactInfo__verifiedIcon" />
              {profile.isRolePro && (
                <Sticker theme="black" className="ContactInfo__sticker">
                  pro
                </Sticker>
              )}
              <div className="ContactInfo__rating">
                {profile.isPassportVerified && (
                  <StarIconFilled
                    width={14}
                    height={14}
                    className="ContactInfo__ratingIcon"
                  />
                )}
                <p className="Font_14_140">{profile.rating}</p>
              </div>
            </div>
          </div>
          <p className="Font_14_140 Font_fields_description"></p>
        </div>
      </div>
    </>
  )
}

function formatDate(date: string): string {
  const _date = new Date(date)
  const d = new Intl.DateTimeFormat('ru', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return d.format(_date)
}

const StyledChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background: #eef1f5;
  height: 100%;

  .ChatMessages__header {
    display: flex;
    justify-content: space-between;
    padding: 0 0 20px 0;
    border-bottom: 1px solid #d4ddee;
    flex-wrap: wrap;

    &Left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  .ChatMessages__stateChange {
    line-height: 1;
    padding: 10px;
    cursor: pointer;

    svg path {
      fill: #fff;
    }
  }

  .ChatMessages__user {
    display: flex;
    align-items: center;

    img {
      border-radius: 100%;
    }
  }

  .ChatMessages__inner {
    display: flex;
    flex-direction: column-reverse;
    flex-grow: 1;
    padding: 10px;
    justify-content: flex-start;
    height: calc(100vh - 268px);
    overflow: auto;
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

  .ChatContainerMessage {
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }

  .ChatContainer__message_date_created {
    color: ${({ theme }) => theme.colors.text.grey};
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
    align-items: center;
    gap: 5px;
  }

  .ContactInfo__rating {
    display: flex;
    align-items: center;
    gap: 5px;
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

  @media (max-width: ${tablet}px) {
    .ChatMessages__header {
      background: ${({ theme }) => theme.colors.background.black};
      color: #fff;
      gap: 20px;
      padding: 20px;
    }

    .ChatMessages__user {
      img {
        width: 40px;
        height: 40px;
      }
    }
  }

  @media (max-width: ${mobile}px) {
    padding-left: 0;
    padding-right: 0;

    .ChatMessages__header {
      flex-direction: column;
      padding: 10px;

      &Right {
        button {
          width: 100%;
        }
      }
    }

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

export { ChatMessages }
