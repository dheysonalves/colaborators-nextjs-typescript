import React from 'react'

import { ThemeProvider } from '@emotion/react'
import { render } from '@testing-library/react'
import { theme } from '../../styles/theme/theme'

import NavBar from '.'

global.window.matchMedia = jest.fn().mockReturnValue({
	matches: true,
	addListener: () => {
		return
	},
	removeListener: () => {
		return
	},
})

const setup = () => {
	const utils = render(
		<ThemeProvider theme={theme}>
			<NavBar />
		</ThemeProvider>,
	)
	return {
		...utils,
	}
}

describe('<NavBar />', () => {
	it('should render the heading', () => {
		beforeEach(() => {
			window.matchMedia('(max-width: 1199px)')
		})
		const { container } = setup()

		expect(container.firstChild).toMatchSnapshot()
	})
})
