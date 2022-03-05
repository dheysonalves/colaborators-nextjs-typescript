import { AppProps } from 'next/app'
import Head from 'next/head'
import { Global } from '@emotion/core'

import GlobalStyles from 'styles/global'

import ErrorBoundary from 'components/ErrorBoundary'
import { ThemeProvider } from '@emotion/react'
import { theme } from 'styles/theme/lightTheme'

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
			</Head>
			<ThemeProvider theme={theme.light}>
				<Global styles={GlobalStyles} />
				<ErrorBoundary>
					<Component {...pageProps} />
				</ErrorBoundary>
			</ThemeProvider>
		</>
	)
}

export default App
