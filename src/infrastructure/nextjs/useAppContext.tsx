import { createContext, PropsWithChildren, useContext } from 'react'
import ChatConnManager from '@/modules/Chats/ChatConnManager'
import { AppState } from '@/types/App'
import Cookies from 'js-cookie'

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
  if (!props.pageProps.isUserAuth && typeof window !== 'undefined') {
    Cookies.remove('token')
    localStorage.removeItem('token')
  }
  return (
    <AppContext.Provider
      value={{
        chatConnManager: socketManager,
        isUserAuth: props.pageProps.isUserAuth,
        userProfile: props.pageProps.userProfile,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
