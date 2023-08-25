import { ChatLeadTabs } from '@/infrastructure/Chats/ChatTabs'
import ChatLayout, { ViewStates } from '@/modules/Chats/ChatLayout'
import { NextRouter, useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { theme } from '../../../../../styles/tokens'
import ChatConnManager from '@/modules/Chats/ChatConnManager'
import useAuth from '@/hooks/useAuth'
import Head from 'next/head'
import { Header } from '@/modules/Base/Header/Header'
import { Preloader } from '@/components/ui/Preloader'
import Modal from '@/components/ui/Modal'
import AuthFormLayout from '@/modules/Security/AuthFormLayout'
import { Login } from '@/modules/Customer'
import {
  ChatMessages,
  MessageDirection,
} from '@/modules/Chats/components/ChatMessages'
import styled from 'styled-components'
import { Security } from '@/infrastructure/Security/JWT/JWTManager'
import LeadSidebarBuyer from '@/modules/Leads/chats/LeadTabsBuyer'
import LeadSidebarSeller from '@/modules/Leads/chats/LeadTabsSeller'
import { useWindowSize, WindowSize } from '@/hooks/useWindowSize'
import cn from 'classnames'
import { ChatEvents } from '@/modules/Chats/ChatEvents'

const tablet = theme.breakpoints.tablet.max
let isSocketReady = false
let inTabletSize = false

const socketManager = new ChatConnManager()

const LeadChat = (): JSX.Element => {
  const router: NextRouter = useRouter()

  const [isUserAuth, setUserAuth] = useState<boolean>(false)
  const [userReady, setUserReady] = useState<boolean>(false)
  const [isRouterReady, setIsRouterReady] = useState<boolean>(false)
  const [viewState, setViewState] = useState<ViewStates>(ViewStates.List)
  const [myProfile, setMyProfile] = useState<Chat.UserProfile>()
  const [messages, setMessages] = useState<Chat.Message[]>([])
  const [activeRoom, setActiveRoom] = useState<number>(0)
  const [leadData, setLeadData] = useState<Leads.LeadEntryType>()
  const [iamIsOwner, setIamIsOwner] = useState<boolean>(false)
  const [companions, setCompanions] = useState<Chat.Companions>()
  const [currentTab, setCurrentTab] = useState<ChatLeadTabs>(ChatLeadTabs.Lead)
  const [showChat, setShowChat] = useState<boolean>(false)
  const [leadOwnerProfile, setLeadOwnerProfile] = useState<User.PublicProfile>()
  const [isComponentReady, setComponentReady] = useState<boolean>(false)

  useAuth({
    onSuccess: (): void => {
      setUserAuth(true)
    },

    onFailure: (): void => {
      setUserAuth(false)
    },

    onResponse: (): void => {
      setUserReady(true)
    },
  })

  useWindowSize((size: WindowSize) => {
    inTabletSize = size.width <= tablet
  })

  useEffect(() => {
    setIsRouterReady(router.isReady)
    if (!router.isReady) return
    if (!isUserAuth && isSocketReady) return
    const url: string | undefined = process.env.NEXT_PUBLIC_CHAT_URL
    socketManager.create(url)
    isSocketReady = true
  }, [isUserAuth, router.isReady])

  socketManager.OnOpen(() => {
    const query = router.query
    const leadId: number = Number(query['id'])
    const token = String(localStorage.getItem('token'))
    if (currentTab === ChatLeadTabs.Lead)
      socketManager.getLead(token, leadId, onGetLead)
  })

  function onPublicProfile(event: MessageEvent): void {
    const response = JSON.parse(event.data) as ApiResponseType
    const profile = response.payload as User.PublicProfile
    setLeadOwnerProfile(profile)
  }

  function onGetLead(event: MessageEvent): void {
    const response = JSON.parse(event.data) as ApiResponseType
    const lead = response.payload as Leads.LeadEntryType
    setLeadData(lead)
    const token = String(localStorage.getItem('token'))
    socketManager.getPublicProfile(token, lead.owner, onPublicProfile)
    socketManager.getCompanionsByLead(token, lead.id, onGetCompanions)
  }

  function onRoomHistory(event: MessageEvent): void {
    const response = JSON.parse(event.data) as ApiResponseType
    const payload = response.payload as Chat.MessageSocketResponse[]
    const token = String(localStorage.getItem('token'))
    const iam = Security.parseJWT(token)
    let _messages: Chat.Message[] = []
    payload.map((msg: Chat.MessageSocketResponse) => {
      _messages.push({
        owner: {
          avatar: '/u/users/' + msg.owner_photo,
        },
        message: msg.message_text,
        direction:
          msg.owner_id === iam.id ? MessageDirection.Out : MessageDirection.In,
        createdAt: msg.message_created_date,
        isRead: msg.message_is_guest_reading,
        roomId: msg.roomId,
      })
    })
    setMessages(_messages)
  }

  function onRoomJoined(event: MessageEvent): void {
    const response = JSON.parse(event.data) as ApiResponseType
    const token = String(localStorage.getItem('token'))
    const room = response.payload as Chat.Room
    socketManager.queryHistory(token, room.roomId, onRoomHistory)
    setComponentReady(true)
  }

  function onGetCompanions(event: MessageEvent): void {
    const response = JSON.parse(event.data) as ApiResponseType
    const token = String(localStorage.getItem('token'))
    const iam = Security.parseJWT(token)
    const companions = response.payload as Chat.Companions
    setCompanions(companions)
    if (iam.id === companions.companions.buyer.id) {
      setIamIsOwner(true)
    }
    socketManager.joinToRoom(Number(companions.roomid), token, onRoomJoined)
  }

  socketManager.subscribe(
    (event: MessageEvent) => {
      const response = JSON.parse(event.data) as ApiResponseType
      const payload = response.payload as Chat.MessageSocketResponse
      const token = String(localStorage.getItem('token'))
      const iam = Security.parseJWT(token)
      let _messages: Chat.Message[] = messages
      _messages.push({
        owner: {
          avatar: '/u/users/' + payload.owner_photo,
        },
        message: payload.message_text,
        direction:
          payload.owner_id === iam.id
            ? MessageDirection.Out
            : MessageDirection.In,
        createdAt: payload.message_created_date,
        isRead: payload.message_is_guest_reading,
        roomId: payload.roomId,
      })
      setMessages(_messages)
    },
    [ChatEvents.onNewMessage]
  )

  const onStateChanged = useCallback(() => {
    setViewState(ViewStates.List)
  }, [])

  const onTabChanged = useCallback((tab: ChatLeadTabs) => {
    setCurrentTab(tab)

    if (inTabletSize) {
      if (tab === ChatLeadTabs.Chat) {
        setShowChat(true)
      }

      if (tab !== ChatLeadTabs.Chat) {
        setShowChat(false)
      }
    }

    if (!inTabletSize) {
      setShowChat(true)
    }
  }, [])

  const onSendMessage = useCallback((msg: string) => {
    socketManager.sendMessage(msg)
  }, [])

  return (
    <>
      <Head>
        <title>Miraden - Чат</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <StyledMainContainer>
        <Header isAuthorized={isUserAuth} isReady={userReady} />
        {!userReady && !isUserAuth && <Preloader />}
        {!isUserAuth && userReady && (
          <Modal>
            <AuthFormLayout inModal={true}>
              <Login
                onSuccess={(e: any) => {
                  setUserAuth(true)
                }}
              />
            </AuthFormLayout>
          </Modal>
        )}

        {isUserAuth && userReady && (
          <StyledChatPage
            className={cn('ContainerFull', { ChatInSidebar: showChat })}
          >
            <ChatLayout>
              <div className="ChatSidebar ChatSection">
                {iamIsOwner && isComponentReady && (
                  <LeadSidebarBuyer
                    className={'SidebarBuyer'}
                    socketManager={socketManager}
                    lead={leadData}
                    companions={companions}
                    onTabSelect={onTabChanged}
                  />
                )}
                {!iamIsOwner && leadData && isComponentReady && (
                  <LeadSidebarSeller
                    className={'SidebarSeller'}
                    lead={leadData}
                    socketManager={socketManager}
                    companions={companions}
                    onTabChange={onTabChanged}
                    leadOwner={leadOwnerProfile}
                  />
                )}
              </div>
              {showChat && (
                <div className={'ChatMessages ChatSection'}>
                  <ChatMessages
                    myProfile={myProfile}
                    messages={messages}
                    onStateChange={onStateChanged}
                    onSend={onSendMessage}
                    activeRoom={activeRoom}
                  />
                </div>
              )}
            </ChatLayout>
          </StyledChatPage>
        )}
      </StyledMainContainer>
    </>
  )
}

const StyledMainContainer = styled.main`
  @media (max-width: ${tablet}px) {
    .Header__main {
      display: none;
    }
  }
`

const StyledChatPage = styled.div`
  padding: 20px;
  height: 100%;

  &.ChatInSidebar .ChatSidebar {
    height: auto;
  }

  @media (max-width: ${tablet}px) {
    padding: 0;

    .ChatTabs {
      padding-left: 0;
      padding-right: 0;

      &__head {
        padding-bottom: 20px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.background.grey};
        padding-left: 20px;
        padding-right: 20px;
      }

      &__headTabs {
        padding-left: 20px;
        padding-right: 20px;
      }
    }

    .ListView .ChatMessages {
      display: flex;
    }

    .ChatMessages__header {
      display: none;
    }
  }
`
export default LeadChat
