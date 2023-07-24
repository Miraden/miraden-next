import { ApplicationsFullLayout } from '@/modules/ApplicationsFull/ApplicationsFullLayout'
import { Header } from '@/modules/Base/Header'
import Head from 'next/head'
import styled from 'styled-components'
import { useState } from 'react'
import useAuth from '@/hooks/useAuth'

export default function ApplicationsFull() {
  const [isUserAuth, setUserAuth] = useState(false)

  useAuth({
    onSuccess: (): void => {
      setUserAuth(true)
    },

    onFailure: (): void => {
      setUserAuth(false)
    },
  })

  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StyledMainApplications>
        <Header isAuthorized={isUserAuth} />
        <ApplicationsFullLayout />
      </StyledMainApplications>
    </>
  )
}

const StyledMainApplications = styled.main`
  background: #eef1f5;
  min-height: 100vh;
`;
