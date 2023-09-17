import { ChatLeadTabs } from '@/infrastructure/Chats/ChatTabs'
import ChatLayout, { ViewStates } from '@/modules/Chats/ChatLayout'
import { NextRouter, useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { theme } from '../../../../../styles/tokens'
import useAuth from '@/hooks/useAuth'
import Head from 'next/head'
import { Header } from '@/modules/Base/Header/Header'
import { Preloader } from '@/components/ui/Preloader'
import Modal from '@/components/ui/Modal'
import AuthFormLayout from '@/modules/Security/AuthFormLayout'
import { Login } from '@/modules/Security/Login/Login'
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
import { useAppContext } from '@/infrastructure/nextjs/useAppContext'
import { ChatCtx, useChatContext } from '@/infrastructure/Chats/UseChatContext'
import { AppState } from '@/types/App'
import useUpdater from '@/hooks/useUpdater'
import AuthManagerServer from '@/modules/Security/Authentication/AuthManagerServer.server'

const tablet = theme.breakpoints.tablet.max
let inTabletSize = false

const LeadChat = (pageProps: any): JSX.Element => {
  const router: NextRouter = useRouter()
  const appContext: AppState = useAppContext()
  const chatContext: Chat.LeadContext = useChatContext()
  const socketManager = appContext.chatConnManager
  const update = useUpdater()
  appContext.isUserAuth = pageProps.isUserAuth
  appContext.userToken = pageProps.userToken
  appContext.userProfile = pageProps.userProfile

  const [isUserAuth, setUserAuth] = useState<boolean>(pageProps.isUserAuth)
  const [userReady, setUserReady] = useState<boolean>(true)
  const [isRouterReady, setIsRouterReady] = useState<boolean>(false)
  const [viewState, setViewState] = useState<ViewStates>(ViewStates.List)
  const [myProfile, setMyProfile] = useState<Chat.UserProfile>()
  const [messages, setMessages] = useState<Chat.Message[]>([])
  const [iamIsOwner, setIamIsOwner] = useState<boolean>(false)
  const [companions, setCompanions] = useState<Chat.Companions>()
  const [currentTab, setCurrentTab] = useState<ChatLeadTabs>(ChatLeadTabs.Lead)
  const [showChat, setShowChat] = useState<boolean>(false)
  const [leadOwnerProfile, setLeadOwnerProfile] = useState<User.PublicProfile>()
  const [isComponentReady, setComponentReady] = useState<boolean>(false)

  useWindowSize((size: WindowSize) => {
    inTabletSize = size.width <= tablet
    chatContext.inTabletSize = inTabletSize
    if (inTabletSize) {
      if (chatContext.tab.current === ChatLeadTabs.Chat) {
        setShowChat(true)
      }

      if (chatContext.tab.current !== ChatLeadTabs.Chat) {
        setShowChat(false)
      }
    }
    if (!inTabletSize) {
      setShowChat(true)
    }
  })

  useEffect(() => {
    if (!router.isReady) return
    setIsRouterReady(router.isReady)
    if (!isUserAuth) return
    socketManager.connect()
  }, [isUserAuth, router.isReady, socketManager])

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
    chatContext.lead = lead
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
    chatContext.messages.history = _messages
    setMessages(_messages)
    chatContext.messages.newCallback()
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
      setMyProfile(companions.companions.buyer)
    }
    if (companions.companions.seller.id === iam.id) {
      setMyProfile(companions.companions.seller)
    }
    chatContext.companions = companions
    chatContext.isContactOpened = ChatCtx.isContactOpened(companions)
    socketManager.joinToRoom(Number(companions.roomid), token, onRoomJoined)
  }

  socketManager.subscribe(
    (event: MessageEvent) => {
      const response = JSON.parse(event.data) as ApiResponseType
      const payload = response.payload as Chat.MessageSocketResponse
      const token = String(localStorage.getItem('token'))
      const iam = Security.parseJWT(token)
      let _messages: Chat.Message[] = chatContext.messages.history
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
      chatContext.messages.history = _messages
      setMessages(chatContext.messages.history)
      update()
      chatContext.messages.newCallback()
    },
    [ChatEvents.onNewMessage]
  )

  const onStateChanged = useCallback(() => {
    setViewState(ViewStates.List)
  }, [])

  const onSendMessage = useCallback(
    (msg: string) => {
      socketManager.sendMessage(msg)
      let _messages: Chat.Message[] = messages
      _messages.push({
        owner: {
          avatar: '/u/users/' + myProfile?.photo,
        },
        message: msg,
        direction: MessageDirection.Out,
        createdAt: new Date().toISOString(),
        isRead: false,
        roomId: 0,
      })
      setMessages(_messages)
    },
    [messages, socketManager]
  )

  chatContext.tab.OnChanged((tab: ChatLeadTabs) => {
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
  })

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
                    companions={companions}
                  />
                )}
                {!iamIsOwner && chatContext.lead && isComponentReady && (
                  <LeadSidebarSeller
                    className={'SidebarSeller'}
                    leadOwner={leadOwnerProfile}
                  />
                )}
              </div>
              {showChat && (
                <div className={'ChatMessages ChatSection'}>
                  <ChatMessages
                    myProfile={myProfile}
                    onStateChange={onStateChanged}
                    onSend={onSendMessage}
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

export async function getServerSideProps(context: any) {
  const tokenCookie: string | undefined = context.req.cookies.token
  if (!tokenCookie) {
    return { props: { isUserAuth: false, userToken: '' } }
  }
  const authManager = new AuthManagerServer()
  const isUserAuth = await authManager.validateToken(tokenCookie)
  let userProfile: User.PublicProfile | null = null
  if (isUserAuth) {
    userProfile = await authManager.getMyProfile(tokenCookie)
  }
  return {
    props: {
      isUserAuth: isUserAuth,
      userToken: tokenCookie,
      userProfile: userProfile,
    },
  }
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

  @media (max-width: ${tablet}px) {
    padding: 0;

    &.ChatInSidebar .ChatSidebar {
      height: auto;
    }

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
