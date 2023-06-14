import type { AppProps } from "next/app";
import { StylesProvider } from "../../styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider>
      <Component {...pageProps} />
    </StylesProvider>
  );
}
