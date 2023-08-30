import styled from 'styled-components'
import { Button, Sticker } from '@/components/ui'
import { BackIcon20 } from '@/icons'
import React, { useCallback, useEffect, useState } from 'react'
import cn from 'classnames'
import { ChatLeadTabs } from '@/infrastructure/Chats/ChatTabs'
import LeadInfo from '@/modules/Leads/chats/LeadInfo'
import { theme } from '../../../../styles/tokens'
import OpenedContacts from '@/modules/Leads/chats/OpenedContacts'
import ClosedContacts from '@/modules/Leads/chats/ClosedContacts'
import { useAppContext } from '@/infrastructure/nextjs/useAppContext'
import { ChatCtx, useChatContext } from '@/infrastructure/Chats/UseChatContext'
import { ChatEvents } from '@/modules/Chats/ChatEvents'

interface Props {
  className?: string
  onTabChange?: (state: ChatLeadTabs) => void
  leadOwner?: User.PublicProfile
}

const tablet = theme.breakpoints.tablet.max

const LeadTabsSeller = (props: Props): JSX.Element => {
  const appContext = useAppContext()
  const socketManager = appContext.chatConnManager
  const chatContext: Chat.LeadContext = useChatContext()

  const [selectedTab, setSelectedTab] = useState<ChatLeadTabs>(
    ChatLeadTabs.Lead
  )
  const [userPublicProfile, setUserPublicProfile] =
    useState<User.PublicProfile>()
  const [userFullProfile, setUserFullProfile] = useState<User.FullProfile>()
  const [isContactOpened, setIsContactOpened] = useState<boolean>(false)
  const [userOnlineStatus, setUserOnlineStatus] = useState<User.OnlineStatus>({
    isOnline: false,
  })

  const onGetCompanionPublicProfile = useCallback((event: MessageEvent) => {
    const response = JSON.parse(event.data) as ApiResponseType
    const user = response.payload as User.PublicProfile
    setUserPublicProfile(user)
  }, [])

  const onGetCompanionFullProfile = useCallback((event: MessageEvent) => {
    const response = JSON.parse(event.data) as ApiResponseType
    const profile = response.payload as User.FullProfile
    setUserFullProfile(profile)
  }, [])

  function onUsersOnlineStatus(event: MessageEvent): void {
    const response = JSON.parse(event?.data) as ApiResponseType
    const payload = response.payload as any
    const userOnline = Number(payload['online'])
    const userOffline = Number(payload['offline'])
    const lastOnlineDate = String(payload['lastOnlineDate'])

    if (chatContext.companions?.myCompanion.id === userOnline) {
      setUserOnlineStatus({ isOnline: true })
    }

    if (chatContext.companions?.myCompanion.id === userOffline) {
      setUserOnlineStatus({ isOnline: false, lastOnlineDate: lastOnlineDate })
    }
  }

  function onUserOnlineStatus(event: MessageEvent): void {
    const response = JSON.parse(event?.data) as ApiResponseType
    const payload = response.payload as User.OnlineStatus

    setUserOnlineStatus(payload)
  }

  function onGetCompanions(event: MessageEvent): void {
    const response = JSON.parse(event.data) as ApiResponseType
    const companions = response.payload as Chat.Companions
    setIsContactOpened(ChatCtx.isContactOpened(companions))

    const token = String(localStorage.getItem('token'))
    const userId = companions.myCompanion.id
    socketManager.getUserOnlineStatus(token, userId, onUserOnlineStatus)
  }

  const handleSelect = useCallback(
    (tab: ChatLeadTabs) => {
      setSelectedTab(tab)
      chatContext.tab.callback(tab)
      chatContext.tab.current = tab
    },
    [chatContext]
  )

  useEffect(() => {
    if (
      !chatContext.inTabletSize &&
      chatContext.tab.current === ChatLeadTabs.Chat
    ) {
      setSelectedTab(ChatLeadTabs.Lead)
      chatContext.tab.current = ChatLeadTabs.Lead
    }
    if (props.leadOwner) setUserPublicProfile(props.leadOwner)
  }, [
    chatContext.companions?.seller_state,
    chatContext.inTabletSize,
    chatContext.tab,
    props,
    selectedTab,
  ])

  useEffect(() => {
    chatContext.tab.callback(selectedTab)
  }, [chatContext.tab, selectedTab])

  // Contact tab actions
  useEffect(() => {
    if (chatContext.tab.current !== ChatLeadTabs.Contacts) return
    const token = String(localStorage.getItem('token'))
    const id = Number(chatContext.companions?.myCompanion.id)
    const roomId = Number(chatContext.companions?.roomid)
    if (!isContactOpened) {
      socketManager.getPublicProfile(token, id, onGetCompanionPublicProfile)
    }
    if (isContactOpened) {
      socketManager.getFullProfile(token, id, roomId, onGetCompanionFullProfile)
    }
  }, [
    chatContext.companions?.myCompanion.id,
    chatContext.tab,
    isContactOpened,
    onGetCompanionFullProfile,
    onGetCompanionPublicProfile,
    selectedTab,
    socketManager,
  ])

  useEffect(() => {
    const token = String(localStorage.getItem('token'))
    const leadId = Number(chatContext.lead.id)
    socketManager.getCompanionsByLead(token, leadId, onGetCompanions)
  }, [chatContext.lead.id, socketManager])

  socketManager.subscribe(
    (event: MessageEvent) => onUsersOnlineStatus(event),
    [ChatEvents.onRoomUserUpdatedStatus]
  )

  return (
    <>
      <StyledTabs className={cn('ChatTabs', props.className)}>
        <div className="ChatTabs__head">
          <div className="ChatTabs__back">
            <Button
              secondary
              href={'/lead/' + chatContext.lead.id}
              className="Menu__header_backButton"
            >
              <BackIcon20
                width={20}
                height={20}
                className="Menu__header_backArrow"
              />
            </Button>
          </div>
          <div className="ChatTabs__title">
            <h2 className="Font_headline_h4">Заявка #{chatContext.lead.id}</h2>
            <div className="ChatTabs__titleText Font_body_base">
              {chatContext.lead.title}
            </div>
          </div>
          <div className="ChatTabs__back">
            {chatContext.lead.isTrue && <Sticker theme="black">true</Sticker>}
          </div>
        </div>
        <div className="ChatTabs__headTabs">
          <div className="ChatTabs__links">
            {chatContext.inTabletSize && (
              <Button
                className={cn('', {
                  ChatTabs__headTabButton: selectedTab === ChatLeadTabs.Chat,
                })}
                onClick={() => handleSelect(ChatLeadTabs.Chat)}
                active={selectedTab === ChatLeadTabs.Chat}
                tertiary
                compact
              >
                Чат
              </Button>
            )}
            <Button
              className={cn('', {
                ChatTabs__headTabButton: selectedTab === ChatLeadTabs.Lead,
              })}
              onClick={() => handleSelect(ChatLeadTabs.Lead)}
              active={selectedTab === ChatLeadTabs.Lead}
              tertiary
              compact
            >
              Заявка
            </Button>
            <Button
              className={cn('', {
                ChatTabs__headTabButton: selectedTab === ChatLeadTabs.Contacts,
              })}
              onClick={() => handleSelect(ChatLeadTabs.Contacts)}
              active={selectedTab === ChatLeadTabs.Contacts}
              tertiary
              compact
            >
              Контакты
            </Button>
            <Button
              className={cn('', {
                ChatTabs__headTabButton: selectedTab === ChatLeadTabs.Reviews,
              })}
              onClick={() => handleSelect(ChatLeadTabs.Reviews)}
              active={selectedTab === ChatLeadTabs.Reviews}
              tertiary
              compact
            >
              Отзывы
            </Button>
            <Button
              className={cn('', {
                ChatTabs__headTabButton: selectedTab === ChatLeadTabs.Info,
              })}
              onClick={() => handleSelect(ChatLeadTabs.Info)}
              active={selectedTab === ChatLeadTabs.Info}
              tertiary
              compact
            >
              Информация
            </Button>
          </div>
          <div className="ChatTabs__headTabsBar" />
        </div>
      </StyledTabs>

      {selectedTab === ChatLeadTabs.Lead && (
        <StyledTabContent className={'ChatTabContent'}>
          <LeadInfo
            lead={chatContext.lead}
            owner={userPublicProfile}
            onlineStatus={userOnlineStatus}
          />
        </StyledTabContent>
      )}

      {selectedTab === ChatLeadTabs.Contacts && (
        <StyledTabContent>
          {isContactOpened && (
            <OpenedContacts
              profile={userFullProfile}
              onlineStatus={userOnlineStatus}
            />
          )}
          {!isContactOpened && (
            <ClosedContacts user={userPublicProfile}>
              <div className="Contacts__actionMessage">
                <p>
                  Сделайте предложение — это бесплатно. Если пользователь решит
                  обменяться контактами, тогда с вас будет списано:
                </p>
              </div>
            </ClosedContacts>
          )}
        </StyledTabContent>
      )}
    </>
  )
}

const StyledTabs = styled.aside`
  .ChatTabs__head {
    display: flex;
    align-items: baseline;
  }

  .ChatTabs__title {
    flex-grow: 1;
  }

  .ChatTabs__titleText {
    color: ${({ theme }) => theme.colors.text.disabled};
  }

  .Menu__header {
    display: flex;
    align-items: baseline;

    &_backButton {
      padding: 4px;
      border-radius: 50%;
      flex-shrink: 0;
      margin-right: 10px;
      background: transparent;
      height: 28px;
      width: 28px;
    }
  }
`

const StyledTabContent = styled.div`
  background: #fff;
  display: flex;
  overflow: hidden;
  border-radius: 10px;
  height: 100%;
  position: relative;
  flex-direction: column;

  .LeadOwner {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    padding: 30px;
    text-align: center;

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

  .Contacts__action {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    color: ${({ theme }) => theme.colors.text.grey};
  }

  .Contacts__actionMessage {
    width: 80%;
  }

  @media (max-width: ${tablet}px) {
    .Contacts__actionMessage {
      width: 100%;
    }
  }
`

export default LeadTabsSeller
