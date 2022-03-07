import { AppProps } from 'next/app'
import Head from 'next/head'
import { Global } from '@emotion/core'

import GlobalStyles from 'styles/global'

import ErrorBoundary from 'components/ErrorBoundary'
import { ThemeProvider } from '@emotion/react'

import { theme } from '../styles/theme/theme'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>React Avancado - Boilerplate</title>
				<link rel="shortcut icon" href="/img/icon-512.png" />
				<link rel="apple-touch-icon" href="/img/icon-512.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta
					name="description"
					content="A simple project starter to work with typescript, React, NextJs and Styled Components"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<ThemeProvider theme={theme}>
				<Global styles={GlobalStyles} />
				<ErrorBoundary>
					<Component {...pageProps} />
				</ErrorBoundary>
			</ThemeProvider>
		</>
	)
}

export default App
