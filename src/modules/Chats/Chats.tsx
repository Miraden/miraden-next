import { Button } from '@/components/ui'
import cn from 'classnames'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ApplicationsFooter } from '../Base/ApplicationsFooter'
import { AllChatsContainer } from './components/AllChatsContainer'
import { ChatContainer } from './components/ChatContainer'
import { ChatContainerMobile } from './components/ChatContainerMobile'
import { ChatSupport } from './components/ChatSupport'
import { ChatPerformers } from './components/ChatPerformers'
import { ChatRequests } from './components/ChatRequests'
import RoomsProvider from '@/infrastructure/Chats/RoomsProvider'
import ChatRoomsListLayout from '@/modules/Chats/ChatRoomsListLayout'

interface Props {
  className?: string
  isAppAuth: boolean
}

const roomsProvider: RoomsProvider = new RoomsProvider()

enum Tabs {
  All = 'all',
  Requests = 'requests',
  Executants = 'executants',
  Support = 'support',
}

const Chats = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState<Tabs>(Tabs.All)

  const handleSelect = useCallback((tab: Tabs) => {
    setSelectedTab(tab)
  }, [])

  const [openChat, setIsOpenChat] = useState(false)

  const handleToggleChat = useCallback(() => {
    setIsOpenChat(!openChat)
  }, [openChat])

  const [leadsList, setLeadsList] = useState<Forms.DropDownOption[]>([])
  useEffect(() => {
    if (selectedTab === Tabs.All) {
      roomsProvider.fetchAll().then(res => {
        let options: Forms.DropDownOption[] = []
        res.map((i, id) => {
          options.push({ label: '#' + i.id + ' - ' + i.title, value: i.id })
        })
        setLeadsList(options)
      })
    }

    if (selectedTab === Tabs.Requests) {
      roomsProvider.fetchRequests().then(res => {
        let options: Forms.DropDownOption[] = []
        res.map((i, id) => {
          options.push({ label: '#' + i.id + ' - ' + i.title, value: i.id })
        })
        setLeadsList(options)
      })
    }

    if (selectedTab === Tabs.Executants) {
      roomsProvider.fetchExecutants().then(res => {
        let options: Forms.DropDownOption[] = []
        res.map((i, id) => {
          options.push({ label: '#' + i.id + ' - ' + i.title, value: i.id })
        })
        setLeadsList(options)
      })
    }
  }, [selectedTab])

  return (
    <StyledApplicationsChatsAll className="ContainerFull">
      {openChat ? (
        <ChatContainerMobile onClick={handleToggleChat} />
      ) : (
        <div className="ApplicationsChatsAll">
          <div className="AppInfo ChatList">
            <div className="ApplicationInfo__fullContainer">
              <h2 className="Font_24_120">Чаты</h2>
              <div className="ChatInfo__headTabs">
                <Button
                  className={cn('', {
                    ChatInfo__headTabButton: selectedTab === Tabs.All,
                  })}
                  onClick={() => handleSelect(Tabs.All)}
                  active={selectedTab === Tabs.All}
                  tertiary
                >
                  Все
                </Button>
                <Button
                  className={cn('', {
                    ChatInfo__headTabButton: selectedTab === Tabs.Requests,
                  })}
                  onClick={() => handleSelect(Tabs.Requests)}
                  active={selectedTab === Tabs.Requests}
                  tertiary
                >
                  Отклики
                </Button>
                <Button
                  className={cn('', {
                    ChatInfo__headTabButton: selectedTab === Tabs.Executants,
                  })}
                  onClick={() => handleSelect(Tabs.Executants)}
                  active={selectedTab === Tabs.Executants}
                  tertiary
                >
                  Исполнители
                </Button>
                <Button
                  className={cn('', {
                    ChatInfo__headTabButton: selectedTab === Tabs.Support,
                  })}
                  onClick={() => handleSelect(Tabs.Support)}
                  active={selectedTab === Tabs.Support}
                  tertiary
                >
                  Поддержка Miraden
                </Button>
              </div>
              <div className="ChatInfo__headTabsBar" />
            </div>

            {selectedTab === Tabs.All && (
              <ChatRoomsListLayout>
                <AllChatsContainer
                  leadsList={leadsList}
                  className="ContactInfo"
                />
              </ChatRoomsListLayout>
            )}

            {selectedTab === Tabs.Executants && (
              <ChatRoomsListLayout>
                <ChatPerformers leadsList={leadsList} className="ContactInfo" />
              </ChatRoomsListLayout>
            )}
            {selectedTab === Tabs.Requests && (
              <ChatRoomsListLayout>
                <ChatRequests leadsList={leadsList} className="ContactInfo" />
              </ChatRoomsListLayout>
            )}
            {selectedTab === Tabs.Support && (
              <ChatRoomsListLayout>
                <ChatSupport
                  leadsList={leadsList}
                  className="ContactInfo"
                />
              </ChatRoomsListLayout>
            )}
          </div>
          <ChatContainer className="Chat" />
        </div>
      )}

      {selectedTab === Tabs.Executants && <ApplicationsFooter />}
      {selectedTab === Tabs.Requests && <ApplicationsFooter />}
      {selectedTab === Tabs.Support && <ApplicationsFooter />}
    </StyledApplicationsChatsAll>
  )
}

const StyledApplicationsChatsAll = styled.section`
  margin-top: 35px;
  height: calc(100vh - 100px);
  padding-bottom: 20px;

  .ChatInfo__headTabs {
    padding: 20px 0 0 0;
  }

  .ChatTabButton {
    display: none;
  }

  .ChatInfo__headTabsBar_whiteSpace {
    width: 100%;
    height: 10px;
    border-radius: 0 0 10px 10px;
    background: #fff;
  }

  .SingleChatInfoideBar {
    position: absolute;
    right: -420px;
    top: 94px;
  }

  .ChatInfo__headContainer {
    margin-top: 20px;
    padding: 20px 20px 0 20px;
    background: #fff;
    border-radius: 10px 10px 0 0;
  }

  .ChatInfo__head {
    display: flex;
    align-items: baseline;

    h1 {
      margin-left: 10px;
    }
  }

  .ChatInfo__headTabs {
    display: flex;

    button {
      margin-right: 30px;
      color: #7786a5;
      background: transparent;

      padding: 0;

      :hover {
        color: #fff !important;
        background: transparent !important;
      }
    }

    button.active {
      color: #fff !important;
      background: transparent;
    }
  }

  .ChatInfo__headTabButton {
    position: relative;

    ::before {
      position: absolute;
      top: 32px;
      left: 0;
      content: '';
      background: #ffffff;
      width: 100%;
      height: 4px;
      border-radius: 10px;
    }
  }

  .ChatInfo__headTabsBar {
    margin-top: 12px;
    width: 100%;
    background: #3b4a69;
    height: 4px;
    border-radius: 10px;
  }

  .ChatMobile {
    display: none;
  }

  .ApplicationsChatsAll {
    display: flex;
    height: 100%;
  }

  .ContactInfo {
    flex-grow: 1;
    overflow: hidden;
  }

  .ContactInfoMobile {
    display: none;
  }

  .AppInfo {
    display: flex;
    flex-direction: column;
    max-width: 625px;
    width: 100%;
  }

  .ApplicationInfo {
    background: #2a344a;
    color: #fff;
    padding: 20px 20px 0 20px;
    border-radius: 10px 10px 0 0;
  }

  .ApplicationsChatsAll__headTabs {
    padding: 20px 0 0 0;

    overflow: auto;

    button {
      white-space: nowrap;
    }
  }

  .ChatTabButton {
    display: none;
  }

  .ApplicationsChatsAll__headTabsBar_whiteSpace {
    width: 100%;
    height: 10px;
    border-radius: 10px;
    background: #fff;
  }

  .Application__headContainer {
    margin-top: 20px;
    padding: 20px 20px 0 20px;
    background: #fff;
    border-radius: 10px;
  }

  .Application__head {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 10px;
    }
  }

  .ApplicationsChatsAll__headTabs {
    display: flex;

    button {
      margin-right: 30px;
      color: #7786a5;

      padding: 0;

      :hover {
        color: #fff !important;
        background: transparent !important;
      }
    }

    button.active {
      color: #fff !important;
    }
  }

  .ApplicationsChatsAll__headTabButton {
    position: relative;

    ::before {
      position: absolute;
      top: 35px;
      left: 0;
      content: '';
      background: #ffffff;
      width: 100%;
      height: 4px;
      border-radius: 10px;
    }
  }

  .ApplicationsChatsAll__headTabsBar {
    margin-top: 15px;
    width: 100%;
    background: #3b4a69;
    height: 4px;
    border-radius: 10px;
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
    margin-right: 5px;
  }

  .ContactInfo__rating {
    align-items: center;

    p {
      margin-left: 5px;
    }
  }

  .ChatButton {
    padding: 10px 24px;
  }

  .ContactInfo__ratingIcon {
    path {
      fill: #7786a5;
    }
  }

  .ChatButtonMobile {
    display: none;
  }

  .Chat {
    /* padding-bottom: 20px; */
  }

  @media (max-width: 1024px) {
    margin-top: -18px;
    height: 100vh;

    .ContactInfo {
      display: none;
    }

    .ContactInfoMobile {
      display: block;
    }

    .ChatTabButton {
      display: block;
    }

    .ApplicationsChatsAll {
      flex-direction: column;
    }

    &.ContainerFull {
      padding: 0;
    }

    .Chat {
      display: none;
    }

    .ChatMobile {
      display: flex;
    }

    .AppInfo {
      width: 100%;
      max-width: unset;
      min-width: unset;
    }
  }

  .ApplicationInfo__headLayout {
    display: none;
    background: #2a344a;
  }

  .ApplicationInfo__fullContainer {
    background: #2a344a;
    color: #fff;
    padding: 20px 20px 10px 20px;
    border-radius: 10px;
    width: 100%;
  }

  .Application__infoChat {
    display: none;
    align-items: center;
    justify-content: space-between;
    background: #2a344a;
    color: #fff;
    padding: 10px 20px 20px 20px;
    border-bottom: 1px solid #3a465d;
  }

  .Application__infoChatContainer {
    display: flex;
  }

  .ApplicationInfo__avatar {
    border-radius: 50%;
  }

  .Status {
    margin-left: 12px;
  }

  .FullStatus {
    display: flex;
    align-items: center;
  }

  .Application__infoStatus {
    display: flex;
    margin-left: 8px;
  }

  .ContactInfo__rating {
    display: flex;
  }

  .ApplicationInfo {
    display: flex;
  }

  .ApplicationInfo__backButton {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #3a465d;
  }

  .ApplicationInfo__backButtonChat {
    border-radius: 50%;
    margin-right: 4px;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ArrowIcon {
    width: 20px;
    height: 20px;
    transform: rotate(90deg);

    path {
      fill: #fff;
    }
  }

  .ApplicationInfo__container {
    width: 100%;
    margin-left: 15px;
  }

  .ApplicationInfo__headContent {
    display: flex;
    justify-content: space-between;
  }

  .ApplicationInfo__headDescription {
    margin-top: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 1024px) {
    .ApplicationInfo__fullContainer {
      border-radius: 0 0 10px 10px;
    }

    .Application__infoChat {
      display: flex;
      padding-left: 12px;
    }

    .ApplicationsChatsAll__headTabs {
      padding-top: 20px;
    }

    .ApplicationInfo {
      border-radius: 0;
      padding-bottom: 10px;
      border-bottom: 2px solid #3a465d;
    }

    .ApplicationInfo__headLayout {
      display: block;
      height: 20px;
      border-bottom: 1px solid #3a465d;
    }
  }

  @media (max-width: 576px) {
    height: calc(100vh - 22px);

    .ChatInfo__headTabs {
      padding-top: 16px;
    }

    .Application__infoChat {
      padding-right: 8px;
    }

    .ApplicationInfo__fullContainer {
      padding: 20px 0 10px 20px;
    }

    .ChatButton {
      display: none;
    }

    .ChatButtonMobile {
      display: flex;
      align-self: flex-start;
      padding: 2px;
      border-radius: 50%;
      background: transparent;

      :hover {
        background: #3a465d;
      }

      svg {
        path {
          fill: #fff;
        }
      }
    }

    .ChatInfo__headTabsBar {
      margin-top: 8px;
    }

    .ChatInfo__headTabButton {
      ::before {
        top: 28px;
      }
    }
  }

  @media (max-width: 440px) {
    .FullStatus {
      p {
        max-width: 110px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`

export { Chats }
