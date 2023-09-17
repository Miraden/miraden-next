import { ReactNode } from 'react'
import styled from 'styled-components'
import { Footer } from './Footer'
import { Header } from './Header/Header'
import { theme } from '../../../styles/tokens'
import { useAppContext } from '@/infrastructure/nextjs/useAppContext'

interface LayoutProps {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const app = useAppContext()

  return (
    <StyledHomePage>
      <Header isAuthorized={app.isUserAuth} isReady={true} />
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
