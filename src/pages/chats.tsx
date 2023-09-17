import { Header } from '@/modules/Base/Header'
import Head from 'next/head'
import styled from 'styled-components'
import { Chats } from '@/modules/Chats/Chats'
import React, { useEffect, useState } from 'react'
import { theme } from '../../styles/tokens'
import Modal from '@/components/ui/Modal'
import { Login } from '@/modules/Security/Login/Login'
import { Preloader } from '@/components/ui/Preloader'
import AuthFormLayout from '@/modules/Security/AuthFormLayout'
import AuthManagerServer from '@/modules/Security/Authentication/AuthManagerServer.server'
import { useAppContext } from '@/infrastructure/nextjs/useAppContext'

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

export default function ApplicationsChatsAllPage(pageProps: any) {
  const [isUserAuth, setUserAuth] = useState<boolean>(false)
  const [userReady, setUserReady] = useState<boolean>(false)
  const appContext = useAppContext()

  useEffect(() => {}, [])

  return (
    <>
      <Head>
        <title>Miraden - Чаты</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StyledMainApplications>
        <Header isAuthorized={appContext.isUserAuth} isReady={userReady} />
        {!appContext.isUserAuth && <Preloader />}
        {!appContext.isUserAuth && (
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
        {appContext.isUserAuth && <Chats isAppAuth={appContext.isUserAuth} />}
      </StyledMainApplications>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const tokenCookie: string | undefined = context.req.cookies.token
  if (!tokenCookie) {
    return { props: { isUserAuth: false, userToken: '' } }
  }
  const authManager = new AuthManagerServer()
  const isUserAuth = await authManager.validateToken(tokenCookie)
  let userProfile: User.PublicProfile | null = null
  if (isUserAuth) {
    userProfile = await authManager.getMyProfile(tokenCookie)
  }
  return {
    props: {
      isUserAuth: isUserAuth,
      userToken: tokenCookie,
      userProfile: userProfile,
    },
  }
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
