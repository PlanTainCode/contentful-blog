import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import darkTheme from '../theme';
import { Header } from '../components';
import Head from 'next/head'


export default function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  return (
  <ThemeProvider theme={darkTheme}>
    <Head>
        <title>PlanTain Code</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
    </Head>
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
  </ThemeProvider>
  )
}

