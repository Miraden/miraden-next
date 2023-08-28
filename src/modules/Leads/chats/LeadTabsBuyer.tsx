import { ChatLeadTabs } from '@/infrastructure/Chats/ChatTabs'
import React, { useCallback, useEffect, useState } from 'react'
import { Button, Sticker } from '@/components/ui'
import { BackIcon20 } from '@/icons'
import cn from 'classnames'
import styled from 'styled-components'
import { SellerStates } from '@/modules/Leads/types/LeadSellerStates'
import { theme } from '../../../../styles/tokens'
import OpenedContacts from '@/modules/Leads/chats/OpenedContacts'
import ClosedContacts from '@/modules/Leads/chats/ClosedContacts'
import { useAppContext } from '@/infrastructure/nextjs/useAppContext'
import { useChatContext } from '@/infrastructure/Chats/UseChatContext'

interface Props {
  className?: string
  companions?: Chat.Companions
  onTabSelect?: (selected: ChatLeadTabs) => void
}

const tablet = theme.breakpoints.tablet.max

const LeadSidebarBuyer = (props: Props): JSX.Element => {
  const appContext = useAppContext()
  const socketManager = appContext.chatConnManager
  const chatContext: Chat.LeadContext = useChatContext()

  const [selectedTab, setSelectedTab] = useState<ChatLeadTabs>(
    ChatLeadTabs.Contacts
  )
  const [userPublicProfile, setUserPublicProfile] =
    useState<User.PublicProfile>()
  const [userFullProfile, setUserFullProfile] = useState<User.FullProfile>()
  const [isComponentReady, setComponentReady] = useState<boolean>(false)
  const [isCompanionOnline, setCompanionOnline] = useState<boolean>(false)

  function onGetCompanionPublicProfile(event: MessageEvent): void {
    const response = JSON.parse(event.data) as ApiResponseType
    const profile = response.payload as User.PublicProfile
    setUserPublicProfile(profile)
    setComponentReady(true)
  }

  const onGetCompanionFullProfile = useCallback((event: MessageEvent) => {
    const response = JSON.parse(event.data) as ApiResponseType
    const profile = response.payload as User.FullProfile
    setUserFullProfile(profile)
    setComponentReady(true)
  }, [])

  function onContactOpened(event: MessageEvent): void {
    const response = JSON.parse(event.data) as ApiResponseType
    const profile = response.payload as User.FullProfile
    setComponentReady(true)
    chatContext.isContactOpened = true
    setUserFullProfile(profile)
  }

  function onUsersOnlineStatus(event?: MessageEvent): void {
    const response = JSON.parse(event?.data) as ApiResponseType
    const payload = response.payload as any
    const userOnline = Number(payload['online'])
    const userOffline = Number(payload['offline'])

    if (chatContext.companions?.myCompanion.id === userOnline) {
      setCompanionOnline(true)
    }

    if (chatContext.companions?.myCompanion.id === userOffline) {
      setCompanionOnline(false)
    }
  }

  useEffect(() => {
    if (
      !chatContext.inTabletSize &&
      chatContext.tab.current === ChatLeadTabs.Chat
    ) {
      chatContext.tab.current = ChatLeadTabs.Contacts
      setSelectedTab(ChatLeadTabs.Contacts)
    }
  }, [chatContext, chatContext.companions?.seller_state, props])

  // Contact tab actions
  useEffect(() => {
    if (selectedTab !== ChatLeadTabs.Contacts) return
    const token = String(localStorage.getItem('token'))
    const id = Number(chatContext.companions?.myCompanion.id)
    if (!chatContext.isContactOpened) {
      socketManager.getPublicProfile(token, id, onGetCompanionPublicProfile)
    }

    if (chatContext.isContactOpened) {
      socketManager.getFullProfile(token, id, onGetCompanionFullProfile)
    }
  }, [
    chatContext.companions?.myCompanion.id,
    chatContext.isContactOpened,
    chatContext.tab,
    onGetCompanionFullProfile,
    selectedTab,
    socketManager,
  ])

  const onTabSwitched = useCallback(
    (tab: ChatLeadTabs) => {
      chatContext.tab.callback(tab)
      chatContext.tab.current = tab
      setSelectedTab(tab)

      if (chatContext.tab.current === ChatLeadTabs.Contacts) {
        const token = String(localStorage.getItem('token'))
        const id = Number(chatContext.companions?.myCompanion.id)
        if (!chatContext.isContactOpened) {
          socketManager.getPublicProfile(token, id, onGetCompanionPublicProfile)
        }

        if (chatContext.isContactOpened) {
          socketManager.getFullProfile(token, id, onGetCompanionFullProfile)
        }
      }
    },
    [
      chatContext.companions?.myCompanion.id,
      chatContext.isContactOpened,
      chatContext.tab,
      onGetCompanionFullProfile,
      socketManager,
    ]
  )

  const tryOpenContact = useCallback(
    (e: any) => {
      const token = String(localStorage.getItem('token'))
      const companionId = Number(chatContext.companions?.myCompanion.id)
      const roomId = Number(chatContext.companions?.roomid)
      socketManager.openContact(token, companionId, roomId, onContactOpened)
    },
    [
      chatContext.companions?.myCompanion.id,
      chatContext.companions?.roomid,
      onContactOpened,
      socketManager,
    ]
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
                onClick={() => onTabSwitched(ChatLeadTabs.Chat)}
                active={selectedTab === ChatLeadTabs.Chat}
                tertiary
                compact
              >
                Чат
              </Button>
            )}
            <Button
              className={cn('', {
                ChatTabs__headTabButton: selectedTab === ChatLeadTabs.Contacts,
              })}
              onClick={() => onTabSwitched(ChatLeadTabs.Contacts)}
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
              onClick={() => onTabSwitched(ChatLeadTabs.Reviews)}
              active={selectedTab === ChatLeadTabs.Reviews}
              tertiary
              compact
            >
              Отзывы
            </Button>
          </div>
          <div className="ChatTabs__headTabsBar" />
        </div>
      </StyledTabs>

      <StyledTabContent>
        {selectedTab === ChatLeadTabs.Contacts && (
          <>
            {chatContext.isContactOpened && isComponentReady && (
              <OpenedContacts
                profile={userFullProfile}
                onlineStatus={{
                  isOnline: isCompanionOnline,
                  lastOnlineDate: '4 часа назад',
                }}
              />
            )}
            {!chatContext.isContactOpened && isComponentReady && (
              <ClosedContacts user={userPublicProfile}>
                <Button
                  onClick={tryOpenContact}
                  className={'Contacts__actionOpen'}
                >
                  Открыть контакты
                </Button>
                <div className="Contacts__actionMessage">
                  <p>
                    Открывая контакты, вы одновременно сможете видеть контактные
                    данные друг друга
                  </p>
                </div>
              </ClosedContacts>
            )}
          </>
        )}
      </StyledTabContent>
    </>
  )
}

const StyledTabs = styled.div`
  .ChatTabs {
  }

  .ChatRoomsLayout {
    display: flex;
    overflow: hidden;
    border-radius: 10px;
    height: 100%;
    position: relative;
  }

  .ChatTabs__head {
    display: flex;
    align-items: baseline;
  }

  .ChatTabs__titleText {
    color: ${({ theme }) => theme.colors.text.disabled};
  }

  .ChatTabs__title {
    flex-grow: 1;
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

  .Contacts__actionOpen {
    margin-bottom: 20px;
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

export default LeadSidebarBuyer
