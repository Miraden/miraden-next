import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import ChatConnManager from '@/modules/Chats/ChatConnManager'
import { AppState } from '@/types/App'

const socketManager = new ChatConnManager(process.env.NEXT_PUBLIC_CHAT_URL)

const AppContext = createContext<AppState>({
  chatConnManager: socketManager,
  isUserAuth: false,
  userProfile: null,
})

interface Props {
  pageProps: any
}

export function AppWrapper(props: PropsWithChildren<Props>): JSX.Element {
  return (
    <AppContext.Provider
      value={{
        chatConnManager: socketManager,
        isUserAuth: false,
        userProfile: null,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
