import Head from 'next/head'
import React, { useState } from 'react'
import useAuth from '@/hooks/useAuth'
import { Header } from '@/modules/Base/Header'
import { Preloader } from '@/components/ui/Preloader'
import styled from 'styled-components'
import ChatLayout, { ViewStates } from '@/modules/Chats/ChatLayout'
import { theme } from '../../../../styles/tokens'
import Modal from '@/components/ui/Modal'
import AuthFormLayout from '@/modules/Security/AuthFormLayout'
import { Login } from '@/modules/Customer'
import { useWindowSize, WindowSize } from '@/hooks/useWindowSize'

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max
let inMobileMode: boolean = false

const Chat = (): JSX.Element => {
  const [isUserAuth, setUserAuth] = useState<boolean>(false)
  const [userReady, setUserReady] = useState<boolean>(false)
  const [viewState, setViewState] = useState<ViewStates>(ViewStates.List)

  useWindowSize((size: WindowSize) => {
    inMobileMode = size.width < tablet
  })

  useAuth({
    onSuccess: (): void => {
      setUserAuth(true)
    },

    onFailure: (): void => {
      setUserAuth(false)
    },

    onResponse: (): void => {
      setUserReady(true)
    },
  })

  return (
    <>
      <Head>
        <title>Miraden - Чат</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <StyledMainContainer>
        <Header isAuthorized={isUserAuth} isReady={userReady} />
        {!userReady && !isUserAuth && <Preloader />}
        {!isUserAuth && userReady && (
          <Modal>
            <AuthFormLayout inModal={true}>
              <Login
                onSuccess={(e: any) => {
                  setUserAuth(true)
                }}
              />
            </AuthFormLayout>
          </Modal>
        )}

        {isUserAuth && userReady && (
          <StyledChatPage className={'ContainerFull'}>
            <ChatLayout>
              <div className="ChatSidebar ChatSection">list</div>
              <div className="ChatMessages ChatSection">messages</div>
            </ChatLayout>
          </StyledChatPage>
        )}
      </StyledMainContainer>
    </>
  )
}

const StyledMainContainer = styled.main`
  @media (max-width: ${tablet}px) {
    .Header__main {
      display: none;
    }
  }
`

const StyledChatPage = styled.div`
  padding: 20px;
  height: 100%;

  @media (max-width: ${tablet}px) {
    padding: 0;
  }
`

export default Chat
