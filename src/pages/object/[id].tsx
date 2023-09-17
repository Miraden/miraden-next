import React, { useState } from 'react'
import Head from 'next/head'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import { Header } from '@/modules/Base/Header'
import styled from 'styled-components'
import cn from 'classnames'
import AuthManagerServer from '@/modules/Security/Authentication/AuthManagerServer.server'
import { useAppContext } from '@/infrastructure/nextjs/useAppContext'

export default function ObjectEntry(pageProps: any): JSX.Element {
  const appContext = useAppContext()

  const [isUserAuth, setUserAuth] = useState(appContext.isUserAuth)
  const [userReady, setUserReady] = useState<boolean>(true)

  return (
    <>
      <Head>
        <title>Miraden - Объект</title>
      </Head>
      <BlankLayout>
        <Header isAuthorized={isUserAuth} isReady={userReady} />
        <StyledPage className={'ContainerFull'}>
          <div className={cn('PageWrapper')}>
            <div className={cn('PageContent')}>Object entry</div>
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
  return { props: { isUserAuth: isUserAuth } }
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
