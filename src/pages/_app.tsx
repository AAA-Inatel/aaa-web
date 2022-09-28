import GlobalStyle from "../styles/global";
import type { AppProps } from "next/app";
import FontStyles from "../styles/fonts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FontStyles />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
