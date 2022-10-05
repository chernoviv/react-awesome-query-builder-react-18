import Head from "next/head";
import type { AppProps } from "next/app";
import { StrictMode } from "react";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import createEmotionCache from "createEmotionCache";
import { theme } from "theme";
import "../styles/index.css";

const clientSideEmotionCache = createEmotionCache();

const App: React.FC<AppProps & { emotionCache: EmotionCache }> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <StrictMode>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </StrictMode>
    </>
  );
};

export default App;
