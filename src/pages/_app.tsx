import type { AppProps } from "next/app";
import { StylesProvider } from "../../styles/StylesProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider>
      <Component {...pageProps} />
    </StylesProvider>
  );
}
