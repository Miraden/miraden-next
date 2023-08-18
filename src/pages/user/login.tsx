import { Login } from '@/modules/Customer'
import Head from 'next/head'
import styled from 'styled-components'
import { useCallback } from 'react'
import AuthFormLayout from "@/modules/Security/AuthFormLayout";

export default function LoginPage() {
  const onSuccess = useCallback(() => {
      window.location.href = '/'
  }, [])

  return (
    <>
      <Head>
        <title>Miraden - Login</title>
      </Head>
      <StyledMain>
        <AuthFormLayout>
          <Login onSuccess={onSuccess} />
        </AuthFormLayout>
      </StyledMain>
    </>
  )
}

const StyledMain = styled.main`
  background: #eef1f5;
  min-height: 100vh;
`
