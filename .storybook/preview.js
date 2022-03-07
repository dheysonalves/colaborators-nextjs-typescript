import { Global } from '@emotion/core'
import { ThemeProvider } from "emotion-theming";
import GlobalStyles from '../src/styles/global';
import { theme } from '../src/styles/theme/theme'

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme} >
			<Global styles={GlobalStyles} />
			<Story />
		</ThemeProvider>
	),
]

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" }
}
