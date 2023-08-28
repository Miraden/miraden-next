import { createContext, PropsWithChildren, useContext } from 'react'

const Default: Chat.LeadContext = {
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
}

const ChatContext = createContext<Chat.LeadContext>(Default)
Default.tab.OnChanged = (callback: Function) => {
  Default.tab.callback = callback
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
