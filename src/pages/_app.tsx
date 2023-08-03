import type { AppProps } from 'next/app'
import { StylesProvider } from '../../styles'
import { useEffect } from 'react'
import {
  GeocoderManager
} from "@/infrastructure/Google/geocoder/GeocoderManager";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.Miraden = window.Miraden || {}
  }, [])
  return (
    <StylesProvider>
      <Component {...pageProps} />
    </StylesProvider>
  )
}

declare global {
  interface Window {
    Miraden: any,
  }
}
