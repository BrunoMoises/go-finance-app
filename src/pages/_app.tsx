import '@/src/styles/globals.css'
import { darkTheme } from '@/src/styles/themes/dark'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import AppTemplate from '../components/AppTemplate'
import AuthProvider from '../providers/auth'
import GlobalStyles from '../styles/global'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={darkTheme}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        </Head>
        <GlobalStyles />
        <AppTemplate>
          <Component {...pageProps} />
        </AppTemplate>
        <ToastContainer theme="dark"/>
      </ThemeProvider>
    </AuthProvider>
  )
}
