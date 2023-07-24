import { NotFoundLayout } from '@/modules/404/NotFoundLayout'
import { Header } from '@/modules/Base/Header'
import Head from 'next/head'
import styled from 'styled-components'
import { useState } from 'react'
import useAuth from "@/hooks/useAuth";

export default function NotFoundPage() {
  const [isUserAuth, setUserAuth] = useState<boolean>(false)
  const [userReady, setUserReady] = useState<boolean>(false)

  useAuth({
    onSuccess: (): void => {
      setUserAuth(true)
      setUserReady(true)
    },

    onFailure: (): void => {
      setUserAuth(false)
      setUserReady(true)
    },
  })

  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StyledNotFoundPage>
        <Header isAuthorized={isUserAuth} isReady={userReady} />
        <NotFoundLayout />
      </StyledNotFoundPage>
    </>
  )
}

const StyledNotFoundPage = styled.main`
  background: #eef1f5;
  min-height: 100vh;
`;
