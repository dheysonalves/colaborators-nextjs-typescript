import GlobalStyles from '../src/styles/global';
import { ThemeProvider } from '@emotion/react'
import { theme } from '../src/styles/theme/lightTheme'
import { Global } from '@emotion/core'

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<Global styles={GlobalStyles} />
			<Story />
		</ThemeProvider>
	)
]

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" }
}
