import Head from 'next/head'
import React, { useState } from 'react'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import cn from 'classnames'
import styled from 'styled-components'
import { Header } from '@/modules/Base/Header'
import useAuth from '@/hooks/useAuth'
import AuthManagerServer from '@/modules/Security/Authentication/AuthManagerServer.server'
import { useAppContext } from '@/infrastructure/nextjs/useAppContext'

export default function ProfilePage(pageProps: any): JSX.Element {
  const app = useAppContext()
  app.isUserAuth = pageProps.isUserAuth
  app.userToken = pageProps.userToken
  app.userProfile = pageProps.userProfile

  return (
    <>
      <Head>
        <title>Miraden - Личный кабинет</title>
      </Head>
      <BlankLayout>
        <Header isAuthorized={app.isUserAuth} isReady={true} />
        <StyledPage className={'ContainerFull'}>
          <div className={cn('PageWrapper')}>
            <div className={cn('PageContent')}>Profile page</div>
          </div>
        </StyledPage>
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

const StyledPage = styled.div`
  max-width: calc(1920px);
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  position: relative;
  margin-top: 30px;

  .PageWrapper {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    grid-gap: 30px;
    padding-left: 55px;
    padding-right: 55px;
  }

  .PageContent {
    min-width: 970px;
    max-width: 970px;
    grid-column: 5 / span 10;
  }
`
