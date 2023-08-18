import { Header } from '@/modules/Base/Header'
import Head from 'next/head'
import styled from 'styled-components'
import { Chats } from '@/modules/Chats/Chats'
import React, { useState } from 'react'
import useAuth from '@/hooks/useAuth'
import { theme } from '../../styles/tokens'
import Modal from '@/components/ui/Modal'
import { Login } from '@/modules/Customer'
import { Preloader } from '@/components/ui/Preloader'
import AuthFormLayout from '@/modules/Security/AuthFormLayout'

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

export default function ApplicationsChatsAllPage() {
  const [isUserAuth, setUserAuth] = useState<boolean>(false)
  const [userReady, setUserReady] = useState<boolean>(false)

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
        <title>Miraden - Чаты</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StyledMainApplications>
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
        {isUserAuth && userReady && <Chats isAppAuth={isUserAuth} />}
      </StyledMainApplications>
    </>
  )
}

const StyledMainApplications = styled.main`
  @media (max-width: ${tablet}) {
    .Header__main {
      display: none;
    }
  }

  @media (max-width: ${mobile}) {
    .ApplicationsChatsAllPage__header {
      display: none;
    }
  }
`
