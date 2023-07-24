import Head from "next/head";
import React, {useState} from "react";
import { BlankLayout } from '@/modules/Base/BlankLayout'
import cn from "classnames";
import styled from "styled-components";
import {Header} from "@/modules/Base/Header";
import useAuth from "@/hooks/useAuth";

export default function ProfilePage(): JSX.Element {
  const [isUserAuth, setUserAuth] = useState(false)
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
    }
  })

  return (
    <>
      <Head>
        <title>Miraden - Личный кабинет</title>
      </Head>
      <BlankLayout>
        <Header isAuthorized={isUserAuth} isReady={userReady} />
        <StyledPage className={'ContainerFull'}>
          <div className={cn('PageWrapper')}>
            <div className={cn('PageContent')}>Profile page</div>
          </div>
        </StyledPage>
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
