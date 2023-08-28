import { ChatLeadTabs } from '@/infrastructure/Chats/ChatTabs'
import React, { useCallback, useEffect, useState } from 'react'
import { Button, Sticker } from '@/components/ui'
import { BackIcon20 } from '@/icons'
import cn from 'classnames'
import styled from 'styled-components'
import { SellerStates } from '@/modules/Leads/types/LeadSellerStates'
import ChatConnManager from '@/modules/Chats/ChatConnManager'
import { theme } from '../../../../styles/tokens'
import OpenedContacts from '@/modules/Leads/chats/OpenedContacts'
import ClosedContacts from '@/modules/Leads/chats/ClosedContacts'
import { useWindowSize, WindowSize } from '@/hooks/useWindowSize'

interface Props {
  className?: string
  lead?: Leads.LeadEntryType
  companions?: Chat.Companions
  onTabSelect?: (selected: ChatLeadTabs) => void
  socketManager: ChatConnManager
}

const tablet = theme.breakpoints.tablet.max
let inMobileMode: boolean = false

const LeadSidebarBuyer = (props: Props): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<ChatLeadTabs>(
    ChatLeadTabs.Contacts
  )
  const [isContactOpened, setIsContactOpened] = useState<boolean>(false)
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
  }, [])

  function onContactOpened(event: MessageEvent): void {
    const response = JSON.parse(event.data) as ApiResponseType
  }

  function onUsersOnlineStatus(event?: MessageEvent): void {
    const response = JSON.parse(event?.data) as ApiResponseType
    const payload = response.payload as any
    const userOnline = Number(payload['online'])
    const userOffline = Number(payload['offline'])

    if (props.companions?.myCompanion.id === userOnline) {
      setCompanionOnline(true)
    }

    if (props.companions?.myCompanion.id === userOffline) {
      setCompanionOnline(false)
    }
  }

  useEffect(() => {
    if (props.onTabSelect) props.onTabSelect(selectedTab)
    setIsContactOpened(
      props.companions?.seller_state === SellerStates.EXECUTANT
    )
    if (props.onTabSelect) props.onTabSelect(selectedTab)
    if (!inMobileMode && selectedTab === ChatLeadTabs.Chat) {
      setSelectedTab(ChatLeadTabs.Contacts)
    }
  }, [isContactOpened, props, props.companions?.seller_state, selectedTab])

  // Contact tab actions
  useEffect(() => {
    if (selectedTab !== ChatLeadTabs.Contacts) return
    const token = String(localStorage.getItem('token'))
    const id = Number(props.companions?.myCompanion.id)
    if (!isContactOpened) {
      props.socketManager.getPublicProfile(
        token,
        id,
        onGetCompanionPublicProfile
      )
    }

    if (isContactOpened) {
      props.socketManager.getFullProfile(token, id, onGetCompanionFullProfile)
    }
  }, [
    isContactOpened,
    onGetCompanionFullProfile,
    props.companions?.myCompanion.id,
    props.socketManager,
    selectedTab,
  ])

  props.socketManager.OnMessage(onUsersOnlineStatus)

  useWindowSize((size: WindowSize) => {
    inMobileMode = size.width < tablet
  })

  const onTabSelect = useCallback(
    (tab: ChatLeadTabs) => {
      setSelectedTab(tab)
      if (props.onTabSelect) props.onTabSelect(tab)
    },
    [props]
  )

  const onOpenContact = useCallback(
    (e: any) => {
      const token = String(localStorage.getItem('token'))
      const companionId = Number(props.companions?.myCompanion.id)
      const roomId = Number(props.companions?.roomid)
      props.socketManager.openContact(
        token,
        companionId,
        roomId,
        onContactOpened
      )
    },
    [
      props.companions?.myCompanion.id,
      props.companions?.roomid,
      props.socketManager,
    ]
  )

  return (
    <>
      <StyledTabs className={cn('ChatTabs', props.className)}>
        <div className="ChatTabs__head">
          <div className="ChatTabs__back">
            <Button
              secondary
              href={'/lead/' + props.lead?.id}
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
            <h2 className="Font_headline_h4">Заявка #{props.lead?.id}</h2>
            <div className="ChatTabs__titleText Font_body_base">
              {props.lead?.title}
            </div>
          </div>
          <div className="ChatTabs__back">
            {props.lead?.isTrue && <Sticker theme="black">true</Sticker>}
          </div>
        </div>
        <div className="ChatTabs__headTabs">
          <div className="ChatTabs__links">
            {inMobileMode && (
              <Button
                className={cn('', {
                  ChatTabs__headTabButton: selectedTab === ChatLeadTabs.Chat,
                })}
                onClick={() => onTabSelect(ChatLeadTabs.Chat)}
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
              onClick={() => onTabSelect(ChatLeadTabs.Contacts)}
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
              onClick={() => onTabSelect(ChatLeadTabs.Reviews)}
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
            {isContactOpened && isComponentReady && (
              <OpenedContacts
                profile={userFullProfile}
                onlineStatus={{
                  isOnline: isCompanionOnline,
                  lastOnlineDate: '4 часа назад',
                }}
              />
            )}
            {!isContactOpened && isComponentReady && (
              <ClosedContacts user={userPublicProfile}>
                <Button
                  onClick={onOpenContact}
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
