import { Login } from '@/modules/Customer'
import Head from 'next/head'
import styled from 'styled-components'
import { useCallback } from 'react'

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
        <StyledLogin className="Container">
          <div className="Reg">
            <Login onSuccess={onSuccess} />
          </div>
        </StyledLogin>
      </StyledMain>
    </>
  )
}

const StyledMain = styled.main`
  background: #eef1f5;
  min-height: 100vh;
`

const StyledLogin = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 30px;

  .Reg {
    grid-column: 2 / span 10;
  }

  @media (max-width: 960px) {
    &.Container {
      padding-left: 10px;
      padding-right: 10px;
    }

    grid-template-columns: repeat(4, 1fr);
    grid-gap: 12px;

    .Reg {
      grid-column: 1 / span 4;
    }
  }

  @media (max-width: 576px) {
    &.Container {
      padding-left: 0;
      padding-right: 0;
    }
  }
`
