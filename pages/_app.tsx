import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="crossOrigin"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-dynamic-subset.css"
        />
        <title>KUAAA</title>
        <meta
          name="description"
          content="고려대학교 아마추어 천문회 KUAAA 공식 페이지."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="KUAAA" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="kuaaa.net" />
        <meta
          property="og:image"
          content="https://kuaaa.net/landing-background-main.jpg"
        />
        <meta property="og:site_name" content="KUAAA" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:title" content="KUAAA" />
        <meta
          name="twitter:description"
          content="고려대학교 아마추어 천문회 KUAAA 공식 페이지."
        />
        <meta
          name="twitter:image"
          content="https://kuaaa.net/landing-background-main.jpg"
        />
      </Head>
      <Global
        styles={css`
          ${emotionReset}

          html {
            font-family: Pretendard, -apple-system, BlinkMacSystemFont,
              system-ui, Roboto, "Helvetica Neue", "Segoe UI",
              "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
              "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
              sans-serif;
          }

          *,
          *::after,
          *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
