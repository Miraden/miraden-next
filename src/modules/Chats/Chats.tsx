import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ChatMessages } from './components/ChatMessages'
import { useWindowSize, WindowSize } from '@/hooks/useWindowSize'
import { theme } from '../../../styles/tokens'
import ChatsList from '@/modules/Chats/components/ChatsList'
import ChatConnManager from '@/modules/Chats/ChatConnManager'
import useUpdater from '@/hooks/useUpdater'
import {Security} from "@/infrastructure/Security/JWT/JWTManager";
import MyProfile = Chat.MyProfile;

interface Props {
  className?: string
  isAppAuth: boolean
}

enum MobileStates {
  List = 'list',
  Messages = 'messages',
}

const mobile = theme.breakpoints.mobile.max
const tablet = theme.breakpoints.tablet.max

let inMobileMode: boolean = false
const socketManager = new ChatConnManager()
let isSocketActive = false

const Chats = (props: Props) => {
  const [mobileState, setMobileState] = useState<MobileStates>(
    MobileStates.List
  )
  const [messages, setMessages] = useState<Chat.Message[]>([])
  const [myProfile, setMyProfile] = useState<Chat.MyProfile>()
  const update = useUpdater()

  useEffect(() => {
    if (isSocketActive) return
    const url: string|undefined = process.env.NEXT_PUBLIC_CHAT_URL
    socketManager.create(url)
    isSocketActive = true
  }, [messages])

  socketManager.OnMessage((event?: MessageEvent) => {
    const iam = Security.parseJWT(String(localStorage.getItem('token')))
    if (!event) return
    const r = JSON.parse(event.data) as ApiResponseType
    if (r.metadata?.event === 'onRoomJoin') {
      socketManager.queryHistory()
    }

    if (r.metadata?.event === 'onHistoryPageUpdate') {
      const payload = r.payload as Chat.MessageSocketResponse[]
      if(!payload) return
      let msgs: Chat.Message[] = []
      payload.map((msg: any, id) => {
        msgs.push({
          owner: {
            avatar: '/u/users/' + msg.owner_photo,
          },
          message: msg.message_text,
          direction: (msg.owner_id === iam.id) ? 'out' : 'in',
          createdAt: msg.message_created_date,
          isRead: true,
        })
      })
      setMessages(msgs)
    }

    if (r.metadata?.event === 'onNewMessage') {
      const payload: Chat.MessageSocketResponse = r.payload as Chat.MessageSocketResponse
      if(!payload) return
      let msgs: Chat.Message[] = messages
      msgs.push({
        owner: {
          avatar: '/u/users/' + payload.owner_photo,
        },
        message: payload.message_text,
        direction: (payload.owner_id === iam.id) ? 'out' : 'int',
        createdAt: payload.message_created_date,
        isRead: true,
      })
      setMessages(msgs)
      update()
    }

    if(r.metadata?.event === 'onGetMyProfile') {
      const payload = r.payload as any
      if(!payload) return
      setMyProfile(payload)
    }

    if(r.metadata?.event === 'onMessageDelivered') {

    }
  })

  socketManager.OnOpen(() => {
    socketManager.queryRoomsList(0 ,String(localStorage.getItem('token')))
    socketManager.queryMyProfile(String(localStorage.getItem('token')))
  })

  useWindowSize((size: WindowSize) => {
    inMobileMode = size.width < tablet
  })

  const onRoomSelected = useCallback((room: number, lead: number) => {
    setMobileState(MobileStates.Messages)
    const token = localStorage.getItem('token')
    if (!token) return
    if (!socketManager) return
    socketManager.joinToRoom(room, token, lead)
    setMessages([])
  }, [])

  const onSendMessage = useCallback((msg: string) => {
    socketManager.sendMessage(msg)
  }, [])

  const onStateChanged = useCallback((e: any) => {
    setMobileState(MobileStates.List)
  }, [])

  return (
    <StyledChats className="ContainerFull">
      <div className="Chats">
        {inMobileMode && mobileState === MobileStates.List && (
          <div className="ChatsList ChatSection">
            <ChatsList onRoomSelected={onRoomSelected} />
          </div>
        )}
        {inMobileMode && mobileState === MobileStates.Messages && (
          <div className="ChatsMessages ChatSection">
            <ChatMessages
              myProfile={myProfile}
              messages={messages}
              inMobileMode={inMobileMode}
              onStateChange={onStateChanged}
              onSend={onSendMessage}
            />
          </div>
        )}
        {!inMobileMode && (
          <>
            <div className="ChatsList ChatSection">
              <ChatsList onRoomSelected={onRoomSelected} />
            </div>
            <div className="ChatsMessages ChatSection">
              <ChatMessages myProfile={myProfile} messages={messages} inMobileMode={false} onSend={onSendMessage} />
            </div>
          </>
        )}
      </div>
    </StyledChats>
  )
}

const StyledChats = styled.section`
  height: 100%;
  padding-bottom: 20px;
  display: flex;

  .Chats {
    padding-top: 20px;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 40px;
    width: 100%;
    justify-content: space-between;

    &List {
      width: 35.1%;
      height: calc(100vh - 114px);
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &Messages {
      flex-grow: 1;
    }
  }

  @media (max-width: ${tablet}px) {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;

    .Chats {
      flex-direction: column;
      padding-top: 0;
      gap: 0;

      &List {
        width: 100%;
        height: 100vh;
        gap: 10px;
      }
    }
  }

  @media (max-width: ${mobile}px) {
    .Chats {
      &List {
        gap: 0;
      }
    }
  }
`

export { Chats }
