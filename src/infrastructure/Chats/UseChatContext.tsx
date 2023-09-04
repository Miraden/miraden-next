import { createContext, PropsWithChildren, useContext } from 'react'
import { SellerStates } from '@/modules/Leads/types/LeadSellerStates'

const Default: Chat.LeadContext = {
  events: {},
  tab: {
    current: '',
    callback: Function,
    OnChanged: Function,
  },
  isContactOpened: false,
  lead: undefined,
  companions: undefined,
  companionsOnlineStatus: { isOnline: false },
  inTabletSize: false,
  messages: {
    history: [],
    onNew: Function,
    newCallback: Function,
  },
}

const ChatContext = createContext<Chat.LeadContext>(Default)

Default.tab.OnChanged = (callback: Function) => {
  Default.tab.callback = callback
}

Default.messages.onNew = (callback: Function) => {
  Default.messages.newCallback = callback
}

interface Props {}

export function ChatWrapper(props: PropsWithChildren<Props>): JSX.Element {
  return (
    <ChatContext.Provider value={Default}>
      {props.children}
    </ChatContext.Provider>
  )
}

export function useChatContext() {
  return useContext(ChatContext)
}

export namespace ChatCtx {
  export function isContactOpened(companions: Chat.Companions): boolean {
    return companions.seller_state === SellerStates.EXECUTANT
  }
}
