import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ChatMessages, MessageDirection } from './components/ChatMessages'
import { useWindowSize, WindowSize } from '@/hooks/useWindowSize'
import { theme } from '../../../styles/tokens'
import ChatsList from '@/modules/Chats/components/ChatsList'
import ChatConnManager from '@/modules/Chats/ChatConnManager'
import useUpdater from '@/hooks/useUpdater'
import { Security } from '@/infrastructure/Security/JWT/JWTManager'
import { ChatEvents } from '@/modules/Chats/ChatEvents'
import { ChatTabs } from '@/infrastructure/Chats/ChatTabs'
import ChatLayout, { ViewStates } from '@/modules/Chats/ChatLayout'
import cn from 'classnames'

interface Props {
  className?: string
  isAppAuth: boolean
}

const mobile = theme.breakpoints.mobile.max
const tablet = theme.breakpoints.tablet.max

let inMobileMode: boolean = false
const socketManager = new ChatConnManager()
let isSocketActive = false

const Chats = (props: Props) => {
  const [viewState, setViewState] = useState<ViewStates>(ViewStates.List)
  const [messages, setMessages] = useState<Chat.Message[]>([])
  const [myProfile, setMyProfile] = useState<Chat.UserProfile>()
  const [activeRoom, setActiveRoom] = useState<number>(0)
  const [activeLead, setActiveLead] = useState<number>(0)
  const [activeChat, setActiveChat] = useState<ChatTabs>(ChatTabs.All)
  const [roomsList, setRoomsList] = useState<Chat.RoomsList[]>([])
  const [isSocketReady, setIsSocketReady] = useState<boolean>(false)
  const [leadsList, setLeadsList] = useState<Chat.Leads[]>([])
  const [leadsListReset, setLeadsListReset] = useState<boolean>(false)
  const update = useUpdater()

  useEffect(() => {
    if (isSocketActive) return
    const url: string | undefined = process.env.NEXT_PUBLIC_CHAT_URL
    socketManager.create(url)
    isSocketActive = true
  }, [])

  socketManager.OnOpen(() => {
    setIsSocketReady(true)
    const token = String(localStorage.getItem('token'))
    socketManager.getLeadsList(token, activeChat.toString())
  })

  socketManager.OnMessage((event?: MessageEvent) => {
    const iam = Security.parseJWT(String(localStorage.getItem('token')))
    if (!event) return
    const r = JSON.parse(event.data) as ApiResponseType
    const token = String(localStorage.getItem('token'))

    if (r.metadata?.event === ChatEvents.onRoomJoin) {
      const payload: any = r.payload as Object
      const roomId: number = Number(payload.roomId)
      const token = String(localStorage.getItem('token'))
      socketManager.queryHistory(token, roomId)
      setActiveRoom(roomId)
      socketManager.getCompanionsForRoom(token, roomId)
    }

    if (r.metadata?.event === ChatEvents.onHistoryPageUpdate) {
      const payload = r.payload as Chat.MessageSocketResponse[]
      if (!payload) return
      let msgs: Chat.Message[] = []
      payload.map((msg: Chat.MessageSocketResponse) => {
        msgs.push({
          owner: {
            avatar: '/u/users/' + msg.owner_photo,
          },
          message: msg.message_text,
          direction:
            msg.owner_id === iam.id
              ? MessageDirection.Out
              : MessageDirection.In,
          createdAt: msg.message_created_date,
          isRead: msg.message_is_guest_reading,
          roomId: msg.roomId,
        })
      })
      setMessages(msgs)
    }

    if (r.metadata?.event === ChatEvents.onGetRoomsList) {
      const payload = r.payload as Chat.RoomsList[]
      if (!payload) return
      setRoomsList(payload)
    }

    if (r.metadata?.event === ChatEvents.onGetLeadsList) {
      const payload = r.payload as Chat.Leads[]
      if (!payload) return
      setLeadsList(payload)
      setLeadsListReset(false)
      const token = String(localStorage.getItem('token'))
      const leads: number[] = payload.map(el => el.id)
      socketManager.getRoomsList(leads, token, activeChat.toString())
    }

    if (r.metadata?.event === ChatEvents.onNewMessage) {
      const payload = r.payload as Chat.MessageSocketResponse
      if (!payload) return
      if (activeRoom !== payload.roomId) return
      let msgs: Chat.Message[] = messages
      msgs.push({
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
      setMessages(msgs)
      update()
    }

    if (r.metadata?.event === ChatEvents.onGetCompanions) {
      const payload = r.payload as Chat.Companions
      if (!payload) return
      setMyProfile(payload.myCompanion)
    }

    if (r.metadata?.event === ChatEvents.onMessageDelivered) {
      const payload = r.payload as Chat.MessageSocketResponse
      if (!payload) return
      let msgs: Chat.Message[] = messages
      msgs.push({
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
      setMessages(msgs)
      update()
    }
  })

  useWindowSize((size: WindowSize) => {
    inMobileMode = size.width < tablet
  })

  const onRoomSelected = useCallback((room: number, lead: number) => {
    setViewState(ViewStates.Messages)
    const token = localStorage.getItem('token')
    if (!token) return
    if (!socketManager) return
    socketManager.joinToRoom(room, token)
    setMessages([])
    setActiveRoom(room)
    setActiveLead(lead)
  }, [])

  const onSendMessage = useCallback((msg: string) => {
    socketManager.sendMessage(msg)
  }, [])

  const onStateChanged = useCallback(() => {
    setViewState(ViewStates.List)
  }, [])

  const onChatTab = useCallback((tab: ChatTabs) => {
    setActiveChat(tab)
    setLeadsListReset(true)
    const token = String(localStorage.getItem('token'))
    socketManager.getLeadsList(token, tab.toString())
  }, [])

  const onLeadSelect = useCallback(
    (lead: number) => {
      setActiveLead(lead)
      const token = String(localStorage.getItem('token'))
      if (lead > 0) {
        socketManager.getRoomsList([lead], token, activeChat.toString())
      }
    },
    [activeChat]
  )

  return (
    <StyledPage className={cn('ContainerFull')}>
      <ChatLayout viewState={viewState}>
        <ChatsList
          leadsReset={leadsListReset}
          onLeadSelected={onLeadSelect}
          leadsList={leadsList}
          onTabSelected={onChatTab}
          roomsList={roomsList}
          onRoomSelected={onRoomSelected}
        />
        <ChatMessages
          myProfile={myProfile}
          messages={messages}
          inMobileMode={inMobileMode}
          onStateChange={onStateChanged}
          onSend={onSendMessage}
          activeRoom={activeRoom}
        />
      </ChatLayout>
    </StyledPage>
  )
}

const StyledPage = styled.div`
  padding: 20px;
  height: 100%;

  @media (max-width: ${tablet}px) {
    padding: 0;
  }
`

export { Chats }
