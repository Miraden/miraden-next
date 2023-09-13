import ChatConnManager from '@/modules/Chats/ChatConnManager'

declare interface AppState {
  chatConnManager: ChatConnManager
  isUserAuth: boolean
  userToken?: string
}
