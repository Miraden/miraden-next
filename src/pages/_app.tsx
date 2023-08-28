import type { AppProps } from 'next/app'
import { StylesProvider } from '../../styles'
import { AppWrapper } from '@/infrastructure/nextjs/useAppContext'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.Miraden = window.Miraden || {}
  }, [])
  return (
    <AppWrapper>
      <StylesProvider>
        <Component {...pageProps} />
      </StylesProvider>
    </AppWrapper>
  )
}

declare global {
  interface Window {
    Miraden: any
  }
}
