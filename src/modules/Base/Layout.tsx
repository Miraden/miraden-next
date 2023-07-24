import { ReactNode, useState } from 'react'
import styled from 'styled-components'
import { Footer } from './Footer'
import { Header } from './Header/Header'
import { theme } from '../../../styles/tokens'
import useAuth from '@/hooks/useAuth'

interface LayoutProps {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const [isUserAuth, setUserAuth] = useState<boolean>(false)

  useAuth({
    onSuccess: (): void => {
      setUserAuth(true)
    },

    onFailure: (): void => {
      setUserAuth(false)
    },
  })

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
  color: ${theme.colors.black};
`
