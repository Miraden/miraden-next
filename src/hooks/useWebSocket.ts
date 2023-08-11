import { useEffect } from 'react'
import ChatConnManager from '@/modules/Chats/ChatConnManager'

export interface WebSocketEvents {
  onOpen: Function
  onMessage: Function
  onClose: Function
  url: string
}

const socketManager: ChatConnManager = new ChatConnManager()
let isOpened: boolean = false

const useWebSocket = (props: WebSocketEvents): ChatConnManager => {
  useEffect(() => {
    if (isOpened) return
    socketManager.create(props.url)
    socketManager.OnOpen(() => {
      isOpened = true
      props.onOpen(socketManager)
    })
    socketManager.OnClose(() => {
      isOpened = false
      props.onClose()
    })
    socketManager.OnMessage(props.onMessage())
  }, [props])

  return socketManager
}

export default useWebSocket
