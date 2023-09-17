import Head from 'next/head'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import { Header } from '@/modules/Base/Header'
import styled from 'styled-components'
import React, { useState } from 'react'
import { ApplicationFull } from '@/modules/ApplicationsFull/Application'
import useAuth from '@/hooks/useAuth'
import { useAppContext } from '@/infrastructure/nextjs/useAppContext'
import AuthManagerServer from '@/modules/Security/Authentication/AuthManagerServer.server'

export default function MyLeadsPage(pageProps: any): JSX.Element {
  const appContext = useAppContext()
  appContext.isUserAuth = pageProps.isUserAuth
  appContext.userProfile = pageProps.userProfile
  const [isUserAuth, setUserAuth] = useState<boolean>(appContext.isUserAuth)

  return (
    <>
      <Head>
        <title>Miraden - Мои Заявки</title>
      </Head>
      <BlankLayout>
        <Header isAuthorized={isUserAuth} isReady={true} />
        <StyledMyLeads className={'ContainerFull'}>
          <ApplicationFull className="Application" />
        </StyledMyLeads>
      </BlankLayout>
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

const StyledMyLeads = styled.div`
  max-width: calc(1920px);
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  position: relative;

  .LeadsWrapper {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    gap: 30px;
    padding-left: 55px;
    padding-right: 55px;
  }

  .LeadsContent {
    grid-column: 5 / span 10;
    min-width: 970px;
    max-width: 970px;
  }
`
