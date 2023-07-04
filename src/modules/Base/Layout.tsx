import { ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Footer } from './Footer'
import { Header } from './Header/Header'
import AuthManager from '@/modules/Security/Authentication/AuthManager'

interface LayoutProps {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const [isUserAuth, setUserAuth] = useState(false)

  useEffect(() => {
    const authManger = new AuthManager()
    setUserAuth(authManger.isUserHasToken())
  }, [isUserAuth])

  return (
    <StyledHomePage>
      <Header isAuthorized={isUserAuth} />
      <main>{children}</main>
      <Footer />
    </StyledHomePage>
  )
}

const StyledHomePage = styled.div`
  background: #eef1f5;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
`
