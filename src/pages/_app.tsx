import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import { NextPage } from 'next'
import Footer from '../components/patters/footer'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className={'wrapper'}>
        <main>
          <Component {...pageProps} />
        </main>
        <Footer title={'teste'} />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
