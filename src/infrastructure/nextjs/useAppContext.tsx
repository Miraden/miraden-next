import { createContext, PropsWithChildren, useContext, useEffect } from 'react'
import ChatConnManager from '@/modules/Chats/ChatConnManager'
import { AppState } from '@/types/App'

const socketManager = new ChatConnManager(process.env.NEXT_PUBLIC_CHAT_URL)
const AppContext = createContext<AppState>({ chatConnManager: socketManager })

interface Props {}

export function AppWrapper(props: PropsWithChildren<Props>): JSX.Element {
  return (
    <AppContext.Provider value={{ chatConnManager: socketManager }}>
      {props.children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
