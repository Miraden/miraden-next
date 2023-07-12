import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import { Header } from '@/modules/Base/Header'
import AuthManager from '@/modules/Security/Authentication/AuthManager'
import styled from 'styled-components'
import cn from 'classnames'
import {Footer} from "@/modules/Base/Footer";

const authManger = new AuthManager()

export default function AboutPage() {
  const [isUserAuth, setUserAuth] = useState(false)
  useEffect(() => {
    setUserAuth(authManger.isUserHasToken())
  }, [isUserAuth])

  return (
    <>
      <Head>
        <title>Miraden - О нас</title>
      </Head>
      <BlankLayout>
        <Header isAuthorized={isUserAuth} />
        <StyledPage className={'ContainerFull'}>
          <div className={cn('PageWrapper')}>
            <div className={cn('PageContent')}>
              about page
            </div>
          </div>
        </StyledPage>
        <Footer />
      </BlankLayout>
    </>
  )
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
  flex-grow: 1;

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