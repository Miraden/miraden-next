import { DependencyList, useEffect } from 'react'
import ChatConnManager from '@/modules/Chats/ChatConnManager'
import { ApiResponse } from '@/infrastructure/Network/Http/ApiResponse'

export interface WebSocketEvents {
  onOpen: Function
  onMessage: (response: ApiResponseType) => void
  onClose: Function
  url: string
}

const socketManager: ChatConnManager = new ChatConnManager()
let isOpened: boolean = false

const useWebSocket = (
  props: WebSocketEvents,
  deps?: DependencyList
): ChatConnManager => {
  useEffect(() => {
    if (isOpened) return
    socketManager.create(props.url)
    socketManager.OnOpen(() => {
      props.onOpen(socketManager)
    })
    socketManager.OnClose(() => {
      isOpened = false
      props.onClose()
    })
    socketManager.OnMessage((event?: MessageEvent) => {
      const response = new ApiResponse()
      if (!event) return response
      const r = JSON.parse(event.data) as ApiResponseType
      props.onMessage(r)
    })
    isOpened = true
  }, [props, deps])

  return socketManager
}

export default useWebSocket
